var currentEntry = []; // push number to array when pressed
var currentExpression = [];

function calculate (input) {
  "use strict";
  //TODO Switch cases for all the various inputs possible

    function evaluate () {
      //TODO push last value to current expression
      return eval(currentExpression);
    }

    function clearEntry () {
      currentEntry = [];
    }

    function clearAll () {
      currentEntry = [];
      currentExpression = [];
    }
}

// var x = "5 + 10 * 7";
// console.log(eval(x));

//TODO Build a function to store the equation (possibly array with push)
//TODO Calculator should store the number until an expression button is clicked
//TODO the current expression should also be shown below
// How this will work. Users will type in a number. When expression button is pressed
// number and expression will be pushed to an array. This array will be displayed.
// After the = sign is pressed. The expression will then be passed to be evaluated.
