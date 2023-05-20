// May 15th, 23 JavaScript

// - Arrays: --> Store groups of unlabeled data
//     - Accessing Arrays and their Data
// let studentNames = ["Anthony", "Phoenix", "Sarah", "Jessie"]
// console.log(studentNames[1]);
//     - Multidimensional arrays (3d arrays)
//          - Nested arrays are the arrays INSIDE OF a 3d array
// let rsvpGroups = [
//     ["Bob", "Jan"], 
//     [
//         "Jim", 
//         "Pam", 
//         ["Baby One", "Baby Two"]
//     ], 
//     ["Dwight", "Michael"] 
// ]

// console.log(rsvpGroups[1][2][0])
//     - Common Methods
// - Loops
//     - for
//     - while
//     - looping through 3d arrays
// let gameOfThrones= [
//     ["Arya", "Jon Snow", "Sansa"],
//     ["Cersei", "Jaime"],
//     ["Stannis", "Renly"]
// ]

// function loopThrough3dArray (pieceOfPaper) {
//     // let anotherPieceOfPaper = [];

//     // 1) I need to do something over and over again on the piece of paper
//     for (let sectionNumber = 0; sectionNumber < pieceOfPaper.length; sectionNumber++) {
//         // Pre-step: Sometime it's helpful to label the current section we're looking at 
//         let currentSection = pieceOfPaper[sectionNumber];
//         // i: I want to look at each individual section on the piece of paper one by one.
//         // ii: Once I am looking at the current individual section, I want to do something over and over again, again: 
//         for (let currentSectionItemIdx = 0; currentSectionItemIdx < currentSection.length; currentSectionItemIdx++) {
//             // a: Now that I am looking at the current individual section, I want to look at the current numbered item on that section. 
//             let theCurrentSectionItem = currentSection[currentSectionItemIdx];
//             // b: Once I have seen that individual numbered item, I want to write that name down on another piece of paper.
//             console.log(theCurrentSectionItem);
//             // anotherPieceOfPaper.push(theCurrentSectionItem)
//         }
//     }
// }

// loopThrough3dArray(gameOfThrones)
// - Objects --> Store groups of labeled data

// New Content: 
    // .splice Array Method
        // Sibling method of the .slice Array Method 
        // Definition: .splice will mutate, or permanently change, an existing array to either delete, replace, or both some elements inside of that array. 
        // Skeleton Syntax:
            // Example:
                // nameOfYourArray.splice(startingIndex, numOfElementsToDelete, elementOneToReplaceWith, elementTwoToReplaceWith)
                // Parameters Necessary:
                    // 1) Your starting index --> Where do you want to begin splicing? 
                    // 2) How many to delete? --> How many elements shouild we splice out? 
                    // 3) What elements should I replace the deleted elements with? --> You can list out as many values as you like and JavaScript .splice will put all those elements at that starting index. 
// let primaryColors = ["red", "yellow", "blue"]

// console.log(primaryColors)

// primaryColors.splice(1, 1, "green", "purple", "blue", "orange")

// console.log(primaryColors)


    // Spread operator --> 
        // Definition: This operator allows us to "spread out", or list out, every individual element inside of an array 
            // Defined by 3 periods followed by the name of an array
        // Why? the most common usage for the spread operator is usually when we want to take the contents of one array, and put them inside of another array.
        // Skeleton Syntax:
            // Example:
                // let sampleArray = [1, 2, 3]
                // Spread operator shown here:
                    // let newArray = [...sampleArray]

// let momsCabinetDrawer = ["ring", "perfume", "towels"]
// let shelfDrawer = [...momsCabinetDrawer]

// console.log("momsCabinetDrawer: ", momsCabinetDrawer)
// console.log("momsShelfDrawer: ", shelfDrawer)

// let randomStuffDrawer = ["random receipts", "dog treats", ...momsCabinetDrawer];

// console.log("momsCabinetDrawer: ", momsCabinetDrawer)
// console.log("randomStuffDrawer :", randomStuffDrawer)

    // Array Destructuring --> Allows us to label individual items inside of an array 
        // Skeleton Syntax:
            // let [nameOfFirstElement, nameOfSecondElement...] = theExistingArray;
            let studentIdNumbers = [841910, 8193139, 3899, 9130]

            const [jessie, sarahS, elle, rachel] = studentIdNumbers;
            
            const sampleArr = [1, 2, 3]
            let [sarah] = sampleArr
            
            // This would be another way to write array destructuring, but using an old fashioned array notation type of way: 
            // const sarahS = studentIdNumbers[0] // 3109
            // const phoenix = studentIdNumbers[1] //351
            // const jessie = studentIdNumbers[2]