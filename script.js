var cart = JSON.parse(localStorage.getItem("cart")) || [];

var products = [
{ name:"Persian Carpet", price:180, desc:"Traditional handmade", img:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c" },
{ name:"Modern Carpet", price:120, desc:"Minimalist style", img:"https://images.unsplash.com/photo-1616628182504-3f9d6b0a0c3d" },
{ name:"Classic Carpet", price:150, desc:"Elegant design", img:"https://images.unsplash.com/photo-1582582429416-3c4c1e1c4f9b" },
{ name:"Luxury Carpet", price:250, desc:"Premium quality", img:"https://images.unsplash.com/photo-1598300056393-4aac492f4344" },
{ name:"Soft Wool Carpet", price:100, desc:"Soft texture", img:"https://images.unsplash.com/photo-1600585152854-5c2c5c4f3d4a" },
{ name:"Vintage Carpet", price:140, desc:"Antique style", img:"https://images.unsplash.com/photo-1618221195710-dd6b41faaea6" }
];

// LOGIN
function login() {
var u=document.getElementById("username").value;
var p=document.getElementById("password").value;

if(u==="admin" && p==="1234"){
localStorage.setItem("loggedIn","true");
window.location.href="shop.html";
}else{
document.getElementById("msg").innerText="Wrong login";
}
}

// PROTECT SHOP
if(window.location.pathname.includes("shop.html")){
if(localStorage.getItem("loggedIn")!=="true"){
window.location.href="login.html";
}
}

// PRODUCT
function openProduct(i){
localStorage.setItem("selectedProduct",i);
window.location.href="product.html";
}

if(window.location.pathname.includes("product.html")){
var i=localStorage.getItem("selectedProduct");
var p=products[i];

document.getElementById("pimg").src=p.img;
document.getElementById("pname").innerText=p.name;
document.getElementById("pdesc").innerText=p.desc;
document.getElementById("pprice").innerText=p.price;
}

function buyNow(){
window.location.href="payment.html";
}

// PAYMENT
if(window.location.pathname.includes("payment.html")){
var i=localStorage.getItem("selectedProduct");
var p=products[i];

document.getElementById("productName").innerText=p.name;
document.getElementById("productPrice").innerText=p.price;
}

function pay(){
alert("Payment Successful!");
window.location.href="index.html";
}

// CART
function addToCart(i){
cart.push(i);
localStorage.setItem("cart",JSON.stringify(cart));
alert("Added to cart");
}

function checkout(){
alert("Order placed!");
localStorage.removeItem("cart");
location.reload();
}

function loadCart(){
var list=document.getElementById("cartItems");
if(!list)return;

list.innerHTML="";
var total=0;

for(var i=0;i<cart.length;i++){
var p=products[cart[i]];
var li=document.createElement("li");
li.innerText=p.name+" - $"+p.price;
list.appendChild(li);
total+=p.price;
}

document.getElementById("total").innerText=total;
}

loadCart();