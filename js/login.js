document.getElementById('login-submit').addEventListener('click', function () {
    //get user email
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    emailField.value = '';
    //get user Password
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;
    passwordField.value = '';
    //check email and password
    if (userEmail == 'just@bank.com' && userPassword == '1234') {
        window.location.href = 'banking.html';
    }
    else if (userEmail == '' && userPassword == '') {
        alert('Your email and password filled blank!');
    }
    else {
        alert('wrong information!!please correct information then try it');
    }

});
