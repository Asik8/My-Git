document.getElementById('user-button').addEventListener('click',function(){
    const userEmail= document.getElementById('user-email');
    const email =userEmail.value;

    const userPassword = document.getElementById('user-password');
    const password = userPassword.value;

    if(email === 'bank@baap.com' && password === 'baperbank'){
        window.location.href = 'bank.html';
    }
    else {
        alert('Tui Password vule gesis!! Tke ami tajjo putro krlam');    }
})