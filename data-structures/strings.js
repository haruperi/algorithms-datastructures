/*******************************************   Creating strings   ******************************/

let firstname = "Rufaro"
let lastname = "Haruperi"
let fullname = "Rufaro Haruperi"
let result



/*******************************************   String Access   ******************************/
//characters
result = fullname.charAt(4)
result = fullname.charCodeAt(4)


//substring
result = fullname.substring(3,7)
result = fullname.substring(3)

/*******************************************   String Comparison   ******************************/
result = firstname < lastname


/*******************************************   String Search   ******************************/
result = fullname.indexOf("Haru")
result = fullname.indexOf("Haru",8)

/*******************************************   String Decomposition   ******************************/
result = fullname.split('')

/*******************************************   String Regular Expressions   ******************************/
//     ^: Indicates the start of a string/line
//     \d: Finds any digit
//     [abc]: Finds any character between the brackets
//     [^abc]: Finds any character not between the brackets
//     [0-9]: Finds any digit between the brackets
//     [^0-9]: Finds any digit not between the brackets
//     (x|y): Finds any of the alternatives specified




/*******************************************   String Exercices   ******************************/
//https://leetcode.com/problems/valid-palindrome/
//125. Valid Palindrome

const isPalindrome = (str) => {
    str = str.toLowerCase().replace(/[^a-z]/g,'')

    let left = 0
    let right = str.length-1

    while (left<right){
        if (str[left] !== str[right])
            return false
        left++
        right--
    }
    return true
}

// https://leetcode.com/problems/longest-palindromic-substring/
// 5. Longest Palindromic Substring

const longestPalindrome = (str) => {
    let startIndex = 0
    let maxLength = 1

    const expandAroundMiddle = (left, right) => {
        while (left >= 0 && right < str.length && str[left] === str[right]){
            let currentPalLength = right - left + 1
            if (currentPalLength > maxLength) {
                maxLength = currentPalLength
                startIndex = left
            }
            left -= 1
            right += 1
        }
    }

    for (let i = 0; i < str.length; i++) {
        expandAroundMiddle(i - 1, i + 1)
        expandAroundMiddle(i, i + 1)
    }

    return str.slice(startIndex, startIndex+maxLength)

}

//https://leetcode.com/problems/valid-anagram/
// 242. Valid Anagram

const isAnagram = (str1, str2) => {
  if (str1.length !== str2.length)
      return false

    const sCharCounts = {}
}

console.log(word)