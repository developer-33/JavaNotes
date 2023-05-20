// - Can you go over all the parts of a for loop again? I still have a hard time understanding what's going on. 

    // Skeleton Syntax:
        // Example:
    // for (initializer; logical condition (how long should we keep running?); what to do on each loop iteration) {
        // 
    // }

// let sampleArr = ["a", "b", "c", "d", "e"];

// for (let currentIndex = 3; currentIndex < sampleArr.length; currentIndex++) {
//     // Here we put whatever we want to do over and over again. 
// }

// let walgreensLine = ["bob", "jim", "pam", "michael", "elle"]

// for (let currentCustomerNumber = 0; currentCustomerNumber < walgreensLine.length; currentCustomerNumber++) {
//     console.log(`We are now serving customer name: ${walgreensLine[currentCustomerNumber]}`)

//     walgreensLine[currentCustomerNumber] = "Customer has been served."

//     console.log(walgreensLine)
// }


// - Let's say I want to delete stuff from an object, how do I do that? 

// let ellesPuppy = {
//     name: "Yuki",
//     age: "3 months",
//     hasBeenVaxxed: true,
// };

// // The object "delete" keyword
//     // Definition: Deletes a key-value pair from a given object
//     // Skeleton Syntax (you can use either dot or bracket object notation):
//         // delete nameOfYourObject.nameOfKey
//         // delete nameOfYourObject["nameOfKey"]
// console.log("Before: ", ellesPuppy)

// delete ellesPuppy.keepsHerMomUpAllNight

// console.log("After: ", ellesPuppy)


// Implicit Coercion in If Statements
// let ellesFridayPlans = {
//     morningPlans: "work and teaching",
//     afternoonPlans: "napping bc of puppy :(",
//     eveningPlans: "",
//     isItRaining: 0,
//     isElleSleepy: true
// }


// This is the same...
// if (ellesFridayPlans.eveningPlans) {

// }

// As this!
// if (true) {

// }


// - Looping 
        // - through an object itself


        let puppyBills = {
            vetVisit: 150,
            puppyFood: 25,
            puppyChewtoys: 10,
            a: "lorem ipsum",
            b: "lorem ipsum",
            c: "lorem ipsum"
        }
        
        // Skeleton Syntax:
            // for (let placeholderNameForKeys in yourObjectName) {}
        // let pieceOfPaper = 0;
        
        // for (let keyName in puppyBills) {
        //     // console.log(puppyBills[keyName])
        
        //     console.log(keyName)
        
        //     if (keyName.length > 5) {
        //         pieceOfPaper = pieceOfPaper + puppyBills[keyName]
        
        //         console.log(pieceOfPaper)
        
        //         if (keyName === "vetVisit") {
        //             console.log("My poor bank account!")
        //         }
        
        //     } else {
        //         console.log("I am not a valid integer value")
        //     }
         
            
        // }
        
        
                // - through arrays of objects (i.e. finding sum of a bunch of objects' values)
        
        let arrOfObjs = [
            {
                itemName: "eggs",
                price: 7,
                arr: [1, 2, 3]
            },
            {
                itemName: "broccoli",
                price: 2
            },
            {
                itemName: "bottled water",
                price: 9
            }
        ]
        
        let sumTracker = 0;
        
        for (let itemIndexNum = 0; itemIndexNum < arrOfObjs.length; itemIndexNum++) {
            // First, I take out the current grocery item from my grocery cart
            let currentItem = arrOfObjs[0] 
        
            // Then, I look at the price tag
            let currentItemValue = currentItem.price
        
            // Lastly, I pull out my phone and add the price to the calculator. 
            sumTracker = sumTracker + currentItemValue
        }
        
        
        let myObj = {
            value: 1
        }
        
        console.log(myObj.value)