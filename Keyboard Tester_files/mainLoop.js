const interval = 10;//main loop interval time in milliseconds (1000ms = 1sec);

window.onload = function() {//small snipet of code that smells of stack overflow;
function main() {


//write code here to run every [interval];
displayStage(interval);


}
setInterval(main, interval);
}