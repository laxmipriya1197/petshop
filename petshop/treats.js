const products = [

  {id:1, title:"Peanut Butter Biscuits", desc:"Crunchy biscuits made with peanut butter", price:150, weight:"200g", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTorggP7Em-8sZF_z7UGmLaDLeOcFqK3Db0aQ&s", category:"biscuits"},
  {id:2, title:"Oatmeal Cookies", desc:"Healthy oats & honey cookies", price:130, weight:"180g", img:"https://spoiledhounds.com/wp-content/uploads/2024/04/Oatmeal-Cookies-for-Dogs-Recipe-Photo.jpg", category:"biscuits"},
  {id:3, title:"Cheese Bites", desc:"Cheesy biscuits your dog will love", price:160, weight:"200g", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ66X97mILt7OF0J9LJPIqZoh3WNKVWpu83CA&s", category:"biscuits"},
  {id:4, title:"Pumpkin Cookies", desc:"Made with real pumpkin", price:140, weight:"200g", img:"https://takestwoeggs.com/wp-content/uploads/2023/08/Pumpkin-Peanut-Butter-Dog-Treats-Takestwoeggs-sq.jpg", category:"biscuits"},

  
  {id:5, title:"Rawhide Bone", desc:"Long-lasting chew for dental health", price:200, weight:"2pcs", img:"https://cdn01.pharmeasy.in/dam/products_otc/X76077/pawcloud-rawhide-pressed-dog-bones-dog-bone-treat-6-inches-800-gm-approx-8-pieces-6.1-1671742368.jpg", category:"bones"},
  {id:6, title:"Chicken Chew Stick", desc:"Tasty chicken-flavored chew", price:180, weight:"3pcs", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvhJmCcLtMAKN4kQtsrV551lqsgqFgIU0ZYQ&s", category:"bones"},
  {id:7, title:"Beef Flavor Bone", desc:"Strong chew to keep dogs busy", price:220, weight:"2pcs", img:"https://thumbs.dreamstime.com/b/dog-treats-1668662.jpg", category:"bones"},
  {id:8, title:"Minty Chew Bone", desc:"Freshens breath with mint", price:210, weight:"2pcs", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc57Q4R52MVkZeG8D_ml0vKCx4k2GlWLxQ6w&s", category:"bones"},

 
  {id:9, title:"Dental Sticks", desc:"Helps clean teeth and gums", price:190, weight:"5pcs", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx9yD5wtj7s8LJxYDsgyIPOr2EJ_Nc8WMzTg&s", category:"dental"},
  {id:10, title:"Mint Dental Chew", desc:"Fresh mint flavor for oral hygiene", price:170, weight:"4pcs", img:"https://m.media-amazon.com/images/I/51ommBu7lmL.jpg", category:"dental"},
  {id:11, title:"Dental Care Bone", desc:"Prevents tartar build-up", price:200, weight:"2pcs", img:"https://image.made-in-china.com/2f0j00uwOiEMbSGZqy/Pet-Supplies-Dog-Chew-Dental-Care-Bone-100-Natural-Rawhide-Pressed-Bone-Bulk-Dog-Treats.webp", category:"dental"},
  {id:12, title:"Herbal Dental Bar", desc:"Natural herbs for teeth care", price:180, weight:"3pcs", img:"https://www.shutterstock.com/image-photo/dog-dental-care-concept-treats-600nw-2324540319.jpg", category:"dental"},

 -
  {id:13, title:"Chicken Jerky", desc:"Soft chewy chicken strips", price:250, weight:"150g", img:"https://images-cdn.ubuy.co.in/6485ea01e808a03c0655fe18-mon2sun-chicken-jerky-for-dogs-made-with.jpg", category:"jerky"},
  {id:14, title:"Beef Jerky", desc:"Protein-packed beef jerky", price:270, weight:"150g", img:"https://www.cleardog.com.au/wp-content/uploads/2023/02/Beef-Crunch-Jerky-Dog-Treats-1.jpg", category:"jerky"},
  {id:15, title:"Fish Jerky", desc:"Rich in omega-3", price:260, weight:"150g", img:"https://www.teacherspettreats.com.au/cdn/shop/products/Dog-Treats-Fish-Jerky.jpg?v=1633502691", category:"jerky"},
  {id:16, title:"Lamb Jerky", desc:"Tender lamb meat treat", price:280, weight:"150g", img:"https://bentleysdogfood.co.uk/wp-content/uploads/2022/08/Venison-Strips-700-1.jpg", category:"jerky"},

 
  {id:17, title:"Mini Chicken Cubes", desc:"Perfect for training rewards", price:150, weight:"100g", img:"https://organicdogchef.com/wp-content/uploads/2025/06/chicken-cubes.jpg", category:"training"},
  {id:18, title:"Soft Cheese Bits", desc:"Cheesy mini bites", price:160, weight:"100g", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnPHL7IxsODUUi9sJD8AyNjUkvKfVqIsOPGQ&s", category:"training"},
  {id:19, title:"Liver Training Treats", desc:"Rich liver flavor", price:170, weight:"100g", img:"https://www.petdrugsonline.co.uk/media/catalog/product/6/a/6aac26b2431f1feab4c2788bd17fc4736dc0cee6ee75562fe11643eabd80fb08.jpeg?quality=70&bg-color=255,255,255&fit=bounds&height=1200&width=1200&canvas=1200:1200", category:"training"},
  {id:20, title:"Veg Crunchies", desc:"Healthy veggie snacks", price:140, weight:"100g", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0vPPqrvGc5GEJjgoiJq8JFO3-pbuB8iaw7Q&s", category:"training"},
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