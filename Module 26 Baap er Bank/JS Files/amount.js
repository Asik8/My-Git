document.getElementById('deposit-button').addEventListener('click',function(){
    const depositType = document.getElementById('deposit-field');
    const deposit = depositType.value;
    const depositInNum= parseFloat(deposit);
    depositType.value='';
     const depositAmount = document.getElementById('deposit-amount');
     const depoam = depositAmount.innerText;
     const depoamInNum= parseFloat(depoam);

    const sumOfDeposit=depositInNum+ depoamInNum;

     depositAmount.innerText= sumOfDeposit;
     
    const totalValue = document.getElementById('total-amount');
    const value= totalValue.innerText;
    const valueNum= parseFloat(value);
    const sum=valueNum+sumOfDeposit;
    totalValue.innerText= sum;
})

// Withdraw Part

