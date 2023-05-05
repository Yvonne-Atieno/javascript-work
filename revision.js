
//Write a function that takes a string as
//input and returns the number of vowels in the string.
function word(){
    let name="Basketball"
    name2=p.replace(/[a,e,i,o,u]/gi,"").length
    console.log(name2)
}
word()
//  Write a function that takes an array of numbers as
//  input and returns the sum of all the numbers in javascript.
function numArray(numbers){
    let sum =0;
    for(let i=0;i<numbers.length;i++){
        sum+=numbers[i]
    }
    return sum
}
const numbers=[10,20,30,40]
console.log(numArray(numbers))
// Write a function that takes two numbers in javascript as input and returns
//   true if their sum is greater than 100, and false otherwise.
function Numbers(num1,num2){
    let sum=num1+num2
    if(sum>100){
        return true
    }else{
        return false
    }
}
console.log(Numbers(44,60))

//Write a function that takes in a array of numbers as a parameter and returns the second largest number in the array
function numbsArray(numbera){
    array=[5,10,3,8];
    let secondLargestNumber=findSecondLargest(array);

}
console.log(secondLargestNumber);


//Write a function that takes a string as a parameter and returns true if the string is a palindrome and false otherwise
function isPalinrome(string){
    l
}

7