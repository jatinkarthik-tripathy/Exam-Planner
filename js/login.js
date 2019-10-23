function showLogin() {
    var login = document.getElementsByClassName("login");
    // console.log(login);
    login[0].style.display = "flex";
    
    var signup = document.getElementsByClassName("signup");
    signup[0].style.display = "none";
}

function showSignup() {
    var login = document.getElementsByClassName("login");
    login[0].style.display = "none";

    var signup = document.getElementsByClassName("signup");
    signup[0].style.display = "flex";
}