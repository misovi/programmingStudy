var fiat =
{
  make: "Fiat",
  model: "500",
  year: 1957,
  color: "Medium blue",
  passengers: 2,
  convertible: false,
  mileage: 88000,
  started: false,

  start: function()
  {
    this.started = true;
  },
  stop: function()
  {
    this.started = false;
  },
  drive: function()
  {
    if(this.started)
    {
      console.log("*engine sounds*");
    }
    else
    {
      console.log("please start the engine.");
    }
  }
};

fiat.drive();
fiat.start();
fiat.drive();
fiat.stop();
fiat.drive();
