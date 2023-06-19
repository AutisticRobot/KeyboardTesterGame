//This is the code for saving and loading in Keyboard Tester The Game.
//There may be comments that dont say much, those will be there
//so the code will look nicer to to look at, and approach.

const saveNameInput = document.getElementById("saveNameInput");

//save formater
function saveData()
{
  var output = "";//use delimiter of ","
  
  output += keyCounter + ",";
  output += boardCounter + ","

  return output;
}

function unformatData(input)
{
  var data = String(input).split(",");

  keyCounter = data[0];
  boardCounter = data[1];

}


//save Functiona
async function save(saveText, saveName)
{
  const blob = new Blob([saveText], {type: "text/plain"});
  const fileUrl = URL.createObjectURL(blob);
  const link = document.createElement("a");
  if(!saveName.includes("."))
  {
    saveName += ".txt";
  }
  link.download = saveName;
  link.href = fileUrl;
  link.click();
}

//Load Functoin
async function loadFile(file)
{
  var output;
  let reader = new FileReader();

  reader.readAsText(file);

  reader.onload = function()
  {
    unformatData(reader.result);
    output = reader.result;//return result for debuging;
    console.log(output);
  }

  return output;

}

//save/load unit test
async function testSave(file)
{
  var file1;
  var file2;
  if(file === null)
  {
    file1 = saveData()
    unformatData(file1);
  }else{
    file1 = loadFile(file);
  }
  file2 = saveData();

  if(file1 === file2)
  {
    console.log("testSave Passed");
    return true;
  }else{
    console.log("testSave Failed");
    console.log(file1);
    console.log(file2);
    return false;
  }

}
