var allPressedKeys;

function getAllPressedKeys()
{
    var allEle = document.getElementsByClassName("key_pressed");
    allPressedKeys = "";

    for(const element of allEle) {
        allPressedKeys += element.id;
        allPressedKeys +=",";
    };
    return allPressedKeys;
}

function showAllKeys()
{
    var allHid = document.getElementsByClassName("hidden");

    for(const element of allHid) {
        element.removeClass("hidden");
    }
}

function loadLayout(unformatedKeyList)
{
    var keyList = String(unformatedKeyList).split(",");

    var allUn = document.getElementsByClassName("key_un");
    var allPressed = document.getElementsByClassName("key_pressed");
    var allLight = document.getElementsByClassName("key_highlight");
    for(const element of allUn) {
        element.className = "hidden";
    }
    for(const element of allPressed) {
        element.className = "hidden";
    }
    for(const element of allLight) {
        element.className = "hidden";
    }

    for(const e of keyList){
        $(e).removeClass("hidden");
    }
}