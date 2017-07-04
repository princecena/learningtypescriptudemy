namespace Understandingtypescriptcompiler {

    let myName : string = "Max";
    let myAge : number = 27;

    //myName = 30; //this assignment will give error but still compile as this is default typescript behaviour
    // We can override this behaviour by "noEmitOnError" : true in tsconfig.json

    //"sourceMap" : true in in tsconfig.json generates the js.map also which we can see in the Sources tab in the browser
    // and also get access to the ts file in browser and then place breakpoints for debugging

    // "noImplicitAny": true - Raise error on expressions and declarations with an implied 'any' type.
    // It means if we set "noImplicitAny": true and then does not 'any' type explicitly, it will raise error.
    let anything;
    anything = 12;

    ///////////////////////////////////////////////////////////////////////////////////////////
    //Compiler Improvements in TypeScript 2.0
    ///////////////////////////////////////////////////////////////////////////////////////////
    
    function controlMe(isTrue: boolean, somethingElse: boolean) {
        let result: number;
        if (isTrue) {
            result = 12; //this might result in error if we set strictNullChecks to true in tsconfig.json as it is of type null implicitly
        }
        result = 33;//Without this command, it will give an error as result was never initialized beofre returing.
        return result;
    }
    //In the above function, we have also used somethingElse as an argument, but we never used. 
    //By default, we never get an error, but if we set 'noUnusedParameters': true, we will get an error.

}
