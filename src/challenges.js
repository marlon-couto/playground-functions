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
  let positionOfCat1 = cat1 - mouse;
  let positionOfCat2 = cat2 - mouse;
  let nearestCat = 'os gatos trombam e o rato foge';

  if (positionOfCat1 < 0) {
    positionOfCat1 *= -1;
  } else if (positionOfCat2 < 0) {
    positionOfCat2 *= -1;
  }

  if (positionOfCat1 < positionOfCat2) {
    nearestCat = 'cat1';
  } else if (positionOfCat1 > positionOfCat2) {
    nearestCat = 'cat2';
  }
  return nearestCat;
}

// console.log(catAndMouse(1, 0, 2));

// Desafio 8
function fizzBuzz(array) {
  // seu código aqui
  let resultArray = [];

  for (let index = 0; index < array.length; index += 1) {
    let resultString = '';

    if (array[index] % 3 === 0 && array[index] % 5 === 0) {
      resultString = 'fizzBuzz';
    } else if (array[index] % 3 === 0 && array[index] % 5 !== 0) {
      resultString = 'fizz';
    } else if (array[index] % 5 === 0) {
      resultString = 'buzz';
    } else {
      resultString = 'bug!';
    }
    resultArray.push(resultString);
  }
  return resultArray;
}

// console.log(fizzBuzz([2, 15, 7, 9, 45]));

// Desafio 9
function encode(string) {
  // seu código aqui
  let codedString = string.split('');

  for (let index = 0; index < codedString.length; index += 1) {
    if (codedString[index] === 'a') {
      codedString[index] = '1';
    } else if (codedString[index] === 'e') {
      codedString[index] = '2';
    } else if (codedString[index] === 'i') {
      codedString[index] = '3';
    } else if (codedString[index] === 'o') {
      codedString[index] = '4';
    } else if (codedString[index] === 'u') {
      codedString[index] = '5';
    }
  }
  return codedString.join('');
}
function decode(string) {
  // seu código aqui
  let codedString = string.split('');

  for (let index = 0; index < codedString.length; index += 1) {
    if (codedString[index] === '1') {
      codedString[index] = 'a';
    } else if (codedString[index] === '2') {
      codedString[index] = 'e';
    } else if (codedString[index] === '3') {
      codedString[index] = 'i';
    } else if (codedString[index] === '4') {
      codedString[index] = 'o';
    } else if (codedString[index] === '5') {
      codedString[index] = 'u';
    }
  }
  return codedString.join('');
}

// console.log(encode('go Trybe!'));
// console.log(decode('g4 Tryb2!'));

// Desafio 10
function techList(array, string) {
  // seu código aqui
  let techArray = [];
  let sortedArray = array.sort();

  if (array.length === 0) {
    return 'Vazio!';
  }
  for (let index = 0; index < sortedArray.length; index += 1) {
    techArray.push({
      tech: sortedArray[index],
      name: string,
    });
  }
  return techArray;
}

console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas'));

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
