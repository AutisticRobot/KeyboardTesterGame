const stage = document.getElementsByClassName("stage")[0];

function displayStage(delta)//display stage is set to run every loop of main(), to run the logic of stage;
{
    stage.innerHTML = `
    <p>
        hi
        ` + keyCounter + `
        ` + boardCounter + `
    </p>
    `
    
}