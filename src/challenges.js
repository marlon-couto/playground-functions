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
function isVowel(char) {
  let vowels = ['a', 'e', 'i', 'o', 'u'];

  for (let index = 0; index < vowels.length; index += 1) {
    if (char === vowels[index]) {
      return true;
    }
  }
  return false;
}

function encodeChar(char) {
  let encodedChar = '';
  if (char === 'a') {
    encodedChar = '1';
  } else if (char === 'e') {
    encodedChar = '2';
  } else if (char === 'i') {
    encodedChar = '3';
  } else if (char === 'o') {
    encodedChar = '4';
  } else {
    encodedChar = '5';
  }
  return encodedChar;
}

function encode(string) {
  let codedString = string.split('');

  for (let index = 0; index < codedString.length; index += 1) {
    let validChar = isVowel(codedString[index]);
    if (validChar === true) {
      codedString[index] = encodeChar(codedString[index]);
    }
  }
  return codedString.join('');
}

function isNumber(char) {
  let numbers = ['1', '2', '3', '4', '5'];

  for (let index = 0; index < numbers.length; index += 1) {
    if (char === numbers[index]) {
      return true;
    }
  }
  return false;
}

function decodeChar(char) {
  let decodedChar = '';
  if (char === '1') {
    decodedChar = 'a';
  } else if (char === '2') {
    decodedChar = 'e';
  } else if (char === '3') {
    decodedChar = 'i';
  } else if (char === '4') {
    decodedChar = 'o';
  } else {
    decodedChar = 'u';
  }
  return decodedChar;
}

function decode(string) {
  let decodedString = string.split('');

  for (let index = 0; index < decodedString.length; index += 1) {
    let validChar = isNumber(decodedString[index]);
    if (validChar === true) {
      decodedString[index] = decodeChar(decodedString[index]);
    }
  }
  return decodedString.join('');
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
