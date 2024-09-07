let letterSearch = ["non", "asal", "banan", "olma", "aziza", "Gul", "mashina"];

let nBor = [];
let nYoq = [];

letterSearch.forEach((element) => {
  console.log(element);

  if (element.includes("n")) {
    nBor.push(element);
  } else {
    nYoq.push(element);
  }
});

console.log(nBor);
console.log(nYoq);
