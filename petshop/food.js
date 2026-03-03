
const products = [
  { id: 1, title: "Dry Chicken 1kg", desc: "Healthy dry food", price: 500, weight: "1kg", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHKE7j2TVdnyIO1errhJUldTIUwoYXQ7o2_w&s", category: "dry" },
  { id: 2, title: "Dry Beef Mix", desc: "Protein-rich dry food", price: 520, weight: "1kg", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjX9OoJ-L3CLp1R5856j7fwmGexOq61vWalg&s", category: "dry" },
  { id: 3, title: "Dry Lamb Meal", desc: "Nutritious dry formula", price: 550, weight: "1kg", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpcDZhUX1uY-wjM9BSW7ubT-jPFRznXCRnZQ&s", category: "dry" },
  { id: 4, title: "Dry Ocean Fish", desc: "Tasty dry seafood", price: 580, weight: "1kg", img: "https://t3.ftcdn.net/jpg/09/63/71/76/360_F_963717649_yYHL8c2mQfCJUtFj6eiopWfiZqWutNRL.jpg", category: "dry" },
  { id: 5, title: "Wet Beef 400g", desc: "Juicy wet food", price: 250, weight: "400g", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVCzoiTsZV_-uwD_G9WH8Su91mZYkUeDCA5LlvWyDzVG-lsRx9IaSS6lXnHev8kwe9UN8&usqp=CAU", category: "wet" },


  { id: 5, title: "Wet Beef 400g", desc: "Juicy wet food", price: 250, weight: "400g", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVCzoiTsZV_-uwD_G9WH8Su91mZYkUeDCA5LlvWyDzVG-lsRx9IaSS6lXnHev8kwe9UN8&usqp=CAU", category: "wet" },
  { id: 6, title: "Wet Chicken Stew", desc: "Soft and moist meal", price: 270, weight: "400g", img: "https://digitalcontent.api.tesco.com/v2/media/marketplace/a23d11ab-0076-476c-8ae8-17f45bdbf2c4/G53-6aLp5r8S-JJh5ghz-bZKE_81286360.jpeg?h=960&w=960", category: "wet" },
  { id: 7, title: "Wet Salmon Delight", desc: "Delicious salmon wet food", price: 290, weight: "400g", img: "https://thrivepetfoods.com/cdn/shop/files/THRIVE_STTHWDS_DOG_WET_FOOD_2_2048x.jpg?v=1714498238", category: "wet" },
  { id: 8, title: "Wet Veggie Mix", desc: "Vegetable based wet food", price: 240, weight: "400g", img: "https://iheartdogs.com/wp-content/uploads/2022/10/Nom_Nom_ingredients-e1666619462248.jpeg", category: "wet" },


  { id: 9, title: "GrainFree Salmon 1kg", desc: "No grains added", price: 700, weight: "1kg", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbNb1JY6SauCLgNk6vj1eiXDuo-W_MUtM-7Q&s", category: "grainfree" },
  { id: 10, title: "GrainFree Tuna", desc: "Tuna grain-free formula", price: 720, weight: "1kg", img: "https://5.imimg.com/data5/SELLER/Default/2021/5/EV/YE/AU/97348387/pet-food-500x500.jpeg", category: "grainfree" },
  { id: 11, title: "GrainFree Lamb", desc: "Hypoallergenic formula", price: 740, weight: "1kg", img: "https://getvetco.com/wp-content/uploads/2020/06/Farmina-ND-Pumpkin-Grain-Free-Lamb-Blueberry-Puppy-Dog-Food-Medium-Maxi-Breeds-1-510x340.jpg", category: "grainfree" },
  { id: 12, title: "GrainFree Chicken", desc: "For sensitive dogs", price: 710, weight: "1kg", img: "https://cdn11.bigcommerce.com/s-hycycps7pu/images/stencil/1280x1280/products/153/891/grain_free_everything__71476.1713191274.jpg?c=1", category: "grainfree" },


  { id: 13, title: "Puppy Starter 1kg", desc: "Growth food for puppies", price: 600, weight: "1kg", img: "https://static-shop.vivapets.com/media/catalog/product/cache/11fc96e7318a291175a0004e054be56e/p/a/packshot_5.jpg", category: "puppy" },
  { id: 14, title: "Puppy Chicken Delight", desc: "Tasty and healthy", price: 650, weight: "1kg", img: "https://5.imimg.com/data5/SELLER/Default/2021/9/LV/CC/LH/100806901/41646spdrbl-500x500.jpg", category: "puppy" },
  { id: 15, title: "Puppy Veg Mix", desc: "Balanced vegetarian meal", price: 580, weight: "1kg", img: "https://www.thesprucepets.com/thmb/rnEGHMZnDiLYwEcM2AqmBdfic70=/1600x0/filters:no_upscale():strip_icc()/homemade-puppy-food-4174007-hero-447949abf9f64a9bb73fca83b8aab471.jpg", category: "puppy" },
  { id: 16, title: "Puppy Growth Boost", desc: "Rich in calcium", price: 620, weight: "1kg", img: "https://m.media-amazon.com/images/I/71qPhymmhnL.jpg", category: "puppy" },


  { id: 17, title: "Baked Veg Mix", desc: "Oven baked healthy mix", price: 450, weight: "1kg", img: "https://i0.wp.com/easyrecipewithfoodie.com/wp-content/uploads/2021/01/IMG_9681.jpg", category: "baked-dry" },
  { id: 18, title: "Baked Chicken Meal", desc: "Crunchy baked bites", price: 470, weight: "1kg", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_n5S-ELYZOMGlv7xuO0XgCpLalHFSVZWbGw&s", category: "baked-dry" },
  { id: 19, title: "Baked Beef Formula", desc: "Slow baked beef recipe", price: 490, weight: "1kg", img: "https://a.storyblok.com/f/145952/2088x2088/2a0de8f1a6/bakedbeef-pieces.jpg/m/3840x0", category: "baked-dry" },
  { id: 20, title: "Baked Lamb Delight", desc: "Oven baked lamb treat", price: 500, weight: "1kg", img: "https://www.thepetgourmet.com/cdn/shop/products/Untitleddesign-2021-01-06T164453.578_413b5834-ff5e-4537-a52e-f04da23d50d7_1024x1024.png?v=1618344381", category: "baked-dry" },


];

let cart = JSON.parse(localStorage.getItem("cart")) || [];
document.getElementById("cart-count").textContent = cart.length;

function displayProducts(list) {
  const box = document.getElementById("product-list");
  box.innerHTML = "";
  list.forEach(p => {
    const div = document.createElement("div");
    div.className = "card";
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

function applyFilters() {
  const cat = document.getElementById("category").value;
  const sort = document.getElementById("sort").value;
  const q = document.getElementById("search").value.toLowerCase();

  let list = products.filter(p =>
    (cat === "all" || p.category === cat) &&
    (p.title.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q))
  );

  if (sort === "az") list.sort((a, b) => a.title.localeCompare(b.title));
  if (sort === "za") list.sort((a, b) => b.title.localeCompare(a.title));
  if (sort === "plh") list.sort((a, b) => a.price - b.price);
  if (sort === "phl") list.sort((a, b) => b.price - a.price);

  displayProducts(list);
}

document.getElementById("search").addEventListener("input", applyFilters);
document.getElementById("category").addEventListener("change", applyFilters);
document.getElementById("sort").addEventListener("change", applyFilters);

applyFilters();

function addToCart(id) {
  const item = products.find(p => p.id === id);
  cart.push(item);
  localStorage.setItem("cart", JSON.stringify(cart));
  document.getElementById("cart-count").textContent = cart.length;
  const btns = document.querySelectorAll("button");
  btns.forEach(btn => {
    btn.style.transition = "all 0.3s ease";
    btn.style.transform = "scale(1.2)";
    setTimeout(() => btn.style.transform = "scale(1)", 300);
  });
  setTimeout(() => window.location.href = "cart.html", 400);
}

document.getElementById("cart-btn").addEventListener("click", () => {
  window.location.href = "cart.html";
});
