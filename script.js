document.addEventListener("DOMContentLoaded", () => {
  const showerImage = document.getElementById("shower-image");
  const offset = document.getElementById("offset");
  const layout = document.getElementById("layout");
  const insert = document.getElementById("insert");

  function updateImage() {
    // Build a filename from options
    const fileName = `${offset.value}-${layout.value}-${insert.value}.png`;
    showerImage.src = `images/${fileName}`;
  }

  offset.addEventListener("change", updateImage);
  layout.addEventListener("change", updateImage);
  insert.addEventListener("change", updateImage);
});
