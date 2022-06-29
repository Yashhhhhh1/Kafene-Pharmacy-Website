let logoutBtn = document.getElementById("logout-btn")
var navOptions = document.querySelectorAll('.nav-options')
let tableData = document.getElementById("users-details");
let data = JSON.parse(localStorage.getItem("Users Data"));
let filterOptions = document.querySelectorAll(".filter-options")
var searchInput = document.getElementById("search-box");
var resetBtn = document.getElementById("reset-btn");


if (JSON.parse(localStorage.getItem("login")) == true) {
    logoutBtn.style.display = "block";
} else {
    logoutBtn.style.display = "none";
}

navOptions.forEach(item => item.classList.remove("active"));
document.getElementById("usersPage").classList.add("active");

logoutBtn.addEventListener("click", () => {
    localStorage.setItem("login", false);
    localStorage.removeItem("userCredentials");
    location.assign("./index.html") 
})

    if (searchInput.textContent == "") {
        data.forEach((item, i) => {
            tableData.innerHTML += `<tr id=${i}>
            <td class="id">${item.id}</td>
            <td class="userAvatar"><img src=${item.profilePic} alt="profile-pic"/></td>
            <td class="fullName">${item.fullName}</td>
            <td class="dob">${item.dob}</td>
            <td class="gender">${item.gender}</td>
            <td class="location">${item.currentCity}, ${item.currentCountry}</td>
            </tr>`
        })
    }
    searchInput.addEventListener("input", (e) => {
        let inputText = e.target.value;
        let filterList = data.filter(item => {
            if (item.fullName.toLowerCase().includes(inputText.toLowerCase())) {
                return item;
            }
        })
        tableData.innerHTML = "";
        filterList.forEach((item, i) => {
            tableData.innerHTML += `<tr id=${i}>
                <td class="id">${item.id}</td>
                <td class="userAvatar"><img src=${item.profilePic} alt="profile-pic"/></td>
                <td class="fullName">${item.fullName}</td>
                <td class="dob">${item.dob}</td>
                <td class="gender">${item.gender}</td>
                <td class="location">${item.currentCity}, ${item.currentCountry}</td>
                </tr>`
        })
    })


resetBtn.addEventListener("click", function () {
    searchInput.value = "";
        data.forEach((item, i) => {
            tableData.innerHTML += `<tr id=${i}>
        <td class="id">${item.id}</td>
        <td class="userAvatar"><img src=${item.profilePic} alt="profile-pic"/></td>
        <td class="fullName">${item.fullName}</td>
        <td class="dob">${item.dob}</td>
        <td class="gender">${item.gender}</td>
        <td class="location">${item.currentCity}, ${item.currentCountry}</td>
        </tr>`
        })
})
