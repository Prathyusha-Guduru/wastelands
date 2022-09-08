$(function () {
  console.log("happening");
  $(".map").maphilight();
});

firstPoint = document.getElementById("first-point");
boxy = document.getElementById("boxy");

console.log(firstPoint);

firstPoint.addEventListener("mouseover", () => {
  console.log("YES");
});

boxy.addEventListener("mouseover", () => {
  console.log("YES");
});

// firstPoint.addEventListener("click", () => {
//   console.log("YES");
// });
