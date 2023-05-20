// Q: - Can we go over how and where we need to apply rules for making our websites compatible for different screen sizes? 
    // A: Two things to be mindful of this weekend:
// 1) I want you all to try avoid using absolute measurements, and begin using more relative measurements. 
    // Relative measurements:
        // %
        // em
        // rem
// 2) I want you all to start thinking about your website in the context of either flexboxes or using CSS grid. 

// Q: - Why would you ever use an object over an array given that it is more difficult to create? 
// A: 
    // Objects are meant to be used to label data. 
    // Arrays are meant to be group unorganized and unlabeled data. 

// let studentNames = ["Anthony", "Sarah", "Phoenix", "Rachel"]

// let instructorsOf2304 = {
//     leadInstructorOne: "Elle Oshiro", 
//     leadInstructorTwo: "Ed Haddican",
//     mentor: "Tri Le"
// }

// OBJECTS REVIEW
    // Creating an object
// let talkingMeowth = {
//     name: "Meowth",
//     age: 20,
//     isHero: true, 
//     friends: ["Jessie", "James"],
//     hasChildren: undefined
// }

    // Object notation
        // Dot notation
            // Skeleton Syntax:
                // nameOfYourObj.nameOfTheKey
            // Note: Dot notation will ALWAYS look for the key name that matches exactly what you wrote after the dot (aka period). 
        // Bracket notation
            // Skeleton Syntax:
                // nameOfYourObj["nameOfYourKey"]
            // Note: Bracket notation CAN use variables that are storing key names. 

// let theKeyImLookingFor = "name";

// DOT NOTATION
// console.log(talkingMeowth.name)
// Both console.logs below won't work because the key name after the period does not exist in the object. 
// console.log(talkingMeowth.theKeyImLookingFor) 
// console.log(talkingMeowth.someVariable)

// BRACKET NOTATION
// console.log(talkingMeowth["name"])

// console.log(talkingMeowth[theKeyImLookingFor])

// OBJECT METHODS (AKA FUNCTIONS ON AN OBJECT)
let talkingMeowth = {
    name: "Meowth",
    age: 20,
    isHero: true, 
    friends: ["Jessie", "James"],
    hasChildren: undefined,
    sayCatchphrase: function () {
        console.log("Team Rocket is blasting off again!")
    },
    haveBirthday: undefined
}

// Skeleton Syntax for an object method:
    // Example:
    // Dot notation first:
        // nameOfYourObject.nameOfTheObjMethod()
    // Bracket notation first:
        // Skeleton Syntax:
            // nameOfYourObject["nameOfYourMethod"]()

    // Dot notation
// talkingMeowth.sayCatchphrase()

    // Bracket notation
// talkingMeowth["sayCatchphrase"]()

    // Sub-Point: How do you declare a function outside of an object, and then put the function into the object?

// function haveBirthday() {
//     talkingMeowth.age = talkingMeowth.age + 1;
//     console.log(talkingMeowth.age)
// }

// console.log(talkingMeowth)

// talkingMeowth.haveBirthday = haveBirthday 

// console.log(talkingMeowth)


// THE 'THIS' KEYWORD
    // Definition: This, in coding, is a contextual keyword that refers to the context of the object around it. 

// let newPhoneSpecs = {
//     versionNum: 14,
//     screenSize: 6,
//     company: "Apple",
//     getPhoneSpecs: function () {
//         console.log({
//             versionNum: newPhoneSpecs.versionNum,
//             screenSize: this.screenSize,
//             company: this.company
//         })
//     }
// }

// let superBasicObj = {
//     getBasicObjSpecs: function() {
//         console.log(this)
//     }
// }

// // newPhoneSpecs.getPhoneSpecs()
// superBasicObj.getBasicObjSpecs()

// NEW JS MATERIAL: MULTIDIMENSIONAL ARRAYS (AKA 3D ARRAYS)

// For Context: 2d arrays (AKA single-dimensional arrays) --> 
let singleDimArray = [1, 2, 3, 4, 5];

let multiDimArray = [
    [1, 2],
    [3],
    [4, 5]
]

let partyRSVPs = [
    ["Elle", "Baby Sister"],
    ["Bob"],
    ["Mom", "Dad"]
]

// console.log(partyRSVPs[0])
// console.log(partyRSVPs[2])
// console.log(partyRSVPs[1])


// partyRSVPs[0]
// ===
// ["Elle", "Baby Sister"]

// console.log(partyRSVPs[0][1])
console.log(partyRSVPs[2][0])