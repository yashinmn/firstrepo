var x = document.getElementById("login");
var y = document.getElementById("register");
const regBtn = document.getElementById("reg-id");
var z = document.getElementById("btn");
var fname = document.getElementById("fname");
var lname = document.getElementById("lname");
var e_mail = document.getElementById("email");
var Pass_word = document.getElementById("pass")
var vals = document.getElementById("vals");


function register() {
    x.style.left = "-400px";
    y.style.left = "50px";
    z.style.left = "110px";
}

function login() {
    x.style.left = "50px";
    y.style.left = "450px";
    z.style.left = "0px";
}

regBtn.addEventListener('click', (event) => {
    event.preventDefault();
    var k = fname.value;
    console.log(k);
    var regx_pass = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    var regx_mail = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;

    console.log(Pass_word.value);
    if (regx_pass.test(Pass_word.value))
        alert("accepted");
    else
        alert("no");

})