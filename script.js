var cart = JSON.parse(localStorage.getItem("cart")) || [];

var products = [
{ name:"Afghan Carpet", price:600, desc:"Traditional hThis authentic Afghan carpet is carefully handwoven by skilled artisans using traditional methods passed down through generations. It is made from high-quality natural wool and dyed with rich, natural colors that reflect Afghanistan’s deep cultural heritage. Each design carries a story of tradition, patience, and craftsmanship, making every piece unique and valuable for your home.", img:"images/carpet1.jpeg" },
{ name:"Modern Carpet", price:500, desc:"This modern handmade carpet combines traditional craftsmanship with a contemporary design style. It is carefully woven by skilled artisans using high-quality natural fibers, ensuring durability, softness, and long-lasting beauty. Its minimalist patterns make it perfect for modern homes, adding warmth and elegance to any space.", img:"images/carpet2.jpeg" },
{ name:"Classic Carpet", price:480, desc:"Elegant classic carpet with traditional patterns, designed to bring warmth and beauty to any home interior.", img:"images/carpet3.jpeg" },
{ name:"Luxury Carpet", price:550, desc:"Premium quality", img:"images/carpet4.jpeg" },
{ name:"Soft Wool Carpet", price:800, desc:"Soft texture", img:"images/carpet5.jpeg" },
{ name:"Vintage Carpet", price:640, desc:"Antique style", img:"images/carpet6.jpeg" }
];

function login(){
let u=document.getElementById("username").value;
let p=document.getElementById("password").value;

if(u==="admin" && p==="1234"){
localStorage.setItem("loggedIn","true");
window.location.href="welcome.html";
}else{
document.getElementById("msg").innerText="Wrong login";
}
}

if(location.pathname.includes("shop.html")){
if(localStorage.getItem("loggedIn")!=="true"){
window.location.href="login.html";
}
}

function openProduct(i){
localStorage.setItem("selectedProduct",i);
window.location.href="product.html";
}

if(location.pathname.includes("product.html")){
let i=localStorage.getItem("selectedProduct");
let p=products[i];

document.getElementById("pimg").src=p.img;
document.getElementById("pname").innerText=p.name;
document.getElementById("pdesc").innerText=p.desc;
document.getElementById("pprice").innerText=p.price;
}

function buyNow(){
window.location.href="payment.html";
}

if(location.pathname.includes("payment.html")){
let i=localStorage.getItem("selectedProduct");
let p=products[i];

document.getElementById("productName").innerText=p.name;
document.getElementById("productPrice").innerText=p.price;
}

function pay(){
document.querySelector(".payment-box").innerHTML=
"<h2>Payment Successful ✅</h2><p>Thank you for your order</p>";
}

function checkout(){
alert("Order placed!");
localStorage.removeItem("cart");
location.reload();
}