//This is the code for saving and loading in Keyboard Tester The Game.
//There may be comments that dont say much, those will be there
//so the code will look nicer to to look at, and approach.


//save Functiona
var saveURL = null;
async function save()
{
  let file = new File(["testing the save fucinality"],"SaveTest.txt" , {type: 'test/plain'});

  saveAs(file);
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
