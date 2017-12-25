/*
An operand – is what operators are applied to. For instance in multiplication
5 * 2 there are two operands: the left operand is 5, and the right operand is
2. Sometimes people say "arguments" instead of "operands"

An operator is unary if it has a single operand. For example, the unary
negation "-" reverses the sign of the number.
An operator is binary if it has two operands. The same minus exists in the
binary form as well.
*/

//  binary + is applied to strings, it merges (concatenates) them
let alphabets = "hello" + "John";
alert(alphabets);
alert('1' + 2); // 12
// Other arithmetic operators treat it as numbers
alert('2' -  1); // 1
alert('3' - 1); // 2
alert('6' / '3'); // 2

// Unary plus converts a single value to a number
// does not effct numbers but other types
let numb = true;
alert(+numb); // 1
let numbb = false;
alert(+numbb); // 0
// can also be done as
alert(Number(numbb))



let apples = "2";
let mangoes = "3";
alert(apples + mangoes); // 23

alert(+apples + +mangoes) // Converts to numbers so 5



let a = 1;
let b = 2;

let c = 3 - (a = b + 1);

alert( a ); // 3
alert( c ); // 0

// Remainder %
alert( 5 % 2 ); // 1 is a remainder of 5 divided by 2
alert( 8 % 3 ); // 2 is a remainder of 8 divided by 3
alert( 6 % 3 ); // 0 is a remainder of 6 divided by 3

// Exponentiation **
alert(2 ** 2); // 4 (2*2)
alert( 4 ** 2); // 16 (4*2)
alert( 2 ** 4 ); // 16 (2 * 2 * 2 * 2)

alert( 4 ** (1/2) );
alert( 8 ** (1/3) );

// Increment and Decrement
let counter = 3;
counter--; // counter = counter - 1
alert(counter);
counter++; // counter = counter + 1
alert(counter);

alert(++counter);
alert(counter++);
alert(--counter);


// Birtwise operators
/*
And (&)
OR (|)
NOT (~)
XOR (^)
LEFT SHIFT ( << )
RIGHT SHIFT ( >> )
ZERO-FILL RIGHT SHIFT ( >>> )
*/

// MODIFY IN PLACE
let n = 2;
n += 5; // now n = 7 (same as n = n + 5)
n *= 2; // now n = 14 (same as n = n * 2)

alert( n ); // 14

let z = 2
n *= 5 + 2
alert(n); // 14

// COMMA
let a = (1 + 2, 4 + 4);

alert( a ); // 8 (the result of 4 + 4)
