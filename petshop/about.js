let mainDiv = document.getElementById("content");


let header = document.createElement("header");
header.classList.add("fade");
header.innerHTML = "🐾 PawPalace Pet Shop";
mainDiv.appendChild(header);


let about = document.createElement("section");
about.classList.add("fade");

about.innerHTML = `
  <h2>About Us</h2>
  <p>Welcome to <b>PawPalace Pet Shop</b> — a happy place for all pets and their loving owners!</p>

  <div id="moreText" style="display:none;">
    <p>We began as a small pet shop in 2020 with a mission to bring love and joy to every pet.</p>
    <p>Our team works with passion to offer toys, food, grooming tools, and accessories that are safe and affordable.</p>
    <p>Pets are family — and we ensure every tail wags with happiness!</p>
  </div>

  <button id="readBtn">Read More</button>
`;
mainDiv.appendChild(about);


let mission = document.createElement("section");
mission.classList.add("fade");
mission.innerHTML = `
  <h3>Our Mission</h3>
  <p>To make pets happy with safe and affordable products.</p>
`;
mainDiv.appendChild(mission);


let values = document.createElement("section");
values.classList.add("fade");
values.innerHTML = `
  <h3>Our Values</h3>
  <p><b>❤️ Love:</b> Pets deserve care and affection.</p>
  <p><b>🧡 Quality:</b> Safe, durable, pet-friendly products.</p>
  <p><b>💛 Trust:</b> We build long-lasting bonds with owners.</p>
`;
mainDiv.appendChild(values);

let team = document.createElement("section");
team.classList.add("fade");

team.innerHTML = `
  <h3>Meet Our Team</h3>
  <div class="team">

    <div class="member">
      <h3>Karan</h3>
      <p>Founder</p>
    </div>

    <div class="member">
      <h3>Sneha</h3>
      <p>Product Designer</p>
    </div>

    <div class="member">
      <h3>Rohit</h3>
      <p>Marketing Head</p>
    </div>

    <div class="member">
      <h3>Divya</h3>
      <p>Customer Support</p>
    </div>

  </div>
`;
mainDiv.appendChild(team);


let footer = document.createElement("footer");
footer.classList.add("fade");
footer.innerHTML = "&copy; 2025 PawPalace Pet Shop. All Rights Reserved.";
mainDiv.appendChild(footer);


let btn = document.getElementById("readBtn");
let more = document.getElementById("moreText");

btn.onclick = function () {
  if (more.style.display === "none") {
    more.style.display = "block";
    btn.innerText = "Read Less";
  } else {
    more.style.display = "none";
    btn.innerText = "Read More";
  }
};
