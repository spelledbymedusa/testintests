<div class="image-bar" id="imageBar"></div>

<script>
  // List all your images here
  const imageFiles = [
    "Altenhilfe.png",
    "Naturschutz.png",
    "Tierschutz.png",
    "Kindersport.png",
    "Kultur.png",
    "Musik.png",
    "Bildung.png"
    // Later add more filenames here
  ];

  const imageBar = document.getElementById("imageBar");

  imageFiles.forEach(file => {
    // Create <a> element
    const link = document.createElement("a");
    link.href = "#" + file.split(".")[0]; // link to id based on filename
    link.className = "image-card";

    // Create <img> element
    const img = document.createElement("img");
    img.src = "assets/headerpics/" + file;
    img.alt = file.split(".")[0];

    // Create <span> for title
    const title = document.createElement("span");
    title.className = "image-title";
    title.textContent = file.split(".")[0];

    // Append img and title to link
    link.appendChild(img);
    link.appendChild(title);

    // Append link to image bar
    imageBar.appendChild(link);
  });
</script>

