"use strict";
var UsingTypeForBetterCode;
(function (UsingTypeForBetterCode) {
    // string
    var myName = 'Max';
    // myName = 28;
    // number
    var myAge = 27;
    // myAge = 'Max';
    // boolean
    var hasHobbies = false;
    // hasHobbies = 1;
    // assign types
    var myRealAge;
    myRealAge = 27;
    // myRealAge = '27';
    // array
    var hobbies = ["Cooking", "Sports"];
    hobbies = [100];
    // hobbies = 100;
    // tuples
    var address = ["Superstreet", 99];
    // enum
    var Color;
    (function (Color) {
        Color[Color["Gray"] = 0] = "Gray";
        Color[Color["Green"] = 100] = "Green";
        Color[Color["Blue"] = 2] = "Blue"; // 2
    })(Color || (Color = {}));
    var myColor = Color.Blue;
    console.log(myColor);
    // any
    var car = "BMW";
    console.log(car);
    car = { brand: "BMW", series: 3 };
    console.log(car);
    // functions
    function returnMyName() {
        return myName;
    }
    console.log(returnMyName());
    // void
    function sayHello() {
        console.log("Hello!");
    }
    // argument types
    function multiply(value1, value2) {
        return value1 * value2;
    }
    // console.log(multiply(2, 'Max'));
    console.log(multiply(10, 2));
    // function types
    var myMultiply;
    // myMultiply = sayHello;
    // myMultiply();
    myMultiply = multiply;
    console.log(myMultiply(5, 2));
    // objects
    var userData = {
        name: "Max",
        age: 27
    };
    // userData = {
    //     a: "Hello",
    //     b: 22
    // };
    // complex object
    var complex = {
        data: [100, 3.99, 10],
        output: function (all) {
            return this.data;
        }
    };
    var complex2 = {
        data: [100, 3.99, 10],
        output: function (all) {
            return this.data;
        }
    };
    // union types
    var myRealRealAge = 27;
    myRealRealAge = "27";
    // myRealRealAge = true;
    // check types
    var finalValue = 30;
    if (typeof finalValue == "number") {
        console.log("Final value is a number");
    }
    //never type - added with Typescript 2.0
    function neverReturns() {
        throw new Error('An Error!');
    }
    //Nullable types - added with Typescript 2.0 
    var canBeNull = 12;
    canBeNull = null; //if we set "strictNullChecks": true in tsconfig.json, it will give error that null cannot be assigned to number type
    var canAlsoBeNull; //it's value is undefined as it is not initialized
    canAlsoBeNull = null;
    var canThisBeAny = null;
    canThisBeAny = 12; //will give an error as we are assigning number to null type id we have set "strictNullChecks": true in tsconfig.json
})(UsingTypeForBetterCode || (UsingTypeForBetterCode = {}));
