function makeCounter()
{
  var count = 0;
  function counter()
  {
    count++;
    return count;
  }
  return counter;
}

var docount = makeCounter();
console.log(docount());
console.log(docount());
console.log(docount());
