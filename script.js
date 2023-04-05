const carts = document.querySelector(".items").children;
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");
const page = document.querySelector(".page-btn");
const maxcart = 3;
let index = 1;

const pagination = Math.ceil(carts.length / maxcart);

function showitem() {
  for (let i = 0; i < carts.length; i++) {
    carts[i].classList.add("hidden");
    carts[i].classList.remove("block");
    if (i >= index * maxcart - maxcart && i < index * maxcart) {
      carts[i].classList.remove("hidden");
      carts[i].classList.add("block");
    }
    page.innerText = index;
  }
}

nextBtn.addEventListener("click", () => {
  index++;
  showitem();
  check()
});
prevBtn.addEventListener("click", () => {
  index--;
  showitem();
  check()
});

function check() {
  if (index == pagination) {
    nextBtn.classList.add("hidden");
  } else {
    nextBtn.classList.remove("hidden");
  }
  if (index == 1) {
    prevBtn.classList.add("hidden");
  } else {
    prevBtn.classList.remove("hidden");
  }
}
window.onload = showitem();
