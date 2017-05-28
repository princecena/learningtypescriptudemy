console.log("Hello World!");

//tsc --init and tsc then to compile typescript to javascript
//npm start to start the lite server

//string
let myName: string = "Prince";

//array
let hobbies:any[] = ["Cooking","Sports"];
console.log(hobbies[0]);


//tuples- arrays with mixed types-order of declaration is important in tuple, id expressing explicitly
let address: [string,number] = ["SuperStreet",99];

//Enums are a feature to make numbers more expressive
enum Color {
    Gray, //0
    Green=100, //1
    Blue = 2 //2
};
let myColor: Color = Color.Green;
console.log(myColor);

// Any Type
let car: any = "BMW";
console.log(car);
car = { brand : "BMW", series : 3 };
console.log(car);

//functions
function returnMyName(): string {
    return myName;
}

function sayHello(): void {
    console.log("Hello");
}
console.log(returnMyName());

//argument types
function multiply(value1: number, value2: number): number {
    return value1 * value2;
}
console.log(multiply(2,3));

//function types: functions are type on their own
let myMultiply: (val1:number, val2: number) => number;
//myMultiply = sayHello;
//myMultiply();
myMultiply = multiply;
console.log(myMultiply(2,5));

//objects - names do matter in the objects
let userData: { name:string, age:number } = {
    name : "Prince",
    age : 30
};
userData = {
    name: "Max",
    age: 23
}

//complex Object- all types in one
let complex: {data: number[], output: (all: boolean) => number[]} = {
    data: [100, 3.99, 10],

    output: function (all: boolean): number[] {
        return this.data;
    }
}

let complex2: {data: number[], output: (all: boolean) => number[]} = {
    data: [100, 3.99, 10],

    output: function (all: boolean): number[] {
        return this.data;
    }
}


///////////////////////////////////////////////////////////////////////////////////////////
//Type Alias
///////////////////////////////////////////////////////////////////////////////////////////

type Complex = {data: number[], output: (all: boolean) => number[]};

let complex3: Complex = {
    data: [100, 3.99, 10],

    output: function (all: boolean): number[] {
        return this.data;
    }
}

///////////////////////////////////////////////////////////////////////////////////////////
//Union Types
///////////////////////////////////////////////////////////////////////////////////////////
//They help us to define more than one types for a variable..in case there is a scenario that
//one variable can be of type string or number...but cannot be of type boolean..then in that ccase..
// instead of declaring the type any...we can use union types

let myRealRealAge : string | number = 27;
myRealRealAge = "27";

///////////////////////////////////////////////////////////////////////////////////////////
//Checking Types
///////////////////////////////////////////////////////////////////////////////////////////
let finalValue = "A String"
if(typeof finalValue == "string") {
    console.log("The value is of type string");
}

///////////////////////////////////////////////////////////////////////////////////////////
//never(in TypeScript 2.0)
///////////////////////////////////////////////////////////////////////////////////////////
function neverReturns(): never {
    throw new Error("An Error!");
}

///////////////////////////////////////////////////////////////////////////////////////////
//Nullable Types(in TypeScript 2.0)
//"strictNullChecks": true,              /* Enable strict null checks. */
///////////////////////////////////////////////////////////////////////////////////////////
let canBeNull = "12";
canBeNull = null;
let canAlsoBeNull;
canAlsoBeNull = null;


///////////////////////////////////////////////////////////////////////////////////////////
//Compiler Improvements in TypeScript 2.0
///////////////////////////////////////////////////////////////////////////////////////////

function controlMe(isTrue: boolean, somethingElse: boolean) {
    let result: number;
    if (isTrue) {
        result = 12; //this might result in error if we set strictNullChecks to true in tsconfig.json as it is of type null implicitly
    }
    return result;
}