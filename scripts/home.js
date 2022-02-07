
const container = document.querySelector('.container');
const cartCount = document.querySelector("#count");
let url = "https://www.themealdb.com/api/json/v1/1/filter.php?a=Indian";

let cart = localStorage.getItem("cart");
if (!cart) {
    cart = [];
    localStorage.setItem("cart", JSON.stringify(cart));
} else {
    cart = JSON.parse(cart);
}

async function getData() {

    let data = await fetchProducts(url);
    console.log(data);
    appenddata(data);
    refreshCartCount(cart);
}

function fetchProducts(url) {
    return fetch(url)
        .then(function (res) {
            return res.json();
        })
        .then(function (res) {
            return res.meals;
        })
        .catch(function (err) {
            console.log(err);
        });
};

getData();
refreshCartCount();

function appenddata(data) {
    container.innerHTML = "";
    data.forEach(el => {
        let div = document.createElement('div');
        let image = document.createElement('img');
        image.src = el.strMealThumb;

        let title = document.createElement('h3');
        title.textContent = el.strMeal;

        let div2 = document.createElement('div');

        let button = document.createElement('button');
        button.textContent = "Add to Cart";
        let price = document.createElement('p');
        let x = (Math.floor(Math.random() * 1000))
        price.textContent = `Rs. ${x}`
        button.onclick = function (event) {
            addToCart(el, x);
        };

        div2.append(title, price);
        div.append(image, div2, button);
        container.append(div);
    });

    function addToCart(prod, price) {
        prod["price"] = price;
        let cart = JSON.parse(localStorage.getItem("cart"));

        cart.push(prod);

        localStorage.setItem("cart", JSON.stringify(cart));
        refreshCartCount(cart);
    }
}

function refreshCartCount(cart) {
    cartCount.textContent = null;
    cartCount.textContent = cart.length;
}
var logo = document.querySelector("#navbar").addEventListener("click", () => {
    window.location = "index.html"
})