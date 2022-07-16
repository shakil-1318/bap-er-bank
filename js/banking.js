function getInputField(inputId) {
    const InputField = document.getElementById(inputId);
    const inputFieldText = InputField.value;
    const inputAmount = parseFloat(inputFieldText);
    //clean the deposit input 
    InputField.value = '';
    return inputAmount;
}

function updateField(updateValue, inputAmount) {
    const balanceField = document.getElementById(updateValue);
    const balanceFieldText = balanceField.innerText;
    const balanceFieldAmount = parseFloat(balanceFieldText);
    balanceField.innerText = balanceFieldAmount + inputAmount;
}

function getTotalValue(inputAmount, isAdd) {
    const totalBalance = document.getElementById('total-balance');
    const totalBalanceText = totalBalance.innerText;
    const totalBalanceAmount = parseFloat(totalBalanceText);
    if (isAdd == true) {
        totalBalance.innerText = totalBalanceAmount + inputAmount;
    }
    else {
        totalBalance.innerText = totalBalanceAmount - inputAmount;
    }
}


document.getElementById('deposit-button').addEventListener('click', function () {

    const inputAmount = getInputField('deposit-input');
    if (inputAmount > 0) {
        updateField('deposit-balance', inputAmount);
        getTotalValue(inputAmount, true);
    }

});

//withdraw btn event handler
document.getElementById('withdraw-button').addEventListener('click', function () {

    const withdrawInputAmount = getInputField('withdraw-input');
    updateField('withdraw-balance', withdrawInputAmount);
    getTotalValue(withdrawInputAmount, false);


})




































































// //banking deposit and withdraw event

// document.getElementById('deposit-button').addEventListener('click', function () {
//     //get the amount deposited
//     const depositField = document.getElementById('deposit-input');
//     const newDepositText = depositField.value;
//     const newDepositAmount = parseFloat(newDepositText);

//     //update deposit total
//     const depositTotal = document.getElementById('deposit-total');
//     const previousDepositText = depositTotal.innerText;
//     console.log(previousDepositText);
//     const previousDepositAmount = parseFloat(previousDepositText);

//     const newDepositTotal = previousDepositAmount + newDepositAmount;

//     depositTotal.innerText = newDepositTotal;

//     //total update balance
//     const currentBalance = document.getElementById('current-balance');
//     const previousCurrentText = currentBalance.innerText;
//     const previousCurrentBalance = parseFloat(previousCurrentText);

//     const newTotalBalnce = previousCurrentBalance + newDepositAmount;
//     currentBalance.innerText = newTotalBalnce;

//     //clean the deposit input field
//     depositField.value = '';
// });

// //handle withdraw event

// document.getElementById('withdraw-button').addEventListener('click', function () {
//     const withdrawField = document.getElementById('withdraw-input');
//     const newWithdrawText = withdrawField.value;
//     const newWithdrawAmount = parseFloat(newWithdrawText);

//     //withdraw field
//     const withdrawTotal = document.getElementById('withdraw-total');
//     const previousWithdrawText = withdrawTotal.innerText;
//     const previousWithdrawAmount = parseFloat(previousWithdrawText);

//     //total withdraw
//     const newWithdrawTotal = previousWithdrawAmount + newWithdrawAmount;
//     withdrawTotal.innerText = newWithdrawTotal;

//     //update balance
//     const currentBalance = document.getElementById('current-balance');
//     const previousCurrentText = currentBalance.innerText;
//     const previousCurrentBalance = parseFloat(previousCurrentText);
//     const newTotalBalance = previousCurrentBalance - newWithdrawAmount;
//     currentBalance.innerText = newTotalBalance;

//     // withdraw input field clean
//     withdrawField.value = '';
// })