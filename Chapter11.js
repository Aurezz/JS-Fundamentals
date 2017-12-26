// There are three logical operators in JavaScript: || (OR), && (AND), ! (NOT).

// OR ||
// result = a || b;
alert(true || false);
alert(false || true);
alert(false || false);
alert(true || true);
alert(1 || 0);
alert('' || 1);

let hour = 12;
let isWeekend = true;

if (hour < 10 || hour > 18 || isWeekend) {
  alert( 'The office is closed.' ); // it is the weekend
}

// If all other operands have been assessed (i.e. all were falsy), return the last operand.
let active = false;
let hours = 12
if (hours > 18 || hours < 11 || active) {
    alert("No value was true so last turned true")
}

let currentUser = null;
let defaultUser = null;

let name = currentUser || defaultUser || "unnamed";

alert( name ); 


// && AND
alert(true && false);
alert(false && true);
alert(true && true);
alert(false && false);

let name = 'Michael';
let hoursWork = 12
if(hoursWork === 12 && name === 'Michael'){
    alert("Hello to work.")
}

// if the first operand is truthy,
// AND returns the second operand:
alert( 1 && 0 ); // 0
alert( 1 && 5 ); // 5

// if the first operand is falsy,
// AND returns it. The second operand is ignored
alert( null && 5 ); // null
alert( 0 && "no matter what" ); // 0

// When all values are truthy, the last value is returned
alert ("hello" && 1 && 2); // 2

// NOT !
// result = !value;
alert( !true ); // false
alert( !0 ); // true
// A double NOT !! is sometimes used for converting a value to boolean type
alert( !!"non-empty string" ); // true
alert( !!null ); // false
