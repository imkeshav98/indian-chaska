
let cart = JSON.parse(localStorage.getItem("cart")) || [];
let tbody = document.querySelector("tbody");
let total = document.querySelector(".checkout > h2");
totalx = cart.reduce((accum, value) => value.price + accum, 0).toFixed(2);

display();
function display() {
    tbody.innerHTML = "";
    cart.map(function (el, index) {
        let tr = document.createElement("tr");
        let td1 = document.createElement("td");
        let image = document.createElement("img");
        image.src = el.strMealThumb;
        image.style.width = "5em";
        td1.append(image);
        let td2 = document.createElement("td");
        td2.textContent = el.strMeal;
        let td3 = document.createElement("td");
        td3.textContent = `Rs.${el.price}`;
        let td4 = document.createElement("td");
        td4.textContent = "Remove";
        td4.onclick = function () {
            removeItems(index);
        };
        tr.append(td1, td2, td3, td4);
        tbody.append(tr);
    });
    totalx = cart.reduce((accum, value) => value.price + accum, 0).toFixed(2);
    total.innerHTML = "";
    total.textContent = `Total Amount :${totalx}`;
}
function removeItems(index) {
    cart.splice(index, 1);
    localStorage.clear();
    localStorage.setItem("cart", JSON.stringify(cart));
    display();
    applyCoupon();
}

function applyCoupon() {
    let couponInput = document.getElementById("code").value;
    if (couponInput === "masai30") {
        totalx = cart.reduce((accum, value) => value.price + accum, 0);
        totalx = totalx - 0.3 * totalx;
        alert("Coupon Code Applied");
        total.innerHTML = "";
        total.textContent = 'Total Amount :$' + totalx.toFixed(2);
    }
}

function checkout() {
    totalx = cart.reduce((accum, value) => value.price + accum, 0)
    if (totalx > 0) {
        window.location.href = "checkout.html";
    }
}

var logo = document.querySelector("#navbar").addEventListener("click", () => {
    window.location = "index.html"
})