const flat= document.getElementById("flat-text");
position =200;
function animate(){
    position--;
    flat.style.left=position +"px";
    if(position< -flat.offsetWidth){
        position =300;
    }
    requestAnimationFrame(animate)
}
animate();
const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");


const closeBtn = document.createElement("i");
closeBtn.classList.add("fa-solid", "fa-xmark", "close-btn");
menu.prepend(closeBtn);

hamburger.addEventListener("click", () => {
    menu.classList.add("active");
});

closeBtn.addEventListener("click", () => {
    menu.classList.remove("active");
});



const stars1 = document.querySelectorAll(".stars1 .star");


const ratingValue1 = document.getElementById("rating-value1");


stars1.forEach((star, index) => {

 
  star.addEventListener("click", () => {

    
    stars1.forEach(s => s.classList.remove("active"));

    
    for (let i = 0; i <= index; i++) {
      stars1[i].classList.add("active");
    }

    
    ratingValue1.textContent = `Your rating: ${index + 1} stars`;
  });
});
const stars2 = document.querySelectorAll(".stars2 .star");


const ratingValue2 = document.getElementById("rating-value2");


stars2.forEach((star, index) => {

 
  star.addEventListener("click", () => {

    
    stars2.forEach(s => s.classList.remove("active"));

    
    for (let i = 0; i <= index; i++) {
      stars2[i].classList.add("active");
    }

    
    ratingValue2.textContent = `Your rating: ${index + 1} stars`;
  });
});
const stars3 = document.querySelectorAll(".stars3 .star");


const ratingValue3 = document.getElementById("rating-value3");


stars3.forEach((star, index) => {

 
  star.addEventListener("click", () => {

    
    stars3.forEach(s => s.classList.remove("active"));

    
    for (let i = 0; i <= index; i++) {
      stars3[i].classList.add("active");
    }

    
    ratingValue3.textContent = `Your rating: ${index + 1} stars`;
  });
});
document.getElementById("shopNowBtn").addEventListener("click", function() {
    window.location.href = "product.html";
});
document.getElementById("userBtn").addEventListener("click", function() {
   
    window.location.href = "user.html";
});