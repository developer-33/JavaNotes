// Intermediate Array Looping Methods
    // Callback Functions --> 
        // Def: A callback function is a function used inside of another function as an argument value. 

        function add(valA, valB) {
            return valA + valB
        };
        
        function subtract(valA, valB) {
            return valA - valB
        }
        
        function basicCalculator(valA, valB, mathOperation) {
            let sumValue = mathOperation(valA, valB)
            return sumValue
        }
        
        console.log(basicCalculator(1, 2, subtract))
        console.log(basicCalculator(1, 2, add))
        
            // forEach --> 
                // Def: This method will run a given callback function ONCE for each element in an array. 
                // Skeleton Syntax:
                        // Option 1 If you already declared your function: 
                    // nameOfYourArray.forEach(nameOfYourCallbackFunction)
                        // Option 2 
                    // nameOfYourArray.forEach((singleParameterThatWillRepresentASingleElementInTheArray) => { // do something here...})
                // Note: the .forEach method will ALWAYS return undefined. It cannot return anything. 
                    // The most common usages is to change data, but not actually to return it. 
        
        let letterCounter = 0; 
        function stampLetter (letter) {
            console.log(`I have just stamped letter: ${letter}`)
            letterCounter = letterCounter + 1; 
            console.log("LetterCounter current count: ", letterCounter)
        }
        
        let lettersArray = ["Mr. Jones", "Mrs. Brown", "Mr. and Mrs. James"];
        
        console.log(lettersArray.forEach(stampLetter))
        lettersArray.forEach((letter) => console.log(letter))
        
        // Function expression
        // const sayHello = () => {
        //     console.log("Hello")
        // }
        
        // Parker's Deck of Cards Example
        // let emptyBox = [];
        
        // let typesOfCards = ["A", "10", "J", "Q", "K"];
        
        // function addCardToBox(typeOfCard) {
        //     emptyBox.push(typeOfCard)
        // }
        
        // typesOfCards.forEach(addCardToBox)
        
        // console.log(emptyBox)
        
            // map  
                // Def --> Like the .forEach method, the .map method will run a callback function on each individual element in a given array. 
                    // The difference between map and forEach is that map will return a whole array where the return value of the callback function gets put into a new array. 
                // Skeleton Syntax: 
                    // nameOfYourArray.map(nameOfYourCallbackFunction)
                // Note: The .map method will return (unlike forEach) an array where each element in the array will be the return output of the callback function. 
        // function addMetalPartToProduct(product) {
        //     return product + "metal part."
        // }
        
        // let productConveyorBelt = ["iphone1", "iphone2", "iphone3", "iphone4"]
        // console.log("Before: ", productConveyorBelt)
        
        // let finishedProducts = productConveyorBelt.map(addMetalPartToProduct);
        
        // console.log("After: ", finishedProducts)
        
            // filter
                // Def: The .filter method will remove all elements from an array that does not pass a certain logical test (i.e. a logical test in a callback function)
                // Skeleton Syntax:
                    // nameOfYourArray.filter(nameOfYourCallbackFunction)
        
        // function isItEven (numValue) {
        //     if (numValue % 2 === 0) {
        //         return numValue; 
        //     }
        // }
        
        // let exampleArrOfNums = [1, 2, 3, 4, 5];
        // console.log("Before: ", exampleArrOfNums)
        // let filteredArrayOfEvensOnly = exampleArrOfNums.filter(isItEven)
        // console.log("After: ", filteredArrayOfEvensOnly)