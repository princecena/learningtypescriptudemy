"use strict";
var TypeScriptAndESExercise;
(function (TypeScriptAndESExercise) {
    // Exercise 1 - As Arrow Function
    var double = function (value) { return value * 2; };
    console.log(double(10));
    // Exercise 2 - Default Params
    var greet1 = function (name) {
        if (name === void 0) { name = "Max"; }
        console.log("Hello " + name);
    };
    greet1();
    greet1("Anna");
    // Exercise 3 - Spread Operator
    var numbers1 = [-3, 33, 38, 5];
    console.log(Math.min.apply(Math, numbers1));
    // Exercise 4 - Spread Operator
    var newArray = [66, 2];
    newArray.push.apply(newArray, numbers1);
    console.log(newArray);
    // Exercise 5 - Destructuring Arrays
    var testResult = [1.28, 4.33, 2.29];
    var result1 = testResult[0], result2 = testResult[1], result3 = testResult[2];
    console.log(result1, result2, result3);
    // Exercise 6 - Destructuring Objects
    var scientist = { firstName: "Will", experience: 12 };
    var firstName = scientist.firstName, experience = scientist.experience;
    console.log(firstName, experience);
})(TypeScriptAndESExercise || (TypeScriptAndESExercise = {}));
