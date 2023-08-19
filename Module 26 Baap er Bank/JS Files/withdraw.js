document.getElementById('Withdraw-button').addEventListener('click',function(){
    const withdrawInput = document.getElementById('Withdraw-field');
    const withdrawInputAmount = withdrawInput.value;
    const withdrawInputAmountNum = parseFloat(withdrawInputAmount);

    const withdrawAmount = document.getElementById('Withdraw');
    const withdrawAmountString = withdrawAmount.innerText;
    const withdrawAmountNum = parseFloat(withdrawAmountString);

    const sumOfWithdraw = withdrawInputAmountNum + withdrawAmountNum;
    withdrawAmount.innerText = sumOfWithdraw;

    withdrawInput.value = '';

    const mainBalance = document.getElementById('total-amount');
    const balance= mainBalance.innerText;
    const balanceNum= parseFloat(balance);
    const sumOnWithdraw=balanceNum - sumOfWithdraw;
    mainBalance.innerText= sumOnWithdraw;

})