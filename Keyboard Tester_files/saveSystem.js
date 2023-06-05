//This is the code for saving and loading in Keyboard Tester The Game.
//There may be comments that dont say much, those will be there
//so the code will look nicer to to look at, and approach.

//Load Functiona
async function save()
{
    console.log("code works");

    getFile();

}

async function getFile() {
  // Open file picker and destructure the result the first handle
  const [fileHandle] = await window.showOpenFilePicker();
  const file = await fileHandle.getFile();
  return file;
}
