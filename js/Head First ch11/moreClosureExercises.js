function makePassword(password)
{
  return function(guess)
  {
    return password===guess;
  }
}

function multN(n)
{
  return function(number)
  {
    return number * n;
  }
}
