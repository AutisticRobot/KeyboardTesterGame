const stage = document.getElementsByClassName("stage")[0];
const eleKeyCounter = document.getElementsByClassName("keyCounter")[0];
const eleBoardCounter = document.getElementsByClassName("boardCounter")[0];
const eleMoneyCounter = document.getElementsByClassName("moneyCounter")[0];


function displayStage(delta)//display stage is set to run every loop of main(), to run the logic of stage;
{
    eleKeyCounter.innerHTML = `total keys pressed: ` + keyCounter;
    eleBoardCounter.innerHTML = `total boards completed: ` + boardCounter;
    eleMoneyCounter.innerHTML = `Money: ` + wallet;
}