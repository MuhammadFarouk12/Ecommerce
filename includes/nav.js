// setting the vars and functions

// nav
const bars = document.querySelector(".bars"),
  navUl = document.querySelector("nav ul");
bars.onclick = (_) => navUl.classList.toggle("activeUl");

// aside
const showAside = (_) => {
  aside.classList.add("activeAside");
  black.classList.add("activeSection");
};
const removeAside = (_) => {
  aside.classList.remove("activeAside");
  black.classList.remove("activeSection");
};

// on click on cart button or on add button
cart.onclick = (_) => showAside();
// document.querySelectorAll(".adder").forEach((e) => {
//   e.onclick = (_) => showAside();
// });
document.body.onclick = (e) => {
  if (e.target.matches("#times")) {
    removeAside();
  }
};
