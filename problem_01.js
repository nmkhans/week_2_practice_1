function calculateGrade(number) {
  if (number >= 80 && number <= 100) {
      console.log('A+');
  } else if (number >= 70 && number <= 79) {
      console.log('A');
  } else if (number >= 60 && number <= 69) {
      console.log('A-');
  } else if (number >= 50 && number <= 59) {
      console.log('B');
  } else if (number >= 40 && number <= 49) {
      console.log('C');
  } else if (number >= 33 && number <= 39) {
      console.log('D');
  } else if (number >= 0 && number <= 32) {
      console.log('F');
  } else {
      console.log('Invalid number');
  }
}

calculateGrade(32)