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
function triangleCheck() {}

// Desafio 13
function hydrate() {}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
