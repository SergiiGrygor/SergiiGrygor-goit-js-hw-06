function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColorRef = document.querySelector(".change-color");
const spanColorRef = document.querySelector(".color");
const body = document.querySelector("body");


changeColorRef.addEventListener("click", (event) => {
  const randomColor = getRandomHexColor();
  body.style.background = randomColor;
  spanColorRef.textContent = randomColor;
})