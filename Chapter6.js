// toString
// We can use it to convert types to string
let userName = true;
alert(typeof userName);

userName = String(userName); // will become "true"
alert(typeof userName);

// toNumber
let abc = "123";
alert(typeof abc);

abc = Number(abc);
alert(typeof abc);

let value = true;
alert(typeof value);

value = Number(value);
alert(typeof value);

// Some examples of toNumber
alert(Number("   123    "));
alert(Number("123z"));
alert(Number(true));
alert(Number(false));
alert(Number(undefined));
alert(Number(NaN));
alert(Number(null));
alert(1 + '2'); // 12
alert('1' + 2); // 12

// toBoolean

alert(Boolean(1)); // true
alert(Boolean(0)); // fasle
alert(Boolean("hello")); // true
alert(Boolean("")); // false
alert(Boolean("0")); // true
alert(Boolean(" ")); // true
alert(Boolean(NaN)); // false
