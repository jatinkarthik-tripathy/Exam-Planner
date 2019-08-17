console.log('test');
let but = document.querySelector("#pass");
but.addEventListener("keypress", testFn);
function testFn() {
    var name = document.getElementById("name");
    var pass = document.getElementById("pass");
    if (name.value.toString() == "test" && pass.value.toString() == "pass") {
        location.replace("sidebar.html");
    }
}