function forLoopSum(array) {
  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }

  return sum;
}
function whileLoopSum(array) {
  let sum = 0;
  let index = 0;

  while (index < array.length) {
    sum += array[index];
    index++;
  }

  return sum;
}

function recursionSum(array, index) {
  if (index === 0) {
    return array[index];
  } return array[index] + recursionSum(array, index - 1);
}

function underscorSum(array) {
  return _.reduce(array, function (memo, num) { return memo + num; }, 0);
}

const array = [1, 2, 3, 4, 5];

console.log(forLoopSum(array));
console.log(whileLoopSum(array));
console.log(recursionSum(array, array.length - 1));
console.log(underscorSum(array));
