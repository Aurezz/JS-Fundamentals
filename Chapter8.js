// Greater/Less than
// a < b a > b
// Greater/less than or equals: a >= b, a <= b
// Equality check is written as a == b (please note the double equation sign
// '='. A single symbol a = b would mean an assignment).
// Not equals. In maths the notation is ≠, in JavaScript it’s written as an
// assignment with an exclamation sign before it: a != b.

alert(2 > 1); // True
alert(3 == 1); // false
alert(2 != 1); // true

// can be assigned to a variable
let value = 5 > 1
alert(value);


// strings are compared letter by letter
alert( 'Z' > 'A');
alert('Alpha' > 'Aapha');
alert('bee' > 'be');
// lowercase character has a greater index in the internal 
// encoding table (Unicode)
alert('a' > 'A'); // true


// When compared values belong to different types, they are converted to numbers
alert( '2' > 1 ); // true, string '2' becomes a number 2
alert( '01' == 1 ); // true, string '01' becomes a number 1
// true becomes 1 false becomes 0
alert(true > 0);
alert(true == 1);
alert(false == 0)

// with regular equality check you cannot differentiate between some values
alert( '' == false ); // true
// A strict equality operator === checks the equality without type conversion.
alert(0 === false); // false as different types


// For maths and other comparisons < > <= >=
// Values null/undefined are converted to a number: null becomes 0
// while undefined becomes NaN.

alert(null > 0);
alert(null < 0);
alert(null >= 0);
alert(null == undefined);
alert( undefined > 0 ); // false (1)
alert( undefined < 0 ); // false (2)
alert( undefined == 0 ); // false (3)

