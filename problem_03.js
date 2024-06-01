const arr = [
  6, 1, 8, 9, 2, 5, 15, 19, 3, 4, 7, 10, 12, 18, 14, 11, 13, 17, 20, 16,
];

function sort(arr) {

  for(let i = 0; i < arr.length; i++) {
    for(let j = i + 1; j < arr.length; j++) {
      if(arr[i] >= arr[j]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp
      }
    }
  }

  console.log(arr);
}

sort(arr);
