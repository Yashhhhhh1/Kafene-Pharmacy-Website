let logoutBtn = document.getElementById("logout-btn")
let navOptions = document.querySelectorAll('.nav-options')
let tableData = document.getElementById("order-details");
let tableCount = document.getElementById('tableCount')
let data = JSON.parse(localStorage.getItem("Orders Data"));
let filterData = "";
let filterOptions = document.querySelectorAll(".filter-options")


if (JSON.parse(localStorage.getItem("login")) == true) {
    logoutBtn.style.display = "block";
} else {
    logoutBtn.style.display = "none";
}
navOptions.forEach(item => item.classList.remove("active"));
document.getElementById("ordersPage").classList.add("active");


logoutBtn.addEventListener("click", () => {
    localStorage.setItem("login", false);
    localStorage.removeItem("userCredentials");
    location.assign("./index.html")
})

data = JSON.parse(localStorage.getItem("Orders Data"));

if (!filterData) {
    data.forEach((item, i) => {
        tableData.innerHTML += `<tr id=${i}>
    <td class="id">${item.id}</td>
    <td class="customerName">${item.customerName}</td>
    <td class="orderTime">${item.orderDate} <br><span>${item.orderTime}</span></td>
    <td class="amount">${item.amount}</td>
    <td class="orderStatus">${item.orderStatus}</td>
    </tr>`
    })
    tableCount.innerHTML = `Count: ${data.length}`;
}

function filters() {
    let appliedFilters = [];
    filterOptions.forEach(filter => {
        if (filter.checked == true) {
            appliedFilters.push(filter.id);
        }
    })
    filterData = data.filter(item => {
        if (appliedFilters.includes(item.orderStatus)) {
            return item;
        }
    })
    tableData.innerHTML = ""

    filterData.forEach((item, i) => {
        tableData.innerHTML += `<tr id=${i}>
    <td class="id">${item.id}</td>
    <td class="customerName">${item.customerName}</td>
    <td class="orderTime">${item.orderDate} <br><span>${item.orderTime}</span></td>
    <td class="amount">${item.amount}</td>
    <td class="orderStatus">${item.orderStatus}</td>
    </tr>`
    })
    tableCount.innerHTML = `Count: ${filterData.length}`;

}

