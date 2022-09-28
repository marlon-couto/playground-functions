// Desafio 11
function generatePhoneNumber(array) {
  // seu código aqui
  let isValid = true;
  let phoneNumber = '';

  if (array.length !== 11) {
    isValid = false;
  }
  for (let index = 0; index < array.length; index += 1) {
    let counter = 0;

    if (array[index] > 9 || array[index] < 0) {
      isValid = false;
      break;
    }

    for (
      let secondIndex = index;
      secondIndex < array.length;
      secondIndex += 1
    ) {
      if (array[secondIndex] === array[index]) {
        counter += 1;
      }
      if (counter > 2) {
        isValid = false;
        break;
      }
    }
  }

  if (isValid === false) {
    return 'Array com tamanho incorreto';
  } else {
    phoneNumber += `(${array[0]}${array[1]}) ${array[2]}${array[3]}${array[4]}`;
    phoneNumber += `${array[5]}${array[6]}-${array[7]}${array[8]}${array[9]}${array[10]}`;
    return phoneNumber;
  }
}

// console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]));

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
