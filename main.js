function checkEvenOrOdd(number) {
    if (number % 2 === 0) {
      document.write("The entered number is even.");
    } else {
      document.write("The entered number is odd.");
    }
  }
  
  var inputNumber = prompt("Enter Number");
  
  checkEvenOrOdd(inputNumber);