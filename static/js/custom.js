document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll(".image-container .figure");

  images.forEach((image) => {
    const caption = image.getAttribute("data-caption");
    const button = document.createElement("button");
    button.textContent = "Read Chapter";
    button.classList.add("chapter-button");

    const link = document.createElement("a");
    link.href = `/chapter/${caption.toLowerCase().replace(/\s+/g, "-")}`;
    link.appendChild(button);

    const overlay = document.createElement("div");
    overlay.classList.add("overlay");
    overlay.appendChild(link);

    image.appendChild(overlay);
  });
});
