function updatePhoneNumber(isIncrease){
    const phoneNumberField = document.getElementById('phone-number-field');
    const phoneNumberString = phoneNumberField.value ;
    const previousPhoneNumber = parseInt(phoneNumberString);

    let newPhoneNUmber;
    if(isIncrease === true){
        newPhoneNUmber = previousPhoneNumber + 1;
    }
    else{
      newPhoneNUmber = previousPhoneNumber - 1;
    }
    phoneNumberField.value = newPhoneNUmber;

    return newPhoneNUmber;
}
function updatePhoneTotalPrice(newPhoneNUmber){
    const totalPrice = newPhoneNUmber * 1219;
    const totalElement = document.getElementById('phone-total');
    totalElement.innerText = totalPrice;
}
document.getElementById('btn-phone-plus').addEventListener('click', function(){
    const newPhoneNUmber = updatePhoneNumber(true);
    updatePhoneTotalPrice(newPhoneNUmber);
    calculateSubTotal();
});
document.getElementById('btn-phone-minus').addEventListener('click', function(){
    const newPhoneNUmber = updatePhoneNumber(false);
    updatePhoneTotalPrice(newPhoneNUmber);
    calculateSubTotal();
});