const products = [
 
  {id:1, title:"Leather Collar", desc:"Durable leather collar with soft padding", price:300, weight:"Medium", img:"https://www.weatherbeeta.co.uk/media/catalog/product/1/0/1001696000-BROWN_WB-Padded-Leather-Collar_Image_Hero_Null.jpg", category:"collars"},
  {id:2, title:"Reflective Collar", desc:"Glow-in-dark reflective safety collar", price:280, weight:"Adjustable", img:"https://5.imimg.com/data5/ANDROID/Default/2022/9/ZS/NO/GD/158630039/product-jpeg.jpg", category:"collars"},
  {id:3, title:"Nylon Collar", desc:"Lightweight nylon collar for comfort", price:250, weight:"Small", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2c7Er3BHJdl4xR4l3f5KV8_5A3rmuVxQDow&s", category:"collars"},
  {id:4, title:"Bowtie Collar", desc:"Stylish bowtie collar for special days", price:320, weight:"Medium", img:"https://luxemutt.com/cdn/shop/products/renegade-red-martini-bowtie-leather-dog-collar-904234_800x.jpg?v=1589756910", category:"collars"},


  {id:5, title:"Retractable Leash", desc:"Adjustable leash for flexible walking", price:450, weight:"5m", img:"https://m.media-amazon.com/images/I/41PawQowEDL.jpg", category:"leashes"},
  {id:6, title:"Rope Leash", desc:"Strong rope leash with soft handle", price:400, weight:"1.5m", img:"https://www.flowfold.com/cdn/shop/products/21fw6dl01_31249205-8188-47e0-87fb-19c51021f331.png?v=1651066572", category:"leashes"},
  {id:7, title:"Reflective Leash", desc:"Night-safe reflective design leash", price:420, weight:"2m", img:"https://gooddogpeople.com/cdn/shop/products/ruffwear-crag-reflective-multi-use-dog-leash-canyon-oxbow-891077_562x.jpg?v=1706587009", category:"leashes"},
  {id:8, title:"Double Leash", desc:"Walk two dogs together easily", price:480, weight:"2m", img:"https://mightypaw.com/cdn/shop/products/DoubleDogLeashStudio_014_1.jpg?v=1683208885&width=1244", category:"leashes"},


  {id:9, title:"Padded Harness", desc:"Soft padded harness for comfort", price:500, weight:"Medium", img:"https://cdn.reddingo.de/media/mf_webp/jpg/media/catalog/product/cache/c242852b69642886958102ebeb0e83fa/DH-PH-TQ.webp", category:"harnesses"},
  {id:10, title:"No-Pull Harness", desc:"Reduces pulling during walks", price:520, weight:"Medium", img:"https://cdn.reddingo.it/media/catalog/product/cache/17e920964d809ec207ee315f38245f95/NH-ZZ-GR-grey.jpg", category:"harnesses"},
  {id:11, title:"Mesh Harness", desc:"Breathable mesh fabric harness", price:480, weight:"Small", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeitRvnBduhcraHNAwDyqOyq-UDWrxHqywcA&s", category:"harnesses"},
  {id:12, title:"Adjustable Harness", desc:"Perfect fit for all sizes", price:550, weight:"Adjustable", img:"https://supertails.com/cdn/shop/files/Frame_1405176576_1_600x.png?v=1738132279", category:"harnesses"},

  

  {id:17, title:"Pet Travel Bag", desc:"Lightweight carrier with ventilation", price:850, weight:"2kg", img:"https://m.media-amazon.com/images/I/81a6fQVa2jL._UF1000,1000_QL80_.jpg", category:"carrier"},
  {id:18, title:"Foldable Pet Carrier", desc:"Easy to store and carry", price:950, weight:"2.5kg", img:"https://m.media-amazon.com/images/I/61NZU8xwqDL._AC_UF1000,1000_QL80_.jpg", category:"carrier"},
  {id:19, title:"Seat Belt Harness", desc:"Safety belt for car rides", price:600, weight:"Adjustable", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0zP2B3fpXibpn8uEepeWyHsrSz2EuqsSvvA&s", category:"carrier"},
  {id:20, title:"Travel Water Bottle", desc:"Portable water bottle for walks", price:350, weight:"500ml", img:"https://www.ohmypet.in/cdn/shop/products/123_1024x1024.jpg?v=1669808592", category:"carrier"},

 
  {id:21, title:"Metal Crate", desc:"Strong crate for home or travel", price:1400, weight:"Large", img:"https://i5.walmartimages.com/seo/Walcut-37-Heavy-Duty-Dog-Crate-Metal-Cage-Kennel-with-Removable-Tray-Two-Doors-with-Wheels-Black_cf44c71b-989c-4067-8911-80001a49de45.af031972b46b811bb002df137552be50.jpeg", category:"cages"},
  {id:22, title:"Plastic Cage", desc:"Lightweight plastic crate", price:1100, weight:"Medium", img:"https://images-cdn.ubuy.co.in/65c5066583cb6c34ed23a190-carry-me-plastic-dog-crate-pink-small.jpg", category:"cages"},
  {id:23, title:"Foldable Crate", desc:"Space-saving foldable design", price:1250, weight:"Medium", img:"https://images-cdn.ubuy.co.in/667b0fa60abbf54f43334102-48-inch-extra-large-dog-crate-for-large.jpg", category:"cages"},
  {id:24, title:"Soft Crate", desc:"Comfortable travel crate", price:1350, weight:"Large", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfTaOsaM7dGidFcahcotDXjwq4h9svBDoUMQ&s", category:"cages"},


  {id:25, title:"Poop Bag Dispenser", desc:"Attachable poop bag holder", price:150, weight:"100g", img:"https://www.aplusapets.com/cdn/shop/files/259.jpg?v=1702057416", category:"accessories"},
  {id:26, title:"Pet ID Tag", desc:"Customizable name tag", price:180, weight:"Small", img:"https://jaderabbitdesign.co.za/cdn/shop/products/BONE_1024x1024.jpg", category:"accessories"},
  {id:27, title:"Portable Bowl", desc:"Collapsible food bowl", price:200, weight:"250ml", img:"https://i5.walmartimages.com/seo/Collapsible-Silicone-Dog-Bowl-Portable-Luxury-Pop-Up-Pet-Food-Water-Dish-Great-Hiking-Camping-Travel-Foldable-Carabiner-Clip-Green_85d0487b-0ca6-4992-a4c3-dde6cefed8ff.281b3d4b81a3c4d9c6a546c09f8110bf.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF", category:"accessories"},
  {id:28, title:"Cooling Mat", desc:"Keeps pets cool in summer", price:600, weight:"Medium", img:"https://scratchandnewton.com/cdn/shop/products/berty.jpg?v=1754039041", category:"accessories"},
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
      <div class="price">₹${p.price} | ${p.weight}</div>
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