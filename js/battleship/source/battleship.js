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

  ships: [{locations: [0,0,0], hits: ["","",""]},
          {locations: [0,0,0], hits: ["","",""]},
          {locations: [0,0,0], hits: ["","",""]}],

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
      console.log("debug: round " + i);
    }
  },

  generateShip: function()
  {
    var isHorizontal = Math.floor(Math.random()*2);
    var row;
    var col;
    var newShipLocations = [];
    if(isHorizontal == 1)
    {
      row = Math.floor(Math.random() * this.boardSize);
      col = Math.floor(Math.random() * (this.boardSize-2));
      for(var i = 0; i < this.shipLength;i++)
      {
        newShipLocations.push(row + "" + (col+i));
      }
    }
    else
    {
      row = Math.floor(Math.random() * (this.boardSize-2));
      col = Math.floor(Math.random() * this.boardSize);
      for(var i = 0; i < this.shipLength;i++)
      {
        newShipLocations.push(row+i + "" + col);
      }
    }
    console.log(newShipLocations);
    return newShipLocations;
  },

  collision: function(locations)
  {
    for(var i = 0; i< this.numShips; i++)
    {
      var ship = this.ships[i];
      for(var j = 0; j<locations.length;j++)
      {
        if(ship.locations.indexOf(locations[j]) >= 0)
        {
          return true;
        }
      }
    }
    return false;
  }
};

var controller =
{
  alphabet: ["A", "B", "C", "D", "E", "F", "G"],
  numberOfGuesses: 0,
  parseGuess: function(guess)
  {
    console.log("Debug: inside guess")
    if((guess === null || guess.length !== 2))
    {
      console.log("debug: inside first if")
      alert("Please enter a valid input: One letter and one number, out of " +
            "any you see on the board.");
    }
    else
    {
      console.log("debug: inside first else")
      var firstChar = guess.charAt(0).toUpperCase();
      var row = this.alphabet.indexOf(firstChar);
      var column = guess.charAt(1);

      if(isNaN(row) || isNaN(column))
      {
        alert("That position doesn't exist.");
      }
      else if(row < 0 || row >= model.boardSize || column < 0
        || column >= model.boardSize)
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
  model.generateShipLocations();
  var fireButton = document.getElementById("fireButton");
  fireButton.onclick = handleFireButton;
  var guessInput = document.getElementById('guessInput');
  guessInput.onkeypress = handleKeyPress;
  guessInput.focus();
  console.log("Ready!");
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
