function printString(string){
  console.log(string[0])
  
  if (string.length<1){
    return string
  }
  
  let sub = string.substring(1)
  return printString(sub)

}

function reverseString(string){
  if (string.length <1) return string

  return reverseString(string.substring(1)) + string[0]

}

function isPalindrome(string){
  if (string.length<2)return true
  if (string[0] == string[string.length-1]){
    string = string.substring(1,string.length-1)
    return isPalindrome(string)
  } else {
    return false
  }
}

function addUpTo(array, index){
  if (index == 0) return array[0]

  let newArray = array.slice(1)

  return array[0] + addUpTo(newArray, index - 1)
}

function maxOf(array, max=0){
  if (array[0] > max) {
    max = array[0]
  }

  if (array.length === 0){
    return max
  }

  return maxOf(array.slice(1), max) 
}

function includesNumber(array, number){
  if (array[0]===number) return true
  if (array.length === 0) return false

  return includesNumber(array.slice(1), number)
}

includesNumber([1,2,3,4,5], 6)
includesNumber([1,2,3,4,5], 3)

