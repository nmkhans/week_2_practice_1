function checkLeapYear(year) {
  if (year % 400 == 0 || year % 100 == 0 || year % 4 == 0) {
    console.log("Leap year");
  } else {
    console.log("Not leap year");
  }
}

checkLeapYear(2000);
