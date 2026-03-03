function subscribe() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();

    if(name === "" || email === "") {
        alert("Please fill in both fields!");
        return;
    }

    
    const thankYou = document.getElementById("thankyou");
    thankYou.style.display = "block";

    document.getElementById("name").value = "";
    document.getElementById("email").value = "";

   
    setTimeout(() => {
        thankYou.style.display = "none";
    }, 3000);
}