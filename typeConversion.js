//////////////////
//  JavaScript Basics - Type Conversion
//////////////////

// block scoping to allow redeclaration of someVar in other files
{
    let someVar;

    // Number to String
    someVar = String(5+5);
    // Bool to String
    someVar = String(true);
    // Date to String
    someVar = String(new Date());
    //Array to String
    someVar = String([1,2,3,4]);
    // toString() 
    someVar = (5).toString();
    someVar = (true).toString();
    someVar = true.toString();

    console.log(someVar);
    console.log(typeof someVar);
    console.log(String(someVar).length);

    // String to Number
    someVar = Number('5');
    // Bool to Number
    someVar = Number(true); // 1
    someVar = Number(false); // 0
    // Null to Number
    someVar = Number(null); // 0
    // NaN
    someVar = Number('hello'); 
    someVar = Number([1,2,3]);
    // parse[Int,Float](x)
    someVar = parseInt('345.12'); //345

    console.log(someVar);
    console.log(typeof someVar);
    console.log(someVar.toFixed(2));
}