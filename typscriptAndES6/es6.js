"use strict";
var TypeScriptAndES6;
(function (TypeScriptAndES6) {
    // let and const
    console.log("LET AND CONST");
    var variable = "Test"; //let keyword creates a block scoped variable and var keyword creates a global scope variable
    console.log(variable);
    variable = "Another value";
    console.log(variable);
    //const variables cannot be changed
    var maxLevels = 100;
    console.log(maxLevels);
    //Block Scope
    function reset() {
        var variable = null;
        console.log(variable); //prints null
    }
    reset();
    console.log(variable); //prints "Another value"
    //Arrow Functions
    console.log("ARROW FUNCTIONS");
    var addNumbers = function (number1, number2) {
        return number1 + number2;
    };
    console.log(addNumbers(10, 3));
    var multiplyNumbers = function (number1, number2) { return number1 * number2; };
    console.log(multiplyNumbers(10, 3));
    var greet = function () {
        console.log("Hello!");
    };
    greet();
    var greetFriend = function (friend) { return console.log(friend); };
    greetFriend("Manu");
    //Default parameters
    console.log("DEFAULT PARAMETERS");
    var countdown = function (start, end) {
        if (start === void 0) { start = 10; }
        if (end === void 0) { end = start - 5; }
        while (start > 0) {
            start--;
        }
        console.log("Done!", start);
    };
    countdown(10);
    //Rest and Spread Operators denoted by ...
    console.log("REST & SPREAD");
    var numbers = [1, 10, 99, -5];
    console.log(Math.max(33, 99, 10, -3)); // max function accepts list of numbers
    console.log(Math.max.apply(Math, numbers)); //...spread operator changes an array to a list of numbers here.In a function call, it acts as a spread operator
    function makeArray() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return args; //...rest operator converts the list to an array
    }
    console.log(makeArray(1, 2, 6));
    ///////////////////////////////////////////////////////////////////////////////////////////
    // Destructuring
    ///////////////////////////////////////////////////////////////////////////////////////////
    console.log("DESTRUCTURING");
    var myHobbies = ["Cooking", "Sports"];
    //const hobby1 = myHobbies[1];
    //const hobby2 = myHobbies[2];
    var hobby1 = myHobbies[0], hobby2 = myHobbies[1]; //Instead of const hobby1 = myHobbies[1]; and const hobby2 = myHobbies[2];
    console.log(hobby1, hobby2);
    var userDat = { userName: "Prince", age: 30 };
    //const userName = userDat.userName;
    //const age = userDat.age;
    var myname = userDat.userName, myAge = userDat.age;
    console.log(myname, myAge);
    ///////////////////////////////////////////////////////////////////////////////////////////
    // Template Literals ``
    ///////////////////////////////////////////////////////////////////////////////////////////
    var userName2 = "Prince";
    var greeting = "This is a heading\n    I am " + userName2;
    console.log(greeting);
    //Symbols, Iterators and Generators are part of ES6 and supported by TypeScript
})(TypeScriptAndES6 || (TypeScriptAndES6 = {}));
