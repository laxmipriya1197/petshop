const products = [
 
  {id:1, title:"Rubber Bone", desc:"Durable chew bone for all breeds", price:200,  img:"https://harrybarker.com/cdn/shop/files/23HB-TY016_001_2048x.jpg?v=1699565456", category:"chew"},
  {id:2, title:"Nylon Chew Stick", desc:"Tough and long-lasting chew toy", price:180,  img:"https://www.petsfriend.co.in/media/product/298Pawzone-Nylon-Small-Bone-Dog-SDL912215368-1-50478.jpg", category:"chew"},
  {id:3, title:"Minty Chew Toy", desc:"Cleans teeth while playing", price:160, img:"https://m.media-amazon.com/images/I/51ngRwYwcCL._AC_UF1000,1000_QL80_.jpg", category:"chew"},
  {id:4, title:"Bacon Flavor Bone", desc:"Tasty chew with bacon scent", price:220,  img:"https://m.media-amazon.com/images/I/71fKSebqrZL._AC_UF1000,1000_QL80_.jpg", category:"chew"},


  {id:5, title:"Puzzle Feeder", desc:"Engage your dog’s mind and slow eating", price:350,  img:"https://img-va.myshopline.com/image/store/1667534059205/1-1.jpeg?w=2000&h=2000", category:"smart"},
  {id:6, title:"Treat Dispenser Ball", desc:"Releases treats as dog plays", price:300,  img:"https://m.media-amazon.com/images/I/61VbzP+p0GL.jpg", category:"smart"},
  {id:7, title:"Squeaky Cube", desc:"Interactive sound toy", price:280,  img:"https://5.imimg.com/data5/SELLER/Default/2023/6/316910180/RX/OE/LF/182957871/durable-interactive-tooth-cleaner-catch-n-squeaky-cube-treats-puzzle-toy-for-dog.jpg", category:"smart"},
  {id:8, title:"LED Motion Toy", desc:"Lights up and rolls automatically", price:400, img:"https://i5.walmartimages.com/seo/IGEED-Interactive-Dog-Toy-Automatic-Moving-Bouncing-Rotating-Ball-Rechargeable-Motion-Activated-Rolling-Toy-Dogs-Interactive-Dog-Balls-Motion-Activat_90d31c30-8f4a-417c-8c1d-644c03be7c0b.76cf16a989ed94aa2c98865f15e1f2d7.jpeg", category:"smart"},

  
  {id:9, title:"Plush Bunny", desc:"Soft toy for cuddling", price:220, img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_IJDKtnbwgnuZ0QUKN7duA-E72JXO9pmiMw&s", category:"plush"},
  {id:10, title:"Teddy Bear Toy", desc:"Cute and gentle on teeth", price:250, img:"https://assets.petco.com/petco/image/upload/f_auto,q_auto/3713153-Center-1", category:"plush"},
  {id:11, title:"Elephant Plush", desc:"Soft squeaky elephant toy", price:240,  img:"https://www.petplay.com/cdn/shop/files/P.L.A.Y._AfricaBigFive_Elephant1_LowRes_163d5b7d-52f4-48a8-a18a-c7b1ce5f8250_900x.jpg?v=1704774744", category:"plush"},
  {id:12, title:"Duck Plush", desc:"Soft and squeaky fun", price:230,  img:"https://images-cdn.ubuy.co.in/64ecdfc12a64ce20e5066aad-dog-toy-plush-duck-interactive.jpg", category:"plush"},

  
  {id:13, title:"Cotton Rope Knot", desc:"Perfect for tug and fetch", price:180, img:"https://www.petscorner.co.uk/Images/Product/Default/xlarge/great-small-rope-knot-1.jpg", category:"rope"},
  {id:14, title:"Dual Handle Tug", desc:"Great for interactive play", price:200, img:"https://m.media-amazon.com/images/I/71c89Fplu8L._AC_UF1000,1000_QL80_.jpg", category:"rope"},
  {id:15, title:"Rope Bone Toy", desc:"Braided rope bone", price:190,  img:"https://harrybarker.com/cdn/shop/products/harry-barker-teal-rope-bone-toy_1200x.png?v=1631630853", category:"rope"},
  {id:16, title:"Color Rope Ball", desc:"Rope ball for tug fun", price:210, img:"https://5.imimg.com/data5/SS/HT/HI/ANDROID-35928721/product-jpeg-500x500.jpg", category:"rope"},


  {id:17, title:"Rubber Fetch Ball", desc:"Bouncy rubber ball for outdoor fun", price:150,  img:"https://www.dfordog.co.uk/user/products/chuckit-fetch-ball.jpg", category:"ball"},
  {id:18, title:"Tennis Ball Pack", desc:"3 tennis balls for fetch", price:180,  img:"https://www.dhresource.com/webp/m/0x0/f2/albu/g9/M01/DF/C3/rBVaWFwseq-AHIE5AAiiNMSLTvU784.jpg", category:"ball"},
  {id:19, title:"Glow Ball", desc:"Glows in dark, easy to spot", price:220, img:"https://ae01.alicdn.com/kf/Se949a1ee5e094b029a9e4f81d25576323.jpg", category:"ball"},
  
];



let cart = JSON.parse(localStorage.getItem("cart")) || [];
document.getElementById("cart-count").textContent = cart.length;


function displayProducts(list){
  const box = document.getElementById("product-list");
  box.innerHTML = "";
  list.forEach(p=>{
    const div = document.createElement("div");
    div.className="card";
    div.innerHTML = `
      <img src="${p.img}" alt="${p.title}">
      <h3>${p.title}</h3>
      <p>${p.desc}</p>
      <div class="price">₹${p.price} </div>
      <button onclick="addToCart(${p.id})">Add to Cart</button>
    `;
    box.appendChild(div);
  });
}


function applyFilters(){
  const cat = document.getElementById("category").value;
  const sort = document.getElementById("sort").value;
  const q = document.getElementById("search").value.toLowerCase();

  let list = products.filter(p =>
    (cat==="all" || p.category===cat) &&
    (p.title.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q))
  );

  if(sort==="az") list.sort((a,b)=>a.title.localeCompare(b.title));
  if(sort==="za") list.sort((a,b)=>b.title.localeCompare(a.title));
  if(sort==="plh") list.sort((a,b)=>a.price-b.price);
  if(sort==="phl") list.sort((a,b)=>b.price-a.price);

  displayProducts(list);
}

document.getElementById("search").addEventListener("input",applyFilters);
document.getElementById("category").addEventListener("change",applyFilters);
document.getElementById("sort").addEventListener("change",applyFilters);

applyFilters();


function addToCart(id){
  const item = products.find(p=>p.id===id);
  cart.push(item);
  localStorage.setItem("cart", JSON.stringify(cart));
  document.getElementById("cart-count").textContent = cart.length;
  window.location.href = "cart.html";
}


document.getElementById("cart-btn").addEventListener("click",()=>{
  window.location.href="cart.html";
});