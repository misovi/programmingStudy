var numbers = [60,50,62,58,54,54];
console.log(numbers);
function numbersorter(a,b)
{
  return b-a;
}

numbers.sort(numbersorter);
console.log(numbers)
