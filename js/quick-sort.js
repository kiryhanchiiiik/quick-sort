// const arr = [15, 9, 7, 33, 10, 25];

const arr = Array.from({ length: 100000 }, () =>
  Math.floor(Math.random() * 100000)
);

const quickSort = (arr) => {
  if (arr.length <= 1) return arr;

  const pivot = arr[0];
  const less = [];
  const greater = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      less.push(arr[i]);
    } else {
      greater.push(arr[i]);
    }
  }

  return [...quickSort(less), pivot, ...quickSort(greater)];
};

console.time("quickSort");

console.log(quickSort(arr));

console.timeEnd("quickSort");
