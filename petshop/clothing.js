const products = [

    { id: 1, title: "Traditional Kurta", desc: "Elegant festive kurta for your dog", price: 350, size: "Small", img: "https://petsway.in/cdn/shop/files/2_76f4d31e-1fcb-4771-a6cf-29a04adaced5.jpg?v=1740649718&width=2048", category: "ethnic" },
    { id: 2, title: "Sherwani Suit", desc: "Stylish ethnic sherwani look", price: 500, size: "Medium", img: "https://5.imimg.com/data5/IOS/Default/2022/2/CD/ZL/AZ/121099993/product-jpeg.png", category: "ethnic" },
    { id: 3, title: "Lehenga Dress", desc: "Bright colorful lehenga for girl dogs", price: 480, size: "Small", img: "https://coochipoo.com/wp-content/uploads/2022/12/IMG_3878-scaled.jpeg", category: "ethnic" },
    { id: 4, title: "Silk Dhoti Set", desc: "Soft silk dhoti with dupatta", price: 420, size: "Medium", img: "https://images-eu.ssl-images-amazon.com/images/I/81y69I6AcuL._AC_UL495_SR435,495_.jpg", category: "ethnic" },


    { id: 5, title: "Furry Ear Muff", desc: "Keeps ears warm in winter", price: 200, size: "Pair", img: "https://i.pinimg.com/236x/18/69/b7/1869b73608cd0e2031e7ac6dee51eb79.jpg", category: "ear" },
    { id: 6, title: "Colorful Ear Cover", desc: "Cute colorful ear protection", price: 180, size: "Pair", img: "https://m.media-amazon.com/images/I/81mXUzClynL.jpg", category: "ear" },
    { id: 7, title: "Fluffy Earmuffs", desc: "Super soft earmuffs for comfort", price: 220, size: "Pair", img: "https://www.shutterstock.com/image-photo/cute-american-bully-wearing-big-600nw-1276702786.jpg", category: "ear" },
    { id: 8, title: "Winter Ear Wrap", desc: "Full wrap ear protection", price: 240, size: "Pair", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKChPM_Sk8DDEPGMJJtwzA5lDUsJmzhuq2BM2YgTYBpATyxejpveMaTVzPUILVE327Gi8&usqp=CAU", category: "ear" },


    { id: 9, title: "Red Bandana", desc: "Classic red triangle bandana", price: 120, size: "1pc", img: "https://www.zoofpets.com/cdn/shop/files/6_25666a04-96eb-4334-96a1-a7aec3ee52c9.jpg?v=1727769820", category: "bandanas" },
    { id: 10, title: "Blue Bow Tie", desc: "Cute blue bow for parties", price: 150, size: "1pc", img: "https://www.poochmate.com/cdn/shop/products/bluepincheckbowtie.png?v=1638785993", category: "bandanas" },
    { id: 11, title: "Printed Bandana", desc: "Trendy printed design", price: 130, size: "1pc", img: "https://files.ekmcdn.com/lehan/images/personalised-black-paw-print-bandana-style-dog-collar-pet-gift-(3)-11293-p.jpg?v=643E396F-C836-4782-B6C5-DD7519EAF541", category: "bandanas" },
    { id: 12, title: "Festive Bow Set", desc: "Pack of 2 festive bow ties", price: 200, size: "2pcs", img: "https://petsandpeople.in/cdn/shop/files/Lifestyle.jpg?v=1737694035&width=1946", category: "bandanas" },


    { id: 13, title: "Rain Boots", desc: "Protect paws during rain", price: 300, size: "4pcs", img: "https://assets.petco.com/petco/image/upload/f_auto,q_auto/3728056-center-2", category: "boots" },
    { id: 14, title: "Winter Socks", desc: "Warm and soft socks", price: 250, size: "4pcs", img: "https://cdn-fastly.petguide.com/media/2022/02/16/8203330/muttsoks-dog-socks-have-your-poochs-paws-covered-this-winter.jpg?size=720x845&nocrop=1", category: "boots" },
    { id: 15, title: "Anti-Slip Shoes", desc: "Non-slip comfort boots", price: 320, size: "4pcs", img: "https://i5.walmartimages.com/seo/zhongxinda-Dog-Boots-Reflective-Lightweight-Pet-Dog-Shoes-Paw-Protector-With-Anti-Slip-Sole-For-Small-and-Big-Dogs_4c88e647-b60b-4c48-9de4-50df865fa5c8.5d1d0efbd5348eb11d50c8ed8c239fef.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF", category: "boots" },
    { id: 16, title: "Colorful Paw Socks", desc: "Cute colorful paw socks", price: 230, size: "4pcs", img: "https://m.media-amazon.com/images/I/81Wmzab2lcL.jpg", category: "boots" },

    { id: 17, title: "Striped T-Shirt", desc: "Soft cotton striped t-shirt", price: 200, size: "Small", img: "https://m.media-amazon.com/images/I/81YmX01nQ+L._AC_UF1000,1000_QL80_.jpg", category: "tshirts" },
    { id: 18, title: "Checked Shirt", desc: "Trendy checked shirt for dogs", price: 220, size: "Medium", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8osriEERdUcD6NieFuKWQ_Nhp_7AxIG6XFg&s", category: "tshirts" },
    { id: 19, title: "Graphic Tee", desc: "Cool printed dog tee", price: 240, size: "Large", img: "https://fbres.fivebelow.com/image/upload/t_large/f_webp/5bassets/prod-hts/spree/images/1802145/original/4640030-00_C.jpg", category: "tshirts" },
    { id: 20, title: "Denim Shirt", desc: "Denim style smart shirt", price: 260, size: "Medium", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRruRsKNbwM93_PIDiA0IcNuvG1h8FVDc1duA&s", category: "tshirts" },

    

   
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
      <div class="price">₹${p.price} | ${p.size}</div>
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
    window.location.href = "cart.html";
}


document.getElementById("cart-btn").addEventListener("click", () => {
    window.location.href = "cart.html";
});