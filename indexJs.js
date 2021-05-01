
var productName = document.getElementById("proudctName");
var proudctPrice = document.getElementById("proudctPrice");
var proudctCategury = document.getElementById("proudctCategury");
var proudctDesc = document.getElementById("proudctDesc");


function cleartextBoxInputs()       // clear textbox input
{
    productName.value = ""; proudctPrice.value = ""; proudctCategury.value = ""; proudctDesc.value = " ";
}

var productContiner;      // Add input values in continer
if (localStorage.getItem("productData") == null) {
    productContiner = [];
}
else {
    productContiner = JSON.parse(localStorage.getItem("productData"));
    console.log(productContiner);
    displayProducts();

}



function addProduct() {
    if (chickInputs() == true)                      //add product
    {
        var product = {
            name: productName.value,
            price: proudctPrice.value,
            categury: proudctCategury.value,
            desc: proudctDesc.value
        };

        productContiner.push(product);
        console.log(productContiner);
        // clear textbox input 
        cleartextBoxInputs();

        localStorage.setItem("productData", JSON.stringify(productContiner))
        displayProducts();
    }
    else {
        window.alert("Please enter data in all failds");
    }

}

function displayProducts() {
    var cartona = ``;
    for (i = 0; i < productContiner.length; i++) {
        cartona += `<tr>
        <td>${i}</td>
        <td>${productContiner[i].name}</td>
        <td>${productContiner[i].price}</td>
        <td>${productContiner[i].categury}</td>
        <td>${productContiner[i].desc}</td>
        <td> <button class="btn btn-outline-danger btn-warning" onclick="updteProduct(${i})">Update</button> </td>
        <td> <button class="btn btn-outline-warning btn-danger" onclick="DeleteProduct(${i})">Delete</button> </td>
        </tr>`

    }
    document.getElementById("tbody").innerHTML = cartona;

}

function DeleteProduct(productIndex) {
    productContiner.splice(productIndex, 1);
    localStorage.setItem("productData", JSON.stringify(productContiner));
    displayProducts();
}

var updateIndex;
function updteProduct(productIndex) {
    window.alert("Hello");
    displayProducts()
    updateIndex = productIndex;
    productName.value = productContiner[productIndex].name;
    proudctPrice.value = productContiner[productIndex].price;
    proudctCategury.value = productContiner[productIndex].categury;
    proudctDesc.value = productContiner[productIndex].desc;

    document.getElementById("addBtn").hidden = true;
    document.getElementById("UpdateBtn").hidden = false;
}

function updatSelectedProdu() {
    productContiner[updateIndex].name = productName.value;
    productContiner[updateIndex].price = proudctPrice.value;
    productContiner[updateIndex].categury = proudctCategury.value;
    productContiner[updateIndex].desc = proudctDesc.value;
    localStorage.setItem("productData", JSON.stringify(productContiner));
    displayProducts();
    cleartextBoxInputs();

    document.getElementById("addBtn").hidden = false;
    document.getElementById("UpdateBtn").hidden = true;
}

function chickInputs() {
    if (productName.value != "" && proudctPrice.value != ""
        && proudctCategury.value != "" && proudctDesc.value != "") {
        return true;
    }
    else {
        return false;
    }
}

function SearchProduct(searchitem) {
    console.log("productContiner[i].name");
    var cartona = ``;
    for (i = 0; i < productContiner.length; i++) {
        if (productContiner[i].name.toLowerCase().includes(searchitem.toLowerCase()) == true) {

            cartona += `<tr>
        <td>${i}</td>
        <td>${productContiner[i].name}</td>
        <td>${productContiner[i].price}</td>
        <td>${productContiner[i].categury}</td>
        <td>${productContiner[i].desc}</td>
        <td> <button class="btn btn-outline-danger btn-warning" onclick="updteProduct(${i})">Update</button> </td>
        <td> <button class="btn btn-outline-warning btn-danger" onclick="DeleteProduct(${i})">Delete</button> </td>
        </tr>`


            
        }
        else {

            document.getElementById("tbody").innerHTML = "";
        }
        document.getElementById("tbody").innerHTML = cartona;
    }
}

// localStorage.setItem("Name","Mohamed");
// alert(localStorage.getItem("Name"));
// alert(localStorage.length);
// localStorage.removeItem("Name");
// localStorage.clear();

