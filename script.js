$(function () {
  console.log("happening");
  $(".map").maphilight();
});

firstPoint = document.getElementById("first-point");
thirdPoint = document.getElementById("third-point");

boxy = document.getElementById("boxy");
newspaper = document.querySelector(".newspaper");

console.log(firstPoint);

firstPoint.addEventListener("mouseover", () => {
  newspaper.classList.toggle("show");
});

newspaper.addEventListener("mouseout", () => {
  newspaper.classList.toggle("show");
});

// thirdPoint.addEventListener("mouseover",())

boxy.addEventListener("mouseover", () => {
  console.log("YES");
});

// firstPoint.addEventListener("click", () => {
//   console.log("YES");
// });
