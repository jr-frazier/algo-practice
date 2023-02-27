let foo = [1, 2, 3, 4];

const sumArray = (arr) => {
  if (arr.length === 0) {
    return 0;
  } else {
    return arr[0] + sumArray(arr.slice(1));
  }
};

console.log(sumArray(foo));
