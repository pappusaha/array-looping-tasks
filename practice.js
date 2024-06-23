
// // odd numbers 
// for( let i =1; i <20; i=i+2){

//     console.log(i);
// }


// // diffrant type of loop for odd number 

// for( let i= 0; i < 20; i++){
//     if(i%2 === 1){
//         console.log(i);
//     }
// }


// for( let i=0; i <=20; i++){
//     if(i%2 === 0){
//         console.log(i)
//     }
// }


// Example array
// let  numbers = [12, 98, 5, 41, 23, 78, 46];


// // array to hold the even number /
// let  evenNumbers =[];

// // loop through the number 

// for( let i=0; i <numbers.length; i++){
//     // check if the number is even 
//     if(numbers[i]%2 === 0){

//         // if even add the evenNumber  array
//         evenNumbers.push(numbers[i]);
//     }

// }

// console.log(evenNumbers) 


// Task 3
// Use a for...of loop to concatenate all the elements of an array into a single string.

const numbers =['tom', 'tim', 'tin', 'tik'];

// Join without any separator
const concatenate =numbers.join('');

console.log(concatenate);


// -----------------------------------
// Task 4 (Hard)
// Reverse the words of a sentence. Only the position of the word will be reversed. check out the output

const statement = 'I am a hard working person';
// Split the sentence into an array of words

const wordArray =statement.split(' ');

// reversed the array of the word
const reversedArray = wordArray.reverse();

// join the reversedArray back into the single String
const statementReversed = reversedArray.join(' ');




console.log(statementReversed);







