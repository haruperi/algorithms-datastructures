/*******************************************   Creating Arrays   ******************************/
const numArray = [1,2,3,4,5]
const numArray2 = [8,9]


/*******************************************   Insertion   ************************************/
//end
numArray.push(6)

//start
numArray.unshift(0)

//index
numArray.splice(Math.round(numArray.length/2),0,9)

/*******************************************   Deletion   ************************************/
//end
numArray.pop()

//start
numArray.shift()

//index
numArray.splice(Math.round(numArray.length/2),1)

/*******************************************   Iteration   ************************************/
//forEach() ....iteration has to explicitly go through every element
numArray.forEach(element => element*2)

//for...in ....iteration can break out of the loop
for (let number of numArray) {
    if (number === 3)
        console.log("Found : "+number)
}

/*******************************************   Helper Functions   ************************************/
// .slice ....returns a portion of an existing array without modifying the array.
// .slice() takes two parameters: the beginning index and the ending index of the array
numArray.slice(2,4)

// .splice as already seen above, can be used to add or delete index

// .concat() or more recently the spead operator is to copy one array into another
const newNumArray = [...numArray,...numArray2]

// .length to get size of array
const length = numArray.length


/*******************************************   Exercises   *****************************************/
// Problem: Given the array arr, find and return two indices of the array that add up to weight
// or return -1 if there is no combination that adds up to weight.
//For example, in an array like [1,2,3,4,5], what numbers add up to 9?
// The answers are 4 and 5, of course.

const NumsAddingTo = (array, num) => {
    for (let i = 0; i < array.length; i++) {
        for (let j = i+1; j < array.length; j++) {
            if (array[i] + array[j] === num)
                return [array[i], array[j]]
        }
    }
    return -1
}


//IMPLEMENT THE ARRAY.SLICE() FUNCTION FROM SCRATCH
const sliceFunction =  (array, startIndex, endIndex) => {
    if (!startIndex && !endIndex)
        return array

    if (!endIndex)
        endIndex = array.length-1

    let newArray = []
    while (startIndex <= endIndex){
        newArray.push(array[startIndex])
        startIndex++
    }
    return newArray
}

// FIND THE MEDIAN OF A SORTED ARRAYS OF THE SAME SIZE
const median = (array) => {
   if (array.length === 0)
      return -1

    if (array.length === 1)
        return array[0]

    if (array.length % 2 === 1){
        return array[Math.floor(array.length/2)]
    }

    return array[array.length/2] + array[array.length/2 -1]/2
}
console.log(sliceFunction(numArray,2,4))

//1,2,3,4