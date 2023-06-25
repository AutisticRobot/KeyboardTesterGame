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
    var allHid = $(".hidden");

    allHid.each(function(b,c) {
        c.className = "key_un";
    })
}

function loadLayout(unformatedKeyList)
{
    var keyList = String(unformatedKeyList).split(",");

    var allUn = $(".key_un");
    var allPressed = $(".key_pressed");
    var allLight = $(".key_highlight");

    allUn.each(function(b,c) {
        c.className = "hidden";
    })
    allPressed.each(function(b,c) {
        c.className = "hidden";
    })
    allLight.each(function(b,c) {
        c.className = "hidden";
    })


    for(const e of keyList){
        var key = "#" + e;
        $(key).addClass = "key_un";
        $(key).removeClass = "hidden";
        console.log(key, e);
    }
}