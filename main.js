const height = document.querySelector (".heightInput");
const mass = document.querySelector (".massInput");
const divResultBMI = document.querySelector (".divResultBMI");



function calculateBMI () {
 const heightAmount = height.value;
 const massAmount = mass.value;
 const BMI = massAmount / heightAmount ** 2;
 const roundedBMI = BMI.toFixed(0);
 const resultBMI = document.createElement('h2');
 resultBMI.classList.add('resultBMI');
 divResultBMI.appendChild(resultBMI);
 resultBMI.innerText = roundedBMI;
 colourCode(roundedBMI, resultBMI);
}

function colourCode(x, y) {
 switch(true) {
  case (x <= 18):
   y.classList.add('low');
   break;
  case (x >= 19 && x <= 24):
   y.classList.add('normal');
   break;
  case (x >= 25 && x <= 29):
   y.classList.add('high');
   break;
  case (x >= 30 && x <= 35):
   y.classList.add('veryHigh');
   break;
  case (x >= 36):
   y.classList.add('obese');
   break;
  default:
   console.log('Not a valid number');
 }
} 