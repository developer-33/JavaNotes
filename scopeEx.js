// Global Scope --> Like the US federal government, it oversees EVERYTHING in its territory. 
    // LSS: Global scope refers to ALL JS variables and functions that are available in a given JS file. 

let globalVarA = "A"
let globalVarB = "B"
let ioadmovaivmos = "C"
console.log(ioadmovaivmos)
if (globalVarA === "A") {
    console.log("blah blah")
}



// FUNCTIONAL SCOPE
// function functionalScopeExample(parameterOne) {
//     let funcScopeVar = "I'm a funky functional scope var"
//     console.log(funcScopeVar)
// }


// function texas () {
//     console.log("Everythings bigger in Texas")
//     let bigTexasThing = "Im in Texas"
// }



// console.log(funcScopeVar)


// BLOCK SCOPE 
    // Def --> A whole lot like city governments within a country's individual states
    // Def --> Technically, block scope refers to any variables or functions that are contained within any pair of curly brackets (think about any pair of curly brackets like the borders of a city).
// let globalVarC = "C"
// let globalVarD = "D"

// if (globalVarC === "C") {
//     console.log("We have access to this var.")

//     let blockScopeVar = "Im a block scope var"

//     console.log(blockScopeVar)
// }

// function blockScopeExaFunc () {
//     if (globalVarC === "C") {
//         console.log("If statement was triggered")
//         console.log(globalVarC)
//         let blockScopeVarInIf = "I am in an if statement"
//         console.log(blockScopeVarInIf)

//     }
// }

// anotherExampleFunc() 
// blockScopeExaFunc() 

// EXAMPLE OF FUNCTIONS EXISTING IN GLOBAL SCOPE
// function simpleFunc() {
//     console.log("Hi")
// }

// function anotherFunc() {
//     simpleFunc()
// }

// anotherFunc() 

// EXAMPLE OF A FUNCTION INSIDE OF A FUNCTION
// function inceptionFunc() {

//     function leoDicaprioDreamJump() {
//         console.log("I am Leo Dicaprio")
//     }

//     leoDicaprioDreamJump() 
// }

// inceptionFunc() 

// PRACTICAL EXAMPLE

// function findSumOfArray (arrOfNums) {
//     let sumTracker = 0; 

//     for (let i = 0; i < arrOfNums.length; i++) {
//         let currNum = arrOfNums[i];

//         sumTracker = sumTracker + currNum
//     }

//     return sumTracker
// }

// findSumOfArray([1, 2, 3])