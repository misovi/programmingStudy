var passengers = [{name: "Jane Doloop", paid: true, ticket: "coach"},
                  {name: "Dr. Evel", paid: true, ticket: "firstclass"},
                  {name: "Sue Property", paid: false, ticket: "firstclass"},
                  {name: "John Funcall", paid: true, ticket: "coach"},
                  {name: "John Doe", paid:  true, ticket: "premium"},
                  {name: "Jane Doe", paid: true, ticket: "premium"}];

function checkNoFlyList(passenger)
{
  return (passenger.name == 'Dr. Evel');
}

function checkNotPaid(passenger)
{
  return (!passenger.paid);
}

function printPassenger(passenger)
{
  console.log("Name: " + passenger.name + "\n" + "HasPaid: " + passenger.paid + "\n" + "====");
}

function serveCustomer(passenger)
{
  var getDrinkOrderFunction = createDrinkOrder(passenger);
  var getDinnerOrderFunction = createDinnerOrder(passenger);
  getDinnerOrderFunction();
  getDrinkOrderFunction();
  getDrinkOrderFunction();
  //movie
  getDrinkOrderFunction();
  //trash
}

function createDrinkOrder(passenger)
{
  var orderFunction;
  if(passenger.ticket === "firstclass")
  {
    orderFunction = function()
    {
      alert("Would you like a cocktail or wine?");
    };
  }
  else if(passenger.ticket === "coach")
  {
    orderFunction = function()
    {
      alert("We have cola or water.");
    }
  }
  else
  {
    orderFunction = function()
    {
      alert("We have wine, cola and water available");
    }
  }
  return orderFunction;
}

function createDinnerOrder(passenger)
{
  var orderFunction;
  var theLine = "Our dinner options are ";
  if(passenger.ticket === "coach")
  {
    orderFunction = function()
    {
      alert(theLine + "peanuts or pretzels.");
    }
  }
  else if(passenger.ticket === "firstclass")
  {
    orderFunction = function()
    {
      alert(theLine + "chicken or pasta.");
    }
  }
  else if(passenger.ticket === "premium")
  {
    orderFunction = function()
    {
      alert(theLine + "snack box or cheese plate.");
    }
  }
  return orderFunction;
}

function processPassengers(passengers, testFunction)
{
  for(var i = 0; i < passengers.length; i++)
  {
    if(testFunction(passengers[i]))
    {
      return false;
    }
  }
  return true;
}

function servePassengers(passengers)
{
  for(var i = 0; i < passengers.length; i++)
  {
    serveCustomer(passengers[i]);
  }
}

var allCanFly = processPassengers(passengers, checkNoFlyList);
var everyoneHasPaid = processPassengers(passengers, checkNotPaid);

if(!allCanFly)
{
  console.log("The plane cannot take off. You have no-fly passengers on board.");
}
if(!everyoneHasPaid)
{
  console.log("The plane cannot take off. You have unpaid passengers on board.");
}

processPassengers(passengers, printPassenger);
servePassengers(passengers);
