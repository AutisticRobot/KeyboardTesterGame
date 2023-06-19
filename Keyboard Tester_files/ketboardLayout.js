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