var products = [{name: "Grapefruit", calories: 170, color: "red", sold: 8200},
                {name: "Orange", calories: 160, color: "orange", sold: 12101},
                {name: "Cola", calories: 210, color: "caramel", sold: 25412},
                {name: "Diet cola", calories: 0, color: "caramel", sold: 43922},
                {name: "Lemon", calories: 200, color: "clear", sold: 14983},
                {name: "Raspberry", calories: 180, color: "pink", sold: 9427},
                {name: "Root beer", calories: 200, color: "caramel", sold: 9909},
                {name: "Water", calories: 0, color: "clear", sold: 62123}];

function sortBySold(drinkA, drinkB)
{
  return (drinkA.sold - drinkB.sold);
}

function sortByCal(drinkA, drinkB)
{
  return drinkA.calories - drinkB.calories;
}

function sortByColor(drinkA, drinkB)
{
  if(drinkA.color > drinkB.color)
  {
    return 1;
  }
  else if(drinkA.color < drinkB.color)
  {
    return -1;
  }
  else return 0;
}

function sortByName(drinkA, drinkB)
{
  if(drinkA.name > drinkB.name)
  {
    return 1;
  }
  else if(drinkA.name < drinkB.name)
  {
    return -1;
  }
  else return 0;
}

function printDrinks(products)
{
  for(var i = 0; i < products.length; i++)
  {
    console.log("Name: " + products[i].name + "\n" + "Calories: " + products[i].calories +
                "\n" + "Color: " + products[i].color + "\n" + "Sold: " + products[i].sold + "\n" + "====");
  }
}

products.sort(sortByName);
printDrinks(products);
