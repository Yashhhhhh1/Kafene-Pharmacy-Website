let userName = "";
let password = "";


let userNameInput = document.getElementById("username-input");
let passwordInput = document.getElementById("password-input");
let loginBtn = document.getElementById("login-btn");
let rememberMeBtn = document.getElementById("remember-me");
let logoutBtn = document.getElementById("logout-btn")

userNameInput.addEventListener("focus", ()=>{
    
    $.get("https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/orders")
    .then(res=>{
        localStorage.setItem("Orders Data", JSON.stringify(res));
    })

    $.get("https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/products")
    .then(res=>{
        localStorage.setItem("Products Data", JSON.stringify(res));
    })

    $.get("https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/users")
    .then(res=>{
        localStorage.setItem("Users Data", JSON.stringify(res));
    })
})

var checkLoginStatus = JSON.parse(localStorage.getItem("userCredentials"));

if(checkLoginStatus){
    window.open("./orders.html")
}

let userDetails = {
    "userName": "",
    "password": ""
}

userNameInput.addEventListener("input", (e) => {
    userName = e.target.value;
})

passwordInput.addEventListener("input", (e) => {
    password = e.target.value;
})

rememberMeBtn.addEventListener("click", (e) => {
    if (e.currentTarget.checked == true) {
        userDetails.userName = userName;
        userDetails.password = password;
    }
})


loginBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (userName.trim() != "" && password.trim() != "" && userName == password) {
        if (rememberMeBtn.checked == true) {
            localStorage.setItem("userCredentials", JSON.stringify(userDetails));
        }
        localStorage.setItem("login", true);
        logoutBtn.style.display = "block";
        alert("Login Successful")
        location.assign("./orders.html")
    } else {
        alert("Please enter valid credentials!")
    }
})



