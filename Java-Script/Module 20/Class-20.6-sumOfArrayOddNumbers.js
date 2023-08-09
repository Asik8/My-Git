function sum(array){
    const oddArray=[];
    var s=0;
    for(let i=0;i< array.length; i++){
      if(array[i]%2!=0){
        var num=array[i];
        oddArray.push(num);
        s+=num;
      }
    }
    return s;
}

function odd(array){
    const oddArray=[];
    for(let i=0;i< array.length; i++){
      if(array[i]%2!=0){
        var num=array[i];
        oddArray.push(num);
      }
    }
    return oddArray;
}

var arr=[10,15,17,9,20];
var Odd=odd(arr);
var Sum=sum(Odd);
console.log(Odd);
console.log('Sum of the number is',Sum);