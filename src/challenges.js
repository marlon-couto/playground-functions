// Desafio 1
function compareTrue(param1, param2) {
  // seu código aqui
  if (param1 === true && param2 === true) {
    return true;
  }
  return false;
}

// console.log(compareTrue(false, false));

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return (base * height) / 2;
}

// console.log(calcArea(51, 1));

// Desafio 3
function splitSentence(string) {
  // seu código aqui
  return string.split(' ');
}

// console.log(splitSentence('go Trybe'));

// Desafio 4
function concatName(stringArray) {
  // seu código aqui
  return `${stringArray[stringArray.length - 1]}, ${stringArray[0]}`;
}

// console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  return wins * 3 + ties;
}

// console.log(footballPoints(14, 8));

// Desafio 6
function highestCount(array) {
  // seu código aqui
  let highestNumber = array[0];
  let counter = 0;

  for (let index = 0; index < array.length; index += 1) {
    if (array[index] > highestNumber) {
      highestNumber = array[index];
    }
  }

  for (let index = 0; index < array.length; index += 1) {
    if (array[index] === highestNumber) {
      counter += 1;
    }
  }

  return counter;
}

// console.log(highestCount([-2, -2, -1]));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let nearestCat = null;

  if (cat1 - mouse < cat2 - mouse) {
    nearestCat = 'cat1';
  } else if (cat1 - mouse > cat2 - mouse) {
    nearestCat = 'cat2';
  } else {
    nearestCat = 'os gatos trombam e o rato foge';
  }

  return nearestCat;
}

// console.log(catAndMouse(1, 0, 2));

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
