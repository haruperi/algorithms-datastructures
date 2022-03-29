'use strict'

const bubbleSort = (arr) => {
    for (let i = arr.length-1; i > 0; i--) {
        for (let j = 0; j < i; j++) {
            if (arr[j] > arr[j+1]){
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
        }
    }
    return arr
}

const selectionSort = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        let min = i
        for (let j = i; j < arr.length; j++) {
            if (arr[j]<arr[min]) min = j
        }
        if (i !== min) {
            let temp = arr[i]
            arr[i] = arr[min]
            arr[min] = temp
        }
    }
    return arr
}





exports.bubbleSort = bubbleSort
exports.selectionSort = selectionSort