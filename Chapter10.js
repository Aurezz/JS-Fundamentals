// conditional statements
let namee = prompt("What is your name?", '');
if (namee == 'John') {
    alert("Hello John!")
    alert("Great to have you here!")
}

// else statements
let consolee = prompt("What console do you play on?", '');
if (consolee == 'PS4'){
    alert("YAY")
    alert("It's a great console!");
} else if (consolee == 'XBOX') {
    alert("COOL");
    alert("It's a great console too!");  
} else if (consolee == 'PC') {
    alert("It's not a console!");
} else {
    alert("Aww, that's not a console!")
}

// ternary operator
let result = condition ? value1 : value2

let age = prompt('age?', 18);

let message = (age < 3) ? 'Hi, baby!' :
  (age < 18) ? 'Hello!' :
  (age < 100) ? 'Greetings!' :
  'What an unusual age!';

alert( message );

// cam ne done using if else statements

if (age < 3) {
    message = 'Hi, baby!';
  } else if (a < 18) {
    message = 'Hello!';
  } else if (age < 100) {
    message = 'Greetings!';
  } else {
    message = 'What an unusual age!';
  }



let officialName = prompt("What is the official name of JavaScript?", '');
if (officialName == "ECMAScript"){
    alert("Right");
} else {
    alert("Didn’t know? ECMAScript!”")
}


let isNumber = prompt("What is the number?", 1);
if (isNumber > 0){
    alert('1');
} else if (isNumber < 0){
    alert('-1')
} else if (isNumber == 0){
    alert('0')
} else {
    alert("That's not a number!")
}


let userName = prompt("Who's there?", '');

if (userName == 'Admin') {

  let pass = prompt('Password?', '');

  if (pass == 'TheMaster') {
    alert( 'Welcome!' );
  } else if (pass == null) {
    alert( 'Canceled.' );
  } else {
    alert( 'Wrong password' );
  }

} else if (userName == null) {
  alert( 'Canceled' );
} else {
  alert( "I don't know you" );
}
