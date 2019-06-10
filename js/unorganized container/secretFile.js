var file =
{
  level: "classified",
  opened: 0,
  password: 2,
  contents: "Dr. Evel's next meeting is in Dtroit."
};



function getSecret(file, password)
{
  file.opened++
  if(password == file.password)
  {
    return file.contents;
  }
  else
  {
    return "Password incorrect";
  }
}

function setSecret(file, password, content)
{
  if(password == file.password)
  {
    file.opened = 0;
    file.contents = content;
  }
}

secret = getSecret(file, 2);
console.log(secret);
setSecret(file, 2, "Dr. Evel is a lizard man and lives in space!");
secret = getSecret(file, 2);
console.log(secret);
