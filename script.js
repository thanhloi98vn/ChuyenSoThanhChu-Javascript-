// const numberToWords = require("./numberToWords");

let btn = document.querySelector("button");
let input = document.querySelector("input");
let output = document.querySelector("h1");

btn.addEventListener("click", () => {
  output.innerText = numberToWords.toWords(input.value);
});
