const sizes = document.querySelectorAll(".size");
const colors = document.querySelectorAll(".color");
const shoes = document.querySelectorAll(".shoe");
const gradients = document.querySelectorAll(".gradient");
const shoeBg = document.querySelector(".shoeBackground");

let prevcolor = "blue";
let animationEnd = true;

function changeSize() {
  sizes.forEach((size) => size.classList.remove("active"));
  this.classList.add("active");
}
function chageColor() {
  let primary = this.getAttribute("primary");
  let color = this.getAttribute("color");
  let shoe = document.querySelector(`.shoe[color="${color}"]`);
  let gradient = document.querySelector(`.gradient[color="${color}"]`);
  let prevGradient = document.querySelector(`.gradient[color="${prevcolor}"]`);

  if (!animationEnd) return;

  colors.forEach((c) => c.classList.remove("active"));
  this.classList.add("active");

  document.documentElement.style.setProperty("--primary", primary);

  shoes.forEach((s) => s.classList.remove("show"));
  shoe.classList.add("show");

  gradients.forEach((g) => g.classList.remove("first", "second"));
  gradient.classList.add("first");
  prevGradient.classList.add("second");

  prevcolor = color;
  animationEnd = true;

  gradient.addEventListener("animationEnd", () => {
    animationEnd = true;
  });
}

sizes.forEach((size) => size.addEventListener("click", changeSize));

colors.forEach((c) => c.addEventListener("click", chageColor));

let x = window.matchMedia("(max-width: 1000px)");

function chagenHeight() {
  if (x.matches) {
    let shoeHeight = shoes[0].offsetHeight;
    shoeBg.style.height = `${shoeHeight * 0.9}px`;
  } else {
    shoeBg.style.height = "475px";
  }
}

window.addEventListener("resize", chagenHeight);
