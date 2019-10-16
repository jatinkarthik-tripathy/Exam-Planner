let but = document.querySelector("#pass");
but.addEventListener("keypress", testFn);
function testFn() {
    var name = document.getElementById("name");
    var pass = document.getElementById("pass");
    if (name.value === "test" && pass.value === "pass") {
        location.replace("sidebar.html");
    }
}