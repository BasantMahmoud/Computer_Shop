let image = document.querySelector(".img");
let photo = document.querySelectorAll(".photo");
let body = document.querySelector(".body");

// change images
function imageChange(img) {
  image.src = img;
}

// change photo

function changes(color) {
  body.style.background = color;
}
