const helloWorld = function() {
    console.log("Hello World!");
}

function receivesAFunction(callbackFunction) {
    callbackFunction();
}

function returnsANamedFunction() {
    return helloWorld;
}

function returnsAnAnonymousFunction() {
    return function() {
        console.log("Hello World!");
    }
}

