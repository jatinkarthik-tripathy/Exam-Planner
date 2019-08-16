console.log("main.js")

function showHome() {
    var home = document.getElementById("home");
    home.style.display = "flex";

    var info = document.getElementById("info");
    info.style.display = "none";
    var abt = document.getElementById("abt");
    abt.style.display = "none";
}
function showInfo() {
    var info = document.getElementById("info");
    info.style.display = "flex";

    var home = document.getElementById("home");
    home.style.display = "none";
    var abt = document.getElementById("abt");
    abt.style.display = "none";
}
function showAbt() {
    var abt = document.getElementById("abt");
    abt.style.display = "flex";

    var home = document.getElementById("home");
    home.style.display = "none";
    var info = document.getElementById("info");
    info.style.display = "none";
}

var block = document.getElementsByClassName("block");
for (var i = 0; i < block.length; i++) {
    block[i].addEventListener("click", bindClick(i));
}

function bindClick(i) {
    return function () {
        var hexString = document.createElement('div')
        hexString.style.backgroundColor = `#222`
        if (block[i].style.backgroundColor === hexString.style.backgroundColor) {
            block[i].style.backgroundColor = 'aqua';
        } else {
            block[i].style.backgroundColor = '#222';
        }
    };
}