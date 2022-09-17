$(function () {
  console.log("happening");
  $(".map").maphilight();
});

body = document.querySelector("body");
firstPoint = document.getElementById("first-point");
thirdPoint = document.getElementById("third-point");
secondPoint = document.getElementById("second-point");
bag = document.querySelector(".sticky-bag");
mapPopup = document.querySelector(".map-popup");

newspaper = document.querySelector(".newspaper");
mars = document.querySelector(".mars");
audio = document.querySelector(".radio");

console.log(bag);

body.addEventListener("scroll", (e) => {
  console.log("vwb");
  console.log(body.scrollTop);
});

console.log(firstPoint);
firstPoint.addEventListener("mouseover", () => {
  newspaper.classList.toggle("show");
  console.log("firsttttttss");
});

firstPoint.addEventListener("click", () => {
  newspaper.classList.toggle("show");
  console.log("firsttttttss");
});

secondPoint.addEventListener("mouseover", () => {
  audio.play();
});

secondPoint.addEventListener("mouseout", () => {
  audio.pause();
});

newspaper.addEventListener("mouseout", () => {
  newspaper.classList.remove("show");
});

thirdPoint.addEventListener("mouseover", () => {
  mars.classList.toggle("show");
  console.log("thisrd point");
});

mars.addEventListener("mouseout", () => {
  mars.classList.remove("show");
});

document.querySelector(".faq-3").addEventListener("mouseover", () => {
  document.querySelector(".team-section").style.display = "flex";
});

document.querySelector(".faq-3").addEventListener("mouseout", () => {
  document.querySelector(".team-section").style.display = "none";
});

bag.addEventListener("click", () => {
  mapPopup.classList.toggle("popup-show");
  console.log("bag clicked");
});

document.querySelector(".overlay").addEventListener("click", () => {
  mapPopup.classList.toggle("popup-show");
  console.log("wewwrbwrrbwrb");
});

mapPopup.addEventListener("click", () => {
  mapPopup.classList.toggle("popup-show");
  console.log("mappopup");
});

// RESPONSIVE SITE
if (window.innerHeight > window.innerWidth) {
  alert("Please use Landscape!");
}
