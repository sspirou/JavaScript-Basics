//////////////////
//  JavaScript Basics - Working with Strings
//////////////////

// block scoping for reuse of stringVar in other files
{
    let stringVar;

    stringVar = 'Hi, is that Tim\'s hat?' // escape single quote because whole string is wrapped in single quotes

    console.log(stringVar.toUpperCase()); // returns all caps

    console.log(stringVar.slice(0,stringVar.length - 4).concat('burrito?')); // basic slicing and concatenation of strings with built in methods

    console.log(stringVar[0]); // just the first letter

    console.log(stringVar.slice(-4)); // the last 4 characters in stringVar

    console.log('Hello, ' + stringVar.slice(4)); // build string with '+' operator

    stringVar.split(' '); // returns array of stringVar broken on spaces

    stringVar.charAt(5); // returns 5th character of stringVar

    stringVar.replace('Hi','Hello'); // replace arg1 with arg2 in stringVar and return 

    stringVar.indexOf('t'); // returns index of first occurence of 't' in stringVar

    stringVar.lastIndexOf('t'); // returns index of last occurence of 't' in stringVar

}