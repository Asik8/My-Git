function lowestInArray(num){
let low=num[0];
for(let i=0;i<num.length;i++){
    const index=i;
    const com=num[index];
    if(low>com){
        low = com;
    }
}
return low;
}

let num=[109,25,68,95,93,389,283];
const n=lowestInArray(num);
console.log('Lowest Number of the Array is:',n);

