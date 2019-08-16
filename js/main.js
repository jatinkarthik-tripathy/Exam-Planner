console.log("main.js")
function showHome(){
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