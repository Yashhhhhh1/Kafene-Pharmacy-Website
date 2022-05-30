let logoutBtn = document.getElementById("logout-btn")
let navOptions = document.querySelectorAll('.nav-options')
let tableData = document.getElementById("products-details");
let tableCount = document.getElementById('tableCount')
let data = [];
let filterOptions = document.querySelectorAll(".filter-options")


let lowStockOption = true;
let expiryOption = true;

if (JSON.parse(localStorage.getItem("login")) == true) {
    logoutBtn.style.display = "block";
} else {
    logoutBtn.style.display = "none";
}
navOptions.forEach(item => item.classList.remove("active"));
document.getElementById("productsPage").classList.add("active");

logoutBtn.addEventListener("click", () => {
    localStorage.setItem("login", false);
    location.assign("./index.html")
})

data = JSON.parse(localStorage.getItem("Products Data"));
// console.log(data)
let filterData = data;


tableCount.innerHTML = `Count: ${data.length}`;

if(filterData.length == 100){
    data.forEach((item, i)=>{
        tableData.innerHTML += `<tr id=${i}>
    <td class="id">${item.id}</td>
    <td class="medicineName">${item.medicineName}</td>
    <td class="medicineBrand">${item.medicineBrand} </td>
    <td class="expiryDate">${item.expiryDate}</td>
    <td class="unitPrice">$${item.unitPrice}</td>
    <td class="stock">${item.stock}</td>
    </tr>`
})
}

console.log(filterOptions)




function lowStock (){
        if(filterOptions[0].checked == false){
            filterData = filterData.filter(item => {
                if(item.stock > 100){
                    return item;
                }
            })
        console.log(filterData)
        }else if(filterOptions[0].checked == true){
            filterData = data.filter(item => {
                if(item.stock > 100){
                    return item;
                }
            })
        console.log(filterData)
        }else if(filterOptions[1].checked == true){
            filterData = data.filter(item => {
                if(new Date() < new Date(item.expiryDate)){
                    return item;
                }
            })
    console.log(filterData)
    }
    tableData.innerHTML = ""

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

function expiry(){
    if(filterOptions[1].checked == false){
        filterData = filterData.filter(item => {
            if(new Date() < new Date(item.expiryDate)){
                return item;
            }
        })
        console.log(filterData)
    }else if(filterOptions[1].checked == true){
        filterData = data.filter(item => {
            if(new Date() < new Date(item.expiryDate)){
                return item;
            }
        })
        console.log(filterData)
    }else if(filterOptions[0].checked == false){
        filterData = data.filter(item => {
            if(item.stock > 100){
                return item;
            }
        })
        console.log(filterData)
    }
    
    tableData.innerHTML = ""

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


// function filters() {
//     let appliedFilters = [];
//     filterOptions.forEach(filter => {
//         if (filter.checked == true) {
//             appliedFilters.push(filter.id);
//         }
//     })
//     filterData = data.filter(item => {
//         if (appliedFilters.includes(item.orderStatus)) {
//             return item;
//         }
//     })
//     tableData.innerHTML = ""

//     filterData.forEach((item, i) => {
//         tableData.innerHTML += `<tr id=${i}>
//         <td class="id">${item.id}</td>
//         <td class="medicineName">${item.medicineName}</td>
//         <td class="medicineBrand">${item.medicineBrand} </td>
//         <td class="expiryDate">${item.expiryDate}</td>
//         <td class="unitPrice">$${item.unitPrice}</td>
//         <td class="stock">${item.stock}</td>
//         </tr>`
//     })

// }
