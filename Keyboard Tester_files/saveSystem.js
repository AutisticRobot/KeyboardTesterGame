//This is the code for saving and loading in Keyboard Tester The Game.
//There may be comments that dont say much, those will be there
//so the code will look nicer to to look at, and approach.


//save formater
async function saveData()
{
  return "5";
}

//save Functiona
async function save()
{
  saveText = "hi";
  saveText += saveData();
  const blob = new Blob([saveText], {type: "text/plain"});
  const fileUrl = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.download = "tempName";
  link.href = fileUrl;
  link.click();
}

//Load Functoin
function loadFile(input)
{
  let file = input.files[0];

  let reader = new FileReader();

  reader.readAsText(file);

  reader.onload = function()
  {
  console.log(reader.result);

  }


}
