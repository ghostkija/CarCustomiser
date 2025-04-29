// Basic splash animation and color change logic
document.addEventListener("DOMContentLoaded", () => {
  const splash = document.getElementById("splash");
  setTimeout(() => splash.style.display = "none", 2000);

  const colorPicker = document.getElementById("colorPicker");
  const canvas = document.getElementById("carCanvas");
  const ctx = canvas.getContext("2d");

  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;

  function drawCar(color) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = color;
    ctx.fillRect(100, 150, 200, 100); // Placeholder car body
    ctx.fillStyle = "black";
    ctx.beginPath();
    ctx.arc(130, 250, 20, 0, Math.PI * 2);
    ctx.arc(270, 250, 20, 0, Math.PI * 2);
    ctx.fill();
  }

  drawCar("#ff0000");
  colorPicker.addEventListener("input", (e) => drawCar(e.target.value));
});
