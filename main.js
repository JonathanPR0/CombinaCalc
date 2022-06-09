const factorialInput = document.querySelector("#factorialInput");
const factorialBtn = document.querySelector("#factorialBtn");
const factorialResp = document.querySelector("#factorial .resp");

const arrangementN = document.querySelector("#arrangementN");
const arrangementP = document.querySelector("#arrangementP");
const arrangementBtn = document.querySelector("#arrangementBtn");
const arrangementResp = document.querySelector("#arrangement .resp");

const combinationN = document.querySelector("#combinationN");
const combinationP = document.querySelector("#combinationP");
const combinationBtn = document.querySelector("#combinationBtn");
const combinationResp = document.querySelector("#combination .resp");

factorialBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (factorialInput.value) {
    factorialResp.innerHTML = `<strong>${factorialInput.value}! é igual a: ${factorial(factorialInput.value)}</strong>`
  };
})

arrangementBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (arrangementN.value && arrangementP.value) {
    arrangementResp.innerHTML = `<strong>Esse arranjo dá como resultado: ${arrangement(arrangementN.value, arrangementP.value)}</strong>`
  };
})

combinationBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (combinationN.value && combinationP.value) {
    combinationResp.innerHTML = `<strong>Esse arranjo dá como resultado: ${combination(combinationN.value, combinationP.value)}</strong>`
  };
})

function factorial(number) {
  let factorialNum = 1;
  for (let i = 0; i < number; i++) {
    factorialNum *= (number - i);
  }
  return factorialNum;
}
function arrangement(n, p) {
  return factorial(n) / factorial(n - p)
}
function combination(n, p) {
  return factorial(n) / (factorial(p) * factorial(n - p))
}
const num1 = combination(8, 3);
console.log(num1);