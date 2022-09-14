$(function () {
  console.log("happening");
  $(".map").maphilight();
});

firstPoint = document.getElementById("first-point");
thirdPoint = document.getElementById("third-point");
secondPoint = document.getElementById("second-point");
bag = document.querySelector(".sticky-bag");
mapPopup = document.querySelector(".map-popup");

newspaper = document.querySelector(".newspaper");
mars = document.querySelector(".mars");
audio = document.querySelector(".radio");

console.log(bag);

firstPoint.addEventListener("mouseover", () => {
  newspaper.classList.toggle("show");
});

secondPoint.addEventListener("mouseover", () => {
  audio.play();
});

secondPoint.addEventListener("mouseout", () => {
  audio.pause();
});

newspaper.addEventListener("mouseout", () => {
  newspaper.classList.toggle("show");
});

thirdPoint.addEventListener("mouseover", () => {
  mars.classList.toggle("show");
  console.log("thisrd point");
});

mars.addEventListener("mouseout", () => {
  mars.classList.toggle("show");
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
// function scrollPos() {
//   var myDiv = document.querySelector(".team-section").scrollTop;
//   if (myDiv.offsetHeight + myDiv.scrollTop >= myDiv.scrollHeight) {
//     console.log("scroll not toppped");
//   } else {
//     console.log("scroll is toppped");
//   }
// }

// function preventScroll(e) {
//   e.preventDefault();
//   e.stopPropagation();

//   return false;
// }

// window.addEventListener("scroll", (event) => {
//   console.log(document.querySelector("html").scrollTop);

//   if (document.querySelector("html").scrollTop >= 2429.60009765625) {
//     console.log("end reached");
//     // alert("WWRGRG");
//     // window.addEventListener("DOMMouseScroll", preventDefault, false); // older FF
//     document
//       .querySelector("html")
//       .addEventListener("wheel", preventScroll, { passive: false });

//     // document.querySelector("html").style.overflowY = "hidden";
//   }
//   // console.log("Scrolling...");
// });

// let footer = document.querySelector(".footer");
// footer.addEventListener("scroll", () => {
//   console.log("scrollllllllll");
// });
