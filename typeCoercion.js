//////////////////
//  JavaScript Basics - Type Coercion
//////////////////

// block scoping to allow redeclaration of val in other files
{
    let someVar;

    // Bool to Number
    someVar = false + true; // 1
    console.log(false + true);
    // Number to Bool
    if (0) {
        console.log('This will not hit');
    }
    else {
        console.log('0 coerced to false');
    }
    if (-1) {
        console.log('every number but 0 coerces to true');
    }

}