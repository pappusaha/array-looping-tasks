
const numbers =[12, 25, 36, 96, 78, 45, 95, 56];
console.log(numbers);


// numbers.reverse();
// console.log(numbers);



const rev_numbers=[];
for( const number of numbers){
    console.log(number);
 
}
console.log(rev_numbers);


// for( const number of numbers){
//     console.log(number);
// } 

// const name =['elon', 'jeff', 'mark', 'bill'];
// console.log(name);

// name.reverse();
// console.log(name);
// practic task -------------------------------

const colors = ['red', 'blue', 'green', 'yellow', 'orange'];
console.log(colors);


const rev_colors=[];


for( const color of colors){
    console.log(color);
    rev_colors.unshift(color);
}
console.log(rev_colors);