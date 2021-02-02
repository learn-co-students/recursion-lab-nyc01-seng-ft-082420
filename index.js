// Code your solution here!

// Write a recursive function to print out all of the characters in a string.
function printString(str){
    console.log(str[0])
    if(str.length > 1){
        let substr = str.substring(1 , str.length)
        printString(substr)
    } else {
        return true;
    }

}


// Write out a recursive function to reverse a string.

function reverseString(str){
    // get the last character of the string and add it to a new string variable
    if(str === ""){
        return "";
    }else{
        return reverseString(str.substr(1)) + str.charAt(0);
    }
    
}

// Write out a recursive function to see if a word is a palindrome.
function isPalindrome(str){

    let l = str.length
    if(l < 2){
        return true;
    }       
       else if(str[0] === str[l - 1]){
            return isPalindrome(str.substring(1, l - 1));
        } else {
        return false;         
    }
}

 
// Given an array and an index, write a recursive function to add up the elements of an array.
function addUpTo(arr, index){
    return index ? arr[index] + addUpTo(arr, --index) : arr[index];
}

// Write a recursive function to find the largest integer in an array.
function maxOf(arr){
    if(arr.length === 1){
        return arr[0]
    }else {
        return Math.max(arr.pop(), maxOf(arr))
    }
}

// Write out a function to see if an array includes a given element.
function includesNumber(arr, element){
    if(!arr.length){
        return false;
    } else if(arr[0] === element){
        return true;
    }  else {
        return includesNumber(arr.slice(1), element)
    }
}

