// Code your solution here!

function printString(str){
    console.log(str[0])
    if(str.length > 1){
        let substr = str.substring(1 , str.length)
        printString(substr)
    } else {
        return true;
    }

}

// printAll("pizza");

function reverseString(str){
    // get the last character of the string and add it to a new string variable
    if(str === ""){
        return "";
    }else{
        return reverseString(str.substr(1)) + str.charAt(0);
    }
    
}

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
    





