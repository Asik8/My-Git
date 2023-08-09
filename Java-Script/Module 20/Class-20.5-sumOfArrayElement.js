function sum(array){
    var s=0;
    for(let i=0;i< array.length; i++){
        var num=array[i];
        s+=num;
    }
    return s;
}

var arr=[10,15,17,9,20];
var Sum=sum(arr);
console.log('Sum of the number is',Sum);