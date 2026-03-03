document.getElementById("orderBtn").addEventListener("click", confirmOrder);

function confirmOrder() {
  const name = document.getElementById("name").value.trim();
  const address = document.getElementById("address").value.trim();
  const payment = document.getElementById("payment").value;

  if (!name || !address || !payment) {
    alert("⚠️ Please fill out all fields before placing your order.");
    return;
  }

 
  const btn = document.getElementById("orderBtn");
  btn.textContent = "Processing...";
  btn.style.background = "orange";

  setTimeout(() => {
    alert("🎉 Thank you! Your order has been placed successfully.");
    localStorage.removeItem("cart");
    window.location.href = "index.html";
  }, 1500);
}
