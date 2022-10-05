const btnDeskremRef = document.querySelectorAll("button")[0];

const btnInkremRef =document.querySelectorAll("button")[1];

// console.log(btnInkremRef);

let valueRef = 0;

btnDeskremRef.addEventListener(`click`, (event) => {
    valueRef = valueRef - 1;
    const valueEl = document.querySelector("span");
    valueEl.textContent = valueRef;
})

btnInkremRef.addEventListener(`click`, (event) => {
    valueRef += 1;
    const valueEl = document.querySelector("span");
    valueEl.textContent = valueRef;
})