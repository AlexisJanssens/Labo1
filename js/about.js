const loaders = document.querySelectorAll(".loader");
const loadersInner = document.querySelectorAll(".loaderInner");
const hobbies = document.querySelectorAll(".hobbies li");
const hobbiesP = document.querySelectorAll(".hobbieP");

for (let loader of loaders) {
  loader.addEventListener("click", () => {
    const inner = loader.querySelector(".loaderInner");
    inner.classList.toggle("activeLoader");
  });
}

// for (let loader in loaders) {
//   loaders[loader].addEventListener("click", () => {
//     loadersInner[loader].classList.toggle("activeLoader");
//   });
// }

// for (let hobbie in hobbies) {
//   hobbies[hobbie].addEventListener("click", () => {
//     hobbiesP[hobbie].classList.toggle("hobbieActive");
//   });
// }

for (let hobbie of hobbies) {
  hobbie.addEventListener("click", () => {
    const hobbieAnim = hobbie.querySelector(".hobbieP");
    hobbieAnim.classList.toggle("hobbieActive");
  });
}
