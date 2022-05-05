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


// O(N^2)
const insertionSort = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        let pointer = i+1
        let current = i
        while (arr[current] > arr[pointer] && pointer >= 0 && current >=0){
            swap(arr, current, pointer)
            pointer--
            current--
        }
    }
    return arr
}


const mergeArrays = (arr1, arr2) => {
  const arr = []
    let arr1Pointer = 0
    let arr2Pointer = 0

    while ((arr1Pointer < arr1.length) && (arr2Pointer < arr2.length)){

        if (arr1[arr1Pointer] < arr2[arr2Pointer]){
            arr.push(arr1[arr1Pointer])
            arr1Pointer++
        } else {
            arr.push(arr2[arr2Pointer])
            arr2Pointer++
        }
    }

    while (arr1Pointer< arr1.length){
        arr.push(arr1[arr1Pointer])
        arr1Pointer++
    }

    while (arr2Pointer< arr2.length){
        arr.push(arr2[arr2Pointer])
        arr2Pointer++
    }

    return arr
}

const mergeSort = (arr) => {
  if (arr.length <= 1) return arr

    let mid = Math.floor(arr.length/2)
    let left = mergeSort(arr.slice(0, mid))
    let right = mergeSort(arr.slice(mid))
    return mergeArrays(left,right)
}

const arr = [ 5, 3, 4, 1, 2 ]
console.log(mergeSort(arr))

