// Max Using normal method
// function max(a,b,c){
//     if(a>b && a>c){
//         console.log('Max is: a=',a);
//     }
//     else if(a<b && b>c){
//         console.log('Max is: b=',b);
//     }
//     else {
//         console.log('Max is: c=',c);
//     }
// }

// Using Function
function max(a,b,c){
    let ans=Math.max(a,b,c);
    if(ans==a){
        console.log('Max is: a=',a);
    }
    else if(ans==b){
        console.log('Max is: b=',b);
    }
    else {
        console.log('Max is: c=',c);
    }
}

let a=10,b=20,c=25;
max(a,b,c);


// Normal Method
// function min(a,b,c){
//     if(a<b && a<c){
//         console.log('Min is: a=',a);
//     }
//     else if(a>b && b<c){
//         console.log('Min is: b=',b);
//     }
//     else {
//         console.log('Min is: c=',c);
//     }
// }

function min(a,b,c){
    let ans=Math.min(a,b,c);
    if(ans==a){
        console.log('Min is: a=',a);
    }
    else if(ans==b){
        console.log('Min is: b=',b);
    }
    else {
        console.log('Min is: c=',c);
    }
}

min(a,b,c);

