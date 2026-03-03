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


 const foodbtn = document.getElementById('foodbtn')
 foodbtn.addEventListener("click",()=>{
  window.location.href="food.html"
 })
 const treatbtn = document.getElementById('treatbtn')
 treatbtn.addEventListener("click",()=>{
  window.location.href="treats.html"
 })
 const walkbtn = document.getElementById('walkbtn')
 walkbtn.addEventListener("click",()=>{
  window.location.href="walk&travel.html"
 })
 const toybtn = document.getElementById('toybtn')
 toybtn.addEventListener("click",()=>{
  window.location.href="toy.html"
 })
 const clothbtn = document.getElementById('clothbtn')
 clothbtn.addEventListener("click",()=>{
  window.location.href="clothing.html"
 })


