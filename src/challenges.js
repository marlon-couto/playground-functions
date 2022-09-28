// Desafio 1
function compareTrue(param1, param2) {
  if (param1 === true && param2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}

// Desafio 4
function concatName(stringArray) {
  return `${stringArray[stringArray.length - 1]}, ${stringArray[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties;
}

// Desafio 6
function highestNumberOfArray(array) {
  let highestNumber = array[0];

  for (let index = 0; index < array.length; index += 1) {
    if (array[index] > highestNumber) {
      highestNumber = array[index];
    }
  }
  return highestNumber;
}

function highestCount(array) {
  let highestNumber = highestNumberOfArray(array);
  let counter = 0;

  for (let index = 0; index < array.length; index += 1) {
    if (array[index] === highestNumber) {
      counter += 1;
    }
  }
  return counter;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
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

// Desafio 8
function fizzBuzzString(number) {
  let resultString = '';

  if (number % 3 === 0 && number % 5 === 0) {
    resultString = 'fizzBuzz';
  } else if (number % 3 === 0) {
    resultString = 'fizz';
  } else if (number % 5 === 0) {
    resultString = 'buzz';
  } else {
    resultString = 'bug!';
  }
  return resultString;
}

function fizzBuzz(array) {
  let resultArray = [];

  for (let index = 0; index < array.length; index += 1) {
    resultArray.push(fizzBuzzString(array[index]));
  }
  return resultArray;
}

// Desafio 9
function encode(string) {
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

// Desafio 10
function techList(array, string) {
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
