var currentEntry = ""; // push number to array when pressed
var currentExpression = "";
var displayEntry;
var displayExpression;
var done=false;
function calculate (input) {
  "use strict";
  switch (true) {
    case /[0-9]/.test(input):
      if (input===0 && currentEntry===""){

      } else if (done){} else {
      currentEntry += input;
      updateDisplay();}
      break;
    case /multiply/.test(input):
      if (currentEntry ==="" || done) {}
      else {
      currentExpression += currentEntry + " * ";
      currentEntry = "";
      updateDisplay();}
      break;
    case /divide/.test(input):
      if (currentEntry ==="" || done) {}
      else {
      currentExpression += currentEntry + " / ";
      currentEntry = "";
      updateDisplay();}
      break;
    case /add/.test(input):
    if (currentEntry ==="" || done) {}
    else {
      currentExpression += currentEntry + " + ";
      currentEntry = "";
      updateDisplay();}
      break;
    case /subtract/.test(input):
    if (currentEntry ==="" || done) {}
    else {
      currentExpression += currentEntry + " - ";
      currentEntry = "";
      updateDisplay();}
      break;
    case /equals/.test(input):
    if (currentEntry ==="" || done) {}
    else {
      currentExpression += currentEntry;
      calculateTotal();}
      break;
    case /ce/.test(input):
      if (done) {
        currentEntry ="";
        currentExpression ="";
        done=false;
        updateDisplay();
      } else {
      currentEntry = "";
      updateDisplay();}
      break;
    case /ac/.test(input):
      currentEntry = "";
      currentExpression = "";
      done=false;
      updateDisplay();
      break;
    case /decimal/.test(input):
      if (/\./gi.test(currentEntry) || done) {} else {
      currentEntry += ".";
      updateDisplay();}
      break;
  }
  function updateDisplay (){
    displayEntry = currentEntry;
    displayExpression = currentExpression.replace(/\//gi, '÷').replace(/\*/gi, '×');
    $('.display').html(displayEntry);
    $('.displayequation').html(displayExpression);
  }
  function calculateTotal(){
    displayExpression = currentExpression.replace(/\//gi, '÷').replace(/\*/gi, '×');
    displayEntry = eval(currentExpression);
    $('.display').html(displayEntry);
    $('.displayequation').html(displayExpression);
    done=true;

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
