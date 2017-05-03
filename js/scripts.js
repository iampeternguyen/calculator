var currentEntry = ""; // push number to array when pressed
var currentExpression = "";
var displayEntry;
var displayExpression;
var done=false;
//TODO make symbols clearer
//TODO fix rounding
function calculate (input) {
  "use strict";
  switch (true) {
    case /[0-9]/.test(input):
      if (input===0 && currentEntry==="0"){

      }
      else if (done){}
      else {
      currentEntry += input;
      updateDisplay();}
      break;
    case /multiply/.test(input):
      if (currentEntry ==="") {}
      else if (done) {
        done=false;
        currentExpression ="";
        currentExpression += currentEntry + " * ";
        currentEntry = "";
        updateDisplay();
      }
      else {
      currentExpression += currentEntry + " * ";
      currentEntry = "";
      updateDisplay();}
      break;
    case /divide/.test(input):
      if (currentEntry ==="") {}
      else if (done) {
        done=false;
        currentExpression ="";
        currentExpression += currentEntry + " / ";
        currentEntry = "";
        updateDisplay();
      }
      else {
      currentExpression += currentEntry + " / ";
      currentEntry = "";
      updateDisplay();}
      break;
    case /add/.test(input):
    if (currentEntry ==="") {}
    else if (done) {
      done=false;
      currentExpression ="";
      currentExpression += currentEntry + " + ";
      currentEntry = "";
      updateDisplay();}
    else {
      currentExpression += currentEntry + " + ";
      currentEntry = "";
      updateDisplay();}
      break;
    case /subtract/.test(input):
    if (currentEntry ==="") {}
    else if (done) {
      done=false;
      currentExpression ="";
      currentExpression += currentEntry + " - ";
      currentEntry = "";
      updateDisplay();}
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
        // currentEntry ="";
        // currentExpression ="";
        // done=false;
        // updateDisplay();
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
    if (currentEntry ==="") {
      $('.display').html("0");
    }
    else {
       $('.display').html(displayEntry);
     }
     if (currentExpression ==="") {
        $('.displayequation').html("0");
     } else {
        $('.displayequation').html(displayExpression);
     }

  }
  function calculateTotal(){

    displayExpression = currentExpression.replace(/\//gi, '÷').replace(/\*/gi, '×');
    displayEntry = round(eval(currentExpression), 4);
    currentEntry = displayEntry;
    if (displayEntry == "Infinity") {
      displayEntry = "Error";
    }
    $('.display').html(displayEntry);
    $('.displayequation').html(displayExpression);
    done=true;

  }
  function round(value, decimals) {
    return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
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
