function sumFor(array) {
  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }

  return sum;
}
function sumWhile(array) {
  let sum = 0;
  let index = 0;

  while (index < array.length) {
    sum += array[index];
    index++;
  }

  return sum;
}

function sumRecursion(array, index) {
  if (index === 0) {
    return array[index];
  } return array[index] + sumRecursion(array, index - 1);
}

function sumTheSimpleWay(array) {
  return _.reduce(array, function (memo, num) { return memo + num; }, 0);
}

const array = [1, 2, 3, 4, 5];

console.log(sumFor(array));
console.log(sumWhile(array));
console.log(sumRecursion(array, array.length - 1));
console.log(sumTheSimpleWay(array));
