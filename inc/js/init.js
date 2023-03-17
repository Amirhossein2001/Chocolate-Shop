let navbar = document.querySelector(".navbar");

document.querySelector("#menuButton").onclick = function () {
  navbar.classList.toggle("active");
  searchForm.classList.remove("active");
  cartItem.classList.remove("active");
};
//  raahe dige:
// document.querySelector("#menuButton").onclick = () => {
//   navbar.classList.toggle("active");
// };

let cartItem = document.querySelector(".cartItemsContainer");

document.querySelector("#cartButton").onclick = function () {
  cartItem.classList.toggle("active");
  navbar.classList.remove("active");
  searchForm.classList.remove("active");

};

let searchForm = document.querySelector(".searchForm");

document.querySelector("#searchButton").onclick = function () {
  searchForm.classList.toggle("active");
  navbar.classList.remove("active");
  cartItem.classList.remove("active");
};

window.onscroll = () => {
  navbar.classList.remove("active");
  searchForm.classList.remove("active");
  cartItem.classList.remove("active");
};
