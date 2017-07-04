namespace Understandingtypescriptcompiler {

    let myName : string = "Max";
    let myAge : number = 27;

    myName = 30; //this assignment will give error but still compile as this is default typescript behaviour
    // We can override this behaviour by "noEmitOnError" : true in tsconfig.json

    //"sourceMap" : true in in tsconfig.json generates the js.map also which we can see in the Sources tab in the browser
    // and also get access to the ts file in browser and then place breakpoints for debugging

}
