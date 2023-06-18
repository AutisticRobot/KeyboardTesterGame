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