
// window.onload = function() {
//     elForm.addEventListener('submit', doMath, false);
// };
// from what I've been reading window.onload is not necessary when the script tag is at the bottom of the page? 

const calc = document.getElementById("calc"); // declaring element as a constant

calc.addEventListener('click', function(){ // adding event listener to that element
    let miles = document.getElementById('miles').value; // declaring input value as miles variable
    let gallons = document.getElementById('gallons').value; // declaring input value as gallons var
    let mpg = miles/gallons;  // declaring mpg variable as miles var divided by gallons var
    document.getElementById('mpg').value = mpg; // changing element to output/answer
});

// The following is my attempt to do the extra credit:

// declaring input elements as variables
let input1 = document.getElementById('miles');  // declaring inputs as variables input1 and input2
let input2 = document.getElementById('gallons');

function checkInput(input) {                       // checkInput function
    if (isNaN(input)) {                            // if the input is not a number
      alert('Both entries must be numeric');  // alert asks for number
 } 
//  else {                                       // if is a number
    //   alert('whatever');                           // nada (this was used for testing)
    // }
  }
   
  input1.addEventListener('blur', function() {        // when input loses focus
    checkInput(parseInt(input1.value));                         // check input
  });

  input2.addEventListener('blur', function() {        // when input loses focus
    checkInput(parseInt(input2.value));                         // check input
  });

