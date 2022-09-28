// Desafio 11
function invalidDigit(number) {
  if (number > 9 || number < 0) {
    return true;
  }
  return false;
}

function tooManyTimes(array, indexOfLoop, number) {
  let counter = 1;

  for (let index = indexOfLoop + 1; index < array.length; index += 1) {
    if (number === array[index]) {
      counter += 1;
    }
    if (counter > 2) {
      return true;
    }
  }
  return false;
}

function validArray(array) {
  for (let index = 0; index < array.length; index += 1) {
    let firstCheck = invalidDigit(array[index]);
    let secondCheck = tooManyTimes(array, index, array[index]);
    if (firstCheck === true || secondCheck === true) {
      return false;
    }
  }
  return true;
}

function generatePhoneNumber(arr) {
  let phoneNumber = '';
  let isValid = true;

  if (arr.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  isValid = validArray(arr);

  if (isValid === false) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  phoneNumber += `(${arr[0]}${arr[1]}) `;
  phoneNumber += `${arr[2]}${arr[3]}${arr[4]}${arr[5]}${arr[6]}`;
  phoneNumber += `-${arr[7]}${arr[8]}${arr[9]}${arr[10]}`;

  return phoneNumber;
}

// Desafio 12
function smallerThanOthers(lineA, lineB, lineC) {
  if (lineA > lineB + lineC || lineB > lineA + lineC || lineC > lineA + lineB) {
    return false;
  }
  return true;
}

function greaterThanDifference(lineA, lineB, lineC) {
  if (
    lineA > Math.abs(lineB - lineC)
    || lineB > Math.abs(lineA - lineC)
    || lineC > Math.abs(lineB - lineA)
  ) {
    return true;
  }
  return false;
}

function triangleCheck(lineA, lineB, lineC) {
  let check1 = smallerThanOthers(lineA, lineB, lineC);
  let check2 = greaterThanDifference(lineA, lineB, lineC);

  if (check1 === true && check2 === true) {
    return true;
  }
  return false;
}

// Desafio 13
function getIntegers(string) {
  let integers = '';
  let total = 0;

  for (let index = 0; index < string.length; index += 1) {
    if (
      string[index].charCodeAt() - '0'.charCodeAt() >= 0
      && string[index].charCodeAt() - '0'.charCodeAt() <= 9
    ) {
      integers += string[index];
    } else {
      total += Number(integers);
      integers = '';
    }
  }
  total += Number(integers);

  return total;
}

function hydrate(string) {
  let glasses = getIntegers(string);
  if (glasses > 1) {
    return `${glasses} copos de água`;
  }
  return '1 copo de água';
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
