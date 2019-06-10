var  view =
{
  displayMessage: function(message)
  {
    document.getElementById("MessageArea").innerHTML = message;
  },
  displayHit: function(location)
  {
    document.getElementById(location).setAttribute("class", "hit");
  },
  displayMiss: function(location)
  {
    document.getElementById(location).setAttribute("class", "miss");
  }
};

var model =
{
  boardSize: 7,
  numShips: 3,
  shipLength: 3,
  shipsSunk: 0,

  ships: [{locations: ["06","16","26"], hits: ["","",""]},
          {locations: ["24","34","44"], hits: ["","",""]},
          {locations: ["10","11","12"], hits: ["","",""]}],

  fire: function(guess)
  {
    for(var i = 0; i < this.numShips; i++)
    {
      var ship = this.ships[i];
      var index = ship.locations.indexOf(guess);
      if(index>=0)
      {
        ship.hits[index] = "hit";
        view.displayHit(guess);
        view.displayMessage("HIT!");
        if(this.isSunk(ship))
        {
          view.displayMessage("You sank my battleship!");
          this.shipsSunk++;
        }
        return true;
      }
    }
    view.displayMiss(guess);
    view. displayMessage("You missed!")
    return false;
  },


  isSunk: function(ship)
  {
    for(var i = 0; i < this.shipLength; i++)
    {
      if(ship.hits[i] !== "hit")
      {
        return false;
      }
    }
    return true;
  },

  generateShipLocations: function()
  {
    var locations;
    for(var i=0; i<this.numShips; i++)
    {
      do
      {
        locations = this.generateShip()
      } while (this.collision(locations));
      this.ships[i].locations = locations;
    }
  },

  generateShip: function()
  {
    var isHorizontal = Math.floor(Math.random()*2)
    var row;
    var col;
    if(isHorizontal===1)
    {
      row = Math.floor(Math.random() * 5);
    }
    else
    {
      //bar
    }
  }
};

var controller =
{
  alphabet: ["A", "B", "C", "D", "E", "F", "G"],
  numberOfGuesses: 0,
  parseGuess: function(guess)
  {
    if((guess === null || guess.length !== 2))
    {
      alert("Please enter a valid input: One letter and one number, out of " +
            "any you see on the board.");
    }
    else
    {
      var firstChar = guess.charAt(0).toUpperCase();
      var row = this.alphabet.indexOf(firstChar);
      var column = guess.charAt(1);

      if(isNaN(row) || isNaN(column))
      {
        alert("That position doesn't exist.");
      }
      else if(row < 0 || row >= model.boardSize || column < 0
        || column >= model.boardsize)
        {
          alert("That position is off the board.");
        }
        else
        {
          return row+column;
        }
    }
    return null;
  },


  processGuess: function(guess)
  {
    var location = this.parseGuess(guess);
    if(location)
    {
      this.numberOfGuesses++;
      var hit = model.fire(location);
      if(hit && model.shipsSunk===model.numShips)
      {
        view.displayMessage("You sank my battleships in " + this.numberOfGuesses + " guesses.");
      }
      //more code
    }
  },

  isNumber: function(candidate)
  {
    var n = candidate;
    if(+n===+n)
    {
      console.log("true");
    }
    else
    {
      console.log("False");
    }
  }
}


function init()
{
  var fireButton = document.getElementById("fireButton");
  fireButton.onclick = handleFireButton;
  var guessInput = document.getElementById('guessInput');
  guessInput.onkeypress = handleKeyPress;
  guessInput.focus();
}

function handleFireButton()
{
  var guessInput = document.getElementById("guessInput");
  var guess = guessInput.value
  controller.processGuess(guess);
  guessInput.value = "";
}

function handleKeyPress(e)
{
  var fireButton = document.getElementById('fireButton');
  if(e.keyCode === 13)
  {
    fireButton.click();
    return false;
  }
}

window.onload = init;
