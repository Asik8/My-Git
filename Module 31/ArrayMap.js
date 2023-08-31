const numbers = [20,4,5,6,8,10];

// Normal Method:
// const doubled = [];
// for (const num of numbers) {
//     const double = num*2;
//     doubled.push(double);
// }
// console.log(doubled);


// Array Map:
// function doubleIt(num){
//     num=num*2;
//     return num;
// }

// const result = numbers.map(doubleIt);
// console.log(result);


// More Short Way:
// const double2 = n => n*2;
// const result = numbers.map(double2);
// console.log(result);


// More Short Way:
const result = numbers.map(n => n*2);
console.log(result);