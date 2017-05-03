$( document ).ready(function() {
var currentEntry = ""; // push number to array when pressed
var currentExpression = "";
var displayEntry;
var displayExpression;

function calculate (input) {
  "use strict";
  switch (true) {
    case /[0-9]/.test(input):
      currentEntry += input;
      updateDisplay();
      break;
    case /multiply/.test(input):
      currentExpression += currentEntry + " * ";
      currentEntry = "";
      updateDisplay();
      break;
    case /divide/.test(input):
      currentExpression += currentEntry + " / ";
      currentEntry = "";
      updateDisplay();
      break;
    case /add/.test(input):
      currentExpression += currentEntry + " + ";
      currentEntry = "";
      updateDisplay();
      break;
    case /subtract/.test(input):
      currentExpression += currentEntry + " - ";
      currentEntry = "";
      updateDisplay();
      break;
    case /equals/.test(input):
      currentExpression += currentEntry;
      calculateTotal();
      break;
    case /ce/.test(input):
      currentEntry = "";
      updateDisplay();
      break;
    case /ac/.test(input):
      currentEntry = "";
      currentExpression = "";
      updateDisplay();
      break;
  }
  function updateDisplay (){
    displayEntry = currentEntry;
    displayExpression = currentExpression;
    $('.display').html(displayEntry);
    $('.displayequation').html(displayExpression);
  }
  function calculateTotal(){
    displayEntry = eval(currentExpression);
    displayExpression = currentExpression;
    $('.display').html(displayEntry);
    $('.displayequation').html(displayExpression);

  }
}


// calculate(3);
// calculate(3);
// calculate("multiply");
// calculate(3);
// calculate(4);
// calculate("divide");
// calculate(3);
// calculate(3);
// calculate("add");
// calculate("3");
// calculate("3");
// calculate("subtract");
// calculate("3");
// calculate("equals");

});
