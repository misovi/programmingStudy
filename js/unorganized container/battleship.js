var location1 = Math.floor(Math.random()*5)
var location2 = location1+1;
var location3 = location1+2;
var guess;
var hits = 0;
var guesses = 0;
var isSunk = false;

while(isSunk == false)
{
  guess = prompt("Ready, aim, fire! (enter a number between 0 and 6)");
  if(guess >=0 && guess <= 6)
  {
    guesses = guesses + 1;
    if(guess == location1 || guess == location2 ||guess == location3)
    {
      alert("Hit!");
      hits = hits + 1;
    }
    else
    {
      alert("Miss!");
    }
    if(hits == 3)
    {
      isSunk = true;
      alert("Ship sunk");
    }
  }
  else
  {
    alert("Inputted number is out of range! Input number between 0 and 6, inclusive.");
  }
}
var stats = "You took " + guesses + " guesses to sink the ship, " +
            "which means your accuracy was " + (3/guesses) + ".";
alert(stats);
