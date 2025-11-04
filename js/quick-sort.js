const arr = [15, 9, 7, 33, 10, 25];

const quickSort = (arr) => {
  if (arr.length <= 1) return arr;

  const pivot = arr[0];
  const less = arr.slice(1).filter((el) => el <= pivot);
  const greater = arr.slice(1).filter((el) => el > pivot);

  return quickSort(less).concat(pivot, quickSort(greater));
};

console.log(quickSort(arr));
