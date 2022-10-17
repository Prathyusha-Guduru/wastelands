body = document.querySelector("body");
firstPoint = document.getElementById("first-point");
thirdPoint = document.getElementById("third-point");
secondPoint = document.getElementById("second-point");
bag = document.querySelector(".sticky-bag");
mapPopup = document.querySelector(".map-popup");

newspaper = document.querySelector(".newspaper");
mars = document.querySelector(".mars");
audio = document.querySelector(".radio");
bgOverlay = document.querySelector(".overlay");

faqs = document.querySelector(".faqs");
console.log(faqs);

gsap.registerPlugin(ScrollTrigger);

gsap.to(".sticky-bag", {
  scrollTrigger: {
    trigger: faqs,
    toggleActions: "play none reverse reset",
    // markers: true,
    // start: "top center",
  },
  y: -100,
  // rotation: 360,
  duration: 1,
});

const teamMembers = document.querySelectorAll(".team-member");
console.log(teamMembers);

$(".team-member").each(function (index, teamMember) {
  const hover = new TimelineLite({ paused: true });
  hover.to(teamMember, { opacity: 1, stagger: 0.2 });
  teamMember.animation = hover;
});

body.addEventListener("scroll", (e) => {
  console.log("vwb");
  console.log(body.scrollTop);
});

console.log(firstPoint);
firstPoint.addEventListener("mouseover", () => {
  newspaper.classList.toggle("show");
});

firstPoint.addEventListener("click", () => {
  newspaper.classList.toggle("show");
});

secondPoint.addEventListener(
  "mouseover",
  () => {
    secondPoint.click();
    console.log("radio hover");
    audio.play();
  },
  false
);

secondPoint.addEventListener("mouseout", () => {
  audio.pause();
});

newspaper.addEventListener("mouseout", () => {
  newspaper.classList.remove("show");
});

thirdPoint.addEventListener("mouseover", () => {
  mars.classList.toggle("show");
});

mars.addEventListener("mouseout", () => {
  mars.classList.remove("show");
});

document.querySelector(".faq-3").addEventListener("mouseover", () => {
  document.querySelector(".team-section-img").style.display = "flex";
});

document.querySelector(".faq-3").addEventListener("mouseout", () => {
  document.querySelector(".team-section-img").style.display = "none";
});

// $(".faq-3").mouseenter(function () {
//   teamMembers.forEach((member) => {
//     member.animation.play();
//   });
// });

// $(".faq-3").mouseleave(function () {
//   teamMembers.forEach((member) => {
//     member.animation.reverse();
//   });
// });

// MAP POPUP WITH BAG

bag.addEventListener("click", () => {
  mapPopup.style.display = "unset";
  bgOverlay.classList.remove("displayNone");
});

document.querySelector(".map-close-box").addEventListener("click", () => {
  mapPopup.style.display = "none";
});

bgOverlay.addEventListener("click", () => {
  mapPopup.style.display = "none";
  bgOverlay.classList.add("displayNone");
});
// mapPopup.addEventListener("click", () => {
//   mapPopup.classList.toggle("popup-show");
//   console.log("mappopup");
// });

function mapRange(number, inMin, inMax, outMin, outMax) {
  return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}

// MAGNIFYING GLASS

function magnify(imgID, zoom) {
  var img, glass, w, h, bw;
  img = document.getElementById(imgID);

  /*create magnifier glass:*/
  glass = document.createElement("DIV");
  glass.setAttribute("class", "img-magnifier-glass");
  glass.innerHTML = `<img class='magnifying-glass-img' src="images/mag.png" alt="" />`;

  /*insert magnifier glass:*/
  img.parentElement.insertBefore(glass, img);

  /*set background properties for the magnifier glass:*/
  glass.style.backgroundImage = "url('" + img.src + "')";
  glass.style.backgroundRepeat = "no-repeat";

  // glass.style.backgroundSize =
  //   img.width * zoom + "px " + img.height * zoom + "px";
  // bw = 0;

  w = glass.offsetWidth / 2;
  h = glass.offsetHeight / 2;
  /*execute a function when someone moves the magnifier glass over the image:*/
  glass.addEventListener("mousemove", moveMagnifier);
  img.addEventListener("mousemove", moveMagnifier);
  /*and also for touch screens:*/
  glass.addEventListener("touchmove", moveMagnifier);
  img.addEventListener("touchmove", moveMagnifier);

  function moveMagnifier(e) {
    var pos, x, y;
    /*prevent any other actions that may occur when moving over the image*/
    e.preventDefault();
    /*get the cursor's x and y positions:*/
    pos = getCursorPos(e);
    x = pos.x;
    y = pos.y;

    /*prevent the magnifier glass from being positioned outside the image:*/
    if (x > img.width - w / zoom) {
      // magnifyingDiv.classList.toggle("displayNone");
      // console.log("horizontal ");
      x = img.width - w / zoom;
    }
    if (x < w / zoom) {
      x = w / zoom;
    }
    if (y > img.height - h / zoom) {
      y = img.height - h / zoom;
    }
    if (y < h / zoom) {
      y = h / zoom;
    }

    /*set the position of the magnifier glass:*/
    glass.style.left = x - w + "px";
    glass.style.top = y - h + "px";

    let xMapped = mapRange(x, 150, img.getBoundingClientRect().width, 0, 1200);

    let yMapped = mapRange(
      y,
      120,
      img.getBoundingClientRect().height,
      0,
      642.04
    );

    /*display what the magnifier glass "sees":*/
    // let finalZoom = "-" + x * zoom + "px -" + y * zoom + "px";
    // let finalZoom = "-" + x + "px -" + y + "px";
    let finalZoom = `-${xMapped}px -${yMapped}px`;

    // let finalZoom = `-${x}px -${y}px`;

    // console.log("final zoom", x, y);
    glass.style.backgroundPosition = finalZoom;
  }

  function getCursorPos(e) {
    var a,
      x = 0,
      y = 0;
    e = e || window.event;

    /*get the x and y positions of the image:*/
    a = img.getBoundingClientRect();

    /*calculate the cursor's x and y coordinates, relative to the image:*/
    x = e.pageX - a.left;
    y = e.pageY - a.top;

    /*consider any page scrolling:*/
    x = x - window.pageXOffset;
    y = y - window.pageYOffset;

    return { x: x, y: y };
  }
}

magnify("map-img", 500);

// MOBILE LANDSCAPE CHECK

function mobileCheck() {
  let check = false;
  (function (a) {
    if (
      /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
        a
      ) ||
      /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|vfp|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
        a.substr(0, 4)
      )
    )
      check = true;
  })(navigator.userAgent || navigator.vendor || window.opera);
  return check;
}

if (mobileCheck() && screen.height > screen.width) {
  document
    .querySelector(".mobile-orientation-modal")
    .classList.add("mobile-active");
}

// console.log("small screen", screen.orientation);
console.log("small screen", mobileCheck());

// addEventListener("deviceorientation", (event) => {
//   console.log("orientation changes", event);
// });

mapImg = document.querySelector(".map-img");

magnifyingDiv = document.querySelector(".img-magnifier-glass");
let c = 0;
mapImg.addEventListener("mouseout", () => {
  // magnifyingDiv.style.visibility = "hidden";
  // magnifyingDiv.classList.toggle("displayNone");
  c = c + 1;
  console.log(c);
});

// preloader
window.addEventListener("load", () => {
  var loader = document.getElementById("loader");
  setTimeout(() => {
    loader.style.top = "100%";
  }, 000);
});
