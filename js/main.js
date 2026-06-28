const headerBtn = document.querySelector(".header-btn");
const navbar = document.querySelector(".navbars");
const elRegister = document.querySelector(".header-btnss");
const elRegisters = document.querySelector(".header-btns");
const feLearnMore = document.querySelector(".box-box_btn");
const f1Btn = document.querySelector(".fbir-btn");
const wecBtn = document.querySelector(".wec-btn");
const gtBtn = document.querySelector(".gt-btn");
const wrcBtn = document.querySelector(".wrc-btn");
const motoBtn = document.querySelector(".fbir-btn");

headerBtn.addEventListener("click", () => {
  navbar.classList.toggle("open");
  headerBtn.classList.toggle("close-btn");
});

elRegister.addEventListener("click", function () {
  window.location.replace("./register.html");
});

elRegisters.addEventListener("click", function () {
  window.location.replace("./register.html");
});

feLearnMore.addEventListener("click", function () {
  window.location.replace("https://en.wikipedia.org/wiki/Formula_E");
});

f1Btn.addEventListener("click", (evt) => {
  window.location.replace("https://formula-1-muslim.netlify.app/");
});

wecBtn.addEventListener("click", (evt) => {
  window.location.replace("https://food-delivery-about-muslim.netlify.app/");
});

gtBtn.addEventListener("click", (evt) => {
  window.location.replace("https://food-delivery-about-muslim.netlify.app/");
});

wrcBtn.addEventListener("click", (evt) => {
  window.location.replace("https://food-delivery-about-muslim.netlify.app/");
});

motoBtn.addEventListener("click", (evt) => {
  window.location.replace("https://food-delivery-about-muslim.netlify.app/");
});
