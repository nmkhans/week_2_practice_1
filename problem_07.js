const numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];

function removeDuplicate(arr) {
  let unique = []

  for(let i = 0; i < arr.length; i++) {
    if(unique.indexOf(arr[i]) == -1) {
      unique.push(arr[i])
    }
  }

  console.log(unique)
}

removeDuplicate(numbers)