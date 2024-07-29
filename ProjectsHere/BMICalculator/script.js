const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const height = parseFloat(document.querySelector("#height").value);
  const weight = parseFloat(document.querySelector("#weight").value);
  const result = document.querySelector("#results");
  if (height === "" || height < 0 || isNaN(height)) {
    result.innerHTML = `Please enter a valid height ${height}`;
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    result.innerHTML = `Please enter a valid weight ${weight}`;
  } else {
    const bmi = (weight / (height * height)).toFixed(2);
    result.innerHTML = `<span>${bmi}</span>`;
  }
});

// So, in your case, the form submission event listener (addEventListener('submit', function(event) { ... })) is triggered when Enter is pressed while focused on an input field inside the form, even though there isn't a visible submit button. This behavior is part of how HTML forms are designed to function by default, allowing users to interact with forms efficiently using keyboard input alone if necessary.

/*
+++++++++++
isNaN(value);
value: The value you want to test to see if it is NaN.
Return Value:

Returns true if the value is NaN.
Returns false if the value is a number or can be converted to a number.

isNaN(NaN);        // true
isNaN(123);        // false
isNaN("123");      // false (string "123" can be converted to number 123)
isNaN("abc");      // true (string "abc" cannot be converted to a number)
isNaN(true);       // false (true is converted to 1)
isNaN(undefined);  // true

++++++++++++++++++++
Rounding: The .toFixed() method rounds the number to the nearest value based on the specified number of decimal places.
String Conversion: It then converts the rounded number to a string with the specified number of decimal places.

*/

/* +++++++++++++++++++++++++++
`parseInt` and `parseFloat` are JavaScript functions used to convert strings into numbers. They are useful when you need to extract numerical values from strings, such as when reading user input from a form.

### `parseInt`

The `parseInt` function parses a string and returns an integer. It takes two arguments:
1. The string to parse.
2. The radix (optional) that represents the base of the number in the string. The default radix is 10 for decimal numbers.

Here's an example:

```javascript
const num1 = parseInt("10");  // Returns 10 (integer)
const num2 = parseInt("10.5");  // Returns 10 (truncates the decimal part)
const num3 = parseInt("10", 10);  // Returns 10 (decimal base 10)
const num4 = parseInt("10", 16);  // Returns 16 (hexadecimal base 16)
const num5 = parseInt("abc");  // Returns NaN (not a number, because "abc" cannot be parsed as an integer)
```

### `parseFloat`

The `parseFloat` function parses a string and returns a floating-point number (a number with a decimal point). It only takes one argument, the string to parse.

Here's an example:

```javascript
const num1 = parseFloat("10");  // Returns 10 (floating-point number)
const num2 = parseFloat("10.5");  // Returns 10.5 (retains the decimal part)
const num3 = parseFloat("10.56abc");  // Returns 10.56 (parses up to the first non-numeric character)
const num4 = parseFloat("abc");  // Returns NaN (not a number, because "abc" cannot be parsed as a number)
```

### Key Differences

1. **Return Type:**
   - `parseInt` returns an integer by removing any fractional part.
   - `parseFloat` returns a floating-point number, keeping the fractional part if it exists.

2. **Parsing Rules:**
   - `parseInt` stops parsing at the first non-digit character, whereas `parseFloat` parses the entire string until it encounters an invalid character for a number.
   - `parseInt` can take a radix to specify the base of the number system (e.g., binary, octal, decimal, hexadecimal), while `parseFloat` always interprets the number as a decimal.

3. **Usage:**
   - Use `parseInt` when you need to work with whole numbers.
   - Use `parseFloat` when you need to work with numbers that may have a fractional part.

### Examples

```javascript
const height = parseInt("1.524");  // Returns 1 (incorrect if height is 1.524 meters)
const weight = parseFloat("60.5");  // Returns 60.5 (correct if weight is 60.5 kg)

console.log(parseInt("42px"));  // Outputs: 42
console.log(parseFloat("42.42px"));  // Outputs: 42.42
```

Using `parseFloat` ensures that you retain the decimal precision necessary for calculations like BMI, where fractional values are important.


// Decimal (Base 10)
console.log(parseInt("42", 10));  // Outputs: 42

// Binary (Base 2)
console.log(parseInt("1010", 2));  // Outputs: 10

// Octal (Base 8)
console.log(parseInt("52", 8));  // Outputs: 42

// Hexadecimal (Base 16)
console.log(parseInt("2A", 16));  // Outputs: 42

// Default (Base 10)
console.log(parseInt("42"));  // Outputs: 42

"parseInt always returns the parsed number as a decimal (base 10) integer, regardless of the radix used for parsing the input string. The radix only determines how the input string is interpreted, not the base of the output."
*/
