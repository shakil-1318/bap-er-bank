document.getElementById('login-submit').addEventListener('click', function(){
    //get user email
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    emailField.value ='';
    //get user Password
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;
    passwordField.value = '';
    //check email and password
    if(userEmail == 'sontan@baap.com' && userPassword == 'secret'){
        window.location.href = 'banking.html';
    }
    else{
        alert('wrong information!!please correct information then try it');
    }
   
});
