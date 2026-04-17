var products = [
{ name: "Persian Carpet", price: 120, img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c" },
{ name: "Modern Carpet", price: 90, img: "https://images.unsplash.com/photo-1616628182504-3f9d6b0a0c3d" },
{ name: "Classic Carpet", price: 150, img: "https://images.unsplash.com/photo-1582582429416-3c4c1e1c4f9b" },
{ name: "Luxury Carpet", price: 200, img: "https://images.unsplash.com/photo-1598300056393-4aac492f4344" },
{ name: "Vintage Carpet", price: 170, img: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf" },
{ name: "Soft Wool Carpet", price: 110, img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c" }
];

var cart = JSON.parse(localStorage.getItem("cart")) || [];

function loadProducts() {
var container = document.getElementById("products");
if (!container) return;

for (var i = 0; i < products.length; i++) {
var p = products[i];

var div = document.createElement("div");
div.className = "product";

div.innerHTML = 
<img src="${p.img}" onclick="openModal(${i})">
<h3>${p.name}</h3>
<p>$${p.price}</p>
<button onclick="addToCart(${i})">Add to Cart</button>
;

container.appendChild(div);
}
}

function addToCart(i) {
cart.push(products[i]);
localStorage.setItem("cart", JSON.stringify(cart));
alert("Added to cart");
}

function loadCart() {
var list = document.getElementById("cartItems");
if (!list) return;

list.innerHTML = "";
var total = 0;

for (var i = 0; i < cart.length; i++) {
var li = document.createElement("li");
li.innerText = cart[i].name + " - $" + cart[i].price;
list.appendChild(li);
total += cart[i].price;
}

document.getElementById("total").innerText = total;
}

function checkout() {
alert("Order placed!");
localStorage.removeItem("cart");
location.reload();
}

// Modal
function openModal(i) {
document.getElementById("modal").style.display = "block";
document.getElementById("modalImg").src = products[i].img;
document.getElementById("modalName").innerText = products[i].name;
document.getElementById("modalPrice").innerText = "$" + products[i].price;

document.getElementById("addToCartBtn").onclick = function () {
addToCart(i);
};
}

function closeModal() {
document.getElementById("modal").style.display = "none";
}

loadProducts();
loadCart();