$(function () {
  console.log("happening");
  $(".map").maphilight();
});

firstPoint = document.getElementById("first-point");
thirdPoint = document.getElementById("third-point");

newspaper = document.querySelector(".newspaper");
mars = document.querySelector(".mars");

console.log(firstPoint);

firstPoint.addEventListener("mouseover", () => {
  newspaper.classList.toggle("show");
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

// thirdPoint.addEventListener("mouseover",())

// firstPoint.addEventListener("click", () => {
//   console.log("YES");
// });
