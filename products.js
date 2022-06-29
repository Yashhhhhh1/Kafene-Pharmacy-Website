let logoutBtn = document.getElementById("logout-btn")
let navOptions = document.querySelectorAll('.nav-options')
let tableData = document.getElementById("products-details");
let tableCount = document.getElementById('tableCount')
let expiredFiler = true;
let lowStockFilter = true;
let filterOptions = document.querySelectorAll(".filter-options")
let data = JSON.parse(localStorage.getItem("Products Data"));
let filterData = data;


if (JSON.parse(localStorage.getItem("login")) == true) {
    logoutBtn.style.display = "block";
} else {
    logoutBtn.style.display = "none";
}

navOptions.forEach(item => item.classList.remove("active"));
document.getElementById("productsPage").classList.add("active");

logoutBtn.addEventListener("click", () => {
    localStorage.setItem("login", false);
    localStorage.removeItem("userCredentials");
    location.assign("./index.html")
})

tableCount.innerHTML = `Count: ${data.length}`;

data.forEach((item, i) => {
    tableData.innerHTML += `<tr id=${i}>
<td class="id">${item.id}</td>
<td class="medicineName">${item.medicineName}</td>
<td class="medicineBrand">${item.medicineBrand} </td>
<td class="expiryDate">${item.expiryDate}</td>
<td class="unitPrice">$${item.unitPrice}</td>
<td class="stock">${item.stock}</td>
</tr>`
})

function applyFilter() {
    if (expiredFiler && lowStockFilter) {
        tableData.innerHTML = "";
        data.forEach((item, i) => {
            tableData.innerHTML += `<tr id=${i}>
        <td class="id">${item.id}</td>
        <td class="medicineName">${item.medicineName}</td>
        <td class="medicineBrand">${item.medicineBrand} </td>
        <td class="expiryDate">${item.expiryDate}</td>
        <td class="unitPrice">$${item.unitPrice}</td>
        <td class="stock">${item.stock}</td>
        </tr>`
        })
        tableCount.innerHTML = `Count: ${data.length}`;
    } else {
        if (!expiredFiler & !lowStockFilter) {
            filterData = data.filter(item => {
                if (item.stock > 100 && new Date() < new Date(item.expiryDate)) {
                    return item;
                }
            })
            tableData.innerHTML = "";
            filterData.forEach((item, i) => {
                tableData.innerHTML += `<tr id=${i}>
                <td class="id">${item.id}</td>
                <td class="medicineName">${item.medicineName}</td>
                <td class="medicineBrand">${item.medicineBrand} </td>
                <td class="expiryDate">${item.expiryDate}</td>
                <td class="unitPrice">$${item.unitPrice}</td>
                <td class="stock">${item.stock}</td>
                </tr>`
            })
            tableCount.innerHTML = `Count: ${filterData.length}`;
        } else if (!expiredFiler) {
            filterData = data.filter(item => {
                if (new Date() < new Date(item.expiryDate)) {
                    return item;
                }
            })
            tableData.innerHTML = "";
            filterData.forEach((item, i) => {
                tableData.innerHTML += `<tr id=${i}>
                <td class="id">${item.id}</td>
                <td class="medicineName">${item.medicineName}</td>
                <td class="medicineBrand">${item.medicineBrand} </td>
                <td class="expiryDate">${item.expiryDate}</td>
                <td class="unitPrice">$${item.unitPrice}</td>
                <td class="stock">${item.stock}</td>
                </tr>`
            })
            tableCount.innerHTML = `Count: ${filterData.length}`;
        } else if (!lowStockFilter) {
            filterData = data.filter(item => {
                if (item.stock > 100) {
                    return item;
                }
            })
            tableData.innerHTML = "";
            filterData.forEach((item, i) => {
                tableData.innerHTML += `<tr id=${i}>
                <td class="id">${item.id}</td>
                <td class="medicineName">${item.medicineName}</td>
                <td class="medicineBrand">${item.medicineBrand} </td>
                <td class="expiryDate">${item.expiryDate}</td>
                <td class="unitPrice">$${item.unitPrice}</td>
                <td class="stock">${item.stock}</td>
                </tr>`
            })
            tableCount.innerHTML = `Count: ${filterData.length}`;
        }
    }
}

function lowStock() {
    lowStockFilter = !lowStockFilter;
    applyFilter();
}

function expiry() {
    expiredFiler = !expiredFiler;
    applyFilter();
}

