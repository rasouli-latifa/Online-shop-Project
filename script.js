var cart = JSON.parse(localStorage.getItem("cart")) || [];

var products = [
{
name:"Afghan Carpet",
price:600,
desc:"Traditional authentic Afghan carpet handwoven with cultural patterns.",
img:"images/carpet1.jpeg"
},
{
name:"Modern Carpet",
price:500,
desc:"Modern handmade carpet with elegant design.",
img:"images/carpet2.jpeg"
},
{
name:"Classic Carpet",
price:480,
desc:"Classic traditional carpet with warm colors.",
img:"images/carpet3.jpeg"
},
{
name:"Luxury Carpet",
price:550,
desc:"High quality luxury carpet.",
img:"images/carpet4.jpeg"
},
{
name:"Soft Wool Carpet",
price:800,
desc:"Soft wool carpet for comfort.",
img:"images/carpet5.jpeg"
},
{
name:"Vintage Carpet",
price:640,
desc:"Vintage style handmade carpet.",
img:"images/carpet6.jpeg"
}
];




function login() {
let u = document.getElementById("username").value;
let p = document.getElementById("password").value;

let msg = document.getElementById("msg");

if (msg) msg.innerText = "";


if (!u || !p) {
msg.innerText = "❌ Please fill all fields";
return;
}


if (/\d/.test(u)) {
msg.innerText = "❌ Username cannot contain numbers";
return;
}


if (u === "admin" && p === "1234") {
localStorage.setItem("loggedIn", "true");
window.location.href = "welcome.html";
} else {
msg.innerText = "❌ Wrong username or password";
return;
}
}




if (location.pathname.includes("shop.html")) {
if (localStorage.getItem("loggedIn") !== "true") {
window.location.href = "login.html";
}
}




function openProduct(i) {
localStorage.setItem("selectedProduct", i);
window.location.href = "product.html";
}

if (location.pathname.includes("product.html")) {
let i = localStorage.getItem("selectedProduct");
let p = products[i];

document.getElementById("pimg").src = p.img;
document.getElementById("pname").innerText = p.name;
document.getElementById("pdesc").innerText = p.desc;
document.getElementById("pprice").innerText = "$" + p.price;
}

function buyNow() {
window.location.href = "payment.html";
}




if (location.pathname.includes("payment.html")) {
let i = localStorage.getItem("selectedProduct");
let p = products[i];

document.getElementById("productName").innerText = p.name;
document.getElementById("productPrice").innerText = "$" + p.price;
}

function pay() {
document.querySelector(".payment-box").innerHTML =
"<h2>Payment Successful ✅</h2><p>Thank you for your order</p>";
}




function addToCart(i) {
cart.push(products[i]);
localStorage.setItem("cart", JSON.stringify(cart));
alert("Added to cart 🛒");
}

function loadCart() {
let list = document.getElementById("cartItems");
if (!list) return;

list.innerHTML = "";
let total = 0;

cart.forEach((item) => {
let li = document.createElement("li");
li.innerText = item.name + " - $" + item.price;
list.appendChild(li);
total += item.price;
});

document.getElementById("total").innerText = total;
}

function checkout() {
alert("Order placed successfully 🎉");
localStorage.removeItem("cart");
cart = [];
location.reload();
}




function validateMessage() {
let message = document.querySelector("textarea").value;
let msgBox = document.getElementById("msg");

if (!message) {
msgBox.innerText = "❌ Message cannot be empty";
return false;
}

if (message.length > 50) {
msgBox.innerText = "❌ Message must not exceed 50 characters";
return false;
}

msgBox.innerText = "✅ Message sent successfully";
return true;
}