const imageFiles = [
  "Altenhilfe.png",
  "Naturschutz.png",
  "Tierschutz.png",
  "Kindersport.png",
  "Kultur.png",
  "Musik.png",
  "Bildung.png"
];

const imageBar = document.getElementById("imageBar");

imageFiles.forEach(file => {
  const link = document.createElement("a");
  link.href = "#" + file.split(".")[0];
  link.className = "image-card";

  const img = document.createElement("img");
  img.src = "assets/headerpics/" + file;
  img.alt = file.split(".")[0];

  const title = document.createElement("span");
  title.className = "image-title";
  title.textContent = file.split(".")[0];

  link.appendChild(img);
  link.appendChild(title);
  imageBar.appendChild(link);
});

// ARROW NAVIGATION
const arrowLeft = document.getElementById("arrowLeft");
const arrowRight = document.getElementById("arrowRight");

const scrollAmount = 240; // how much to scroll per click (pixels)

arrowLeft.addEventListener("click", () => {
  imageBar.scrollBy({ left: -scrollAmount, behavior: "smooth" });
});

arrowRight.addEventListener("click", () => {
  imageBar.scrollBy({ left: scrollAmount, behavior: "smooth" });
});
