namespace TypeScriptAndES6 {

    // let and const
    console.log("LET AND CONST");
    let variable = "Test"; //let keyword creates a block scoped variable and var keyword creates a global scope variable
    console.log(variable);
    variable = "Another value";
    console.log(variable);
    
    //const variables cannot be changed
    const maxLevels = 100;
    console.log(maxLevels);
    
    //Block Scope
    function reset() {
      let variable = null;
      console.log(variable); //prints null
    }
    reset();
    console.log(variable); //prints "Another value"
    
    //Arrow Functions
    console.log("ARROW FUNCTIONS");
    const addNumbers = function(number1: number, number2: number): number {
        return number1 + number2;
    }
    console.log(addNumbers(10,3));
    
    const multiplyNumbers = (number1: number, number2: number) : number => number1 * number2;
    console.log(multiplyNumbers(10,3));
    
    const greet = () => {
        console.log("Hello!");
    };
    greet();
    
    const greetFriend = (friend: any) => console.log(friend);
    greetFriend("Manu");
    
    //Default parameters
    console.log("DEFAULT PARAMETERS");
    const countdown = (start: number = 10, end: number = start - 5) : void => {
        while(start > 0) {
            start--;
        }
        console.log("Done!",start);
    }
    countdown(10);
    
    
    //Rest and Spread Operators denoted by ...
    console.log("REST & SPREAD");
    const numbers = [1, 10, 99, -5];
    console.log(Math.max(33,99,10,-3)); // max function accepts list of numbers
    console.log(Math.max(...numbers)); //...spread operator changes an array to a list of numbers here.In a function call, it acts as a spread operator
    
    function makeArray(...args: number[]) {  //we accept a list of numbers in args and we want to turn it into array
        return args; //...rest operator converts the list to an array
    }
    console.log(makeArray(1,2,6));
    
    ///////////////////////////////////////////////////////////////////////////////////////////
    // Destructuring
    ///////////////////////////////////////////////////////////////////////////////////////////
    
    console.log("DESTRUCTURING");
    const myHobbies = ["Cooking","Sports"];
    //const hobby1 = myHobbies[1];
    //const hobby2 = myHobbies[2];
    const [hobby1,hobby2] = myHobbies; //Instead of const hobby1 = myHobbies[1]; and const hobby2 = myHobbies[2];
    console.log(hobby1,hobby2);
    
    const userDat = {userName: "Prince", age : 30};
    //const userName = userDat.userName;
    //const age = userDat.age;
    const {userName: myname ,age: myAge} = userDat;
    console.log(myname,myAge);
    
    
    ///////////////////////////////////////////////////////////////////////////////////////////
    // Template Literals ``
    ///////////////////////////////////////////////////////////////////////////////////////////
    
    const userName2 = "Prince";
    const greeting = `This is a heading
    I am ${userName2}`;
    console.log(greeting);
    
    //Symbols, Iterators and Generators are part of ES6 and supported by TypeScript
    
}

