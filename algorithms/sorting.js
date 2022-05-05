'use strict'

const swap = (arr, idx1, idx2) => {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
}

// O(N^2)
const bubbleSort = (arr) => {
    let noSwaps
    for (let i = arr.length-1; i >= 0; i--) {
        noSwaps = true
        for (let j = 0; j < i; j++) {
            if (arr[j] > arr[j+1])
                swap(arr,j,j+1)
            noSwaps = false
        }
        if (noSwaps) break
    }
    return arr
}

// O(N^2)
const selectionSort = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        let min = i
        for (let j = i+1; j < arr.length; j++) {
            if (arr[j] < arr[min])
                min = j
        }
        if (min !== i)
            swap(arr,i,min)
    }
    return arr
}