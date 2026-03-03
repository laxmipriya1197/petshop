
let cart = JSON.parse(localStorage.getItem("cart")) || [];

    function renderCart() {
      const box = document.getElementById("cart-box");
      const totalDiv = document.getElementById("total");
      box.innerHTML = "";

      if (cart.length === 0) {
        box.innerHTML = '<div class="empty">Your cart is empty 🐶</div>';
        totalDiv.textContent = "";
        return;
      }

      let total = 0;
      cart.forEach((item, index) => {
        total += item.price * item.qty;

        const div = document.createElement("div");
        div.className = "cart-item";
        div.innerHTML = `
          <img src="${item.img}" alt="${item.title}">
          <div class="info">
            <h3>${item.title}</h3>
            <div class="price">₹${item.price}</div>
          </div>
          <div class="quantity">
            <button onclick="changeQty(${index}, -1)">-</button>
            <span>${item.qty}</span>
            <button onclick="changeQty(${index}, 1)">+</button>
          </div>
          <button class="remove-btn" onclick="removeItem(${index})">Remove</button>
        `;
        box.appendChild(div);
      });

      totalDiv.textContent = "Total: ₹" + total;
    }

    function changeQty(index, change) {
      cart[index].qty += change;
      if (cart[index].qty < 1) cart[index].qty = 1;
      localStorage.setItem("cart", JSON.stringify(cart));
      renderCart();
    }

    function removeItem(index) {
      cart.splice(index, 1);
      localStorage.setItem("cart", JSON.stringify(cart));
      renderCart();
    }

   
    cart = cart.map(item => ({ ...item, qty: item.qty || 1 }));
    localStorage.setItem("cart", JSON.stringify(cart));

    renderCart();