function validateInput(myform){ 
    validateFirstName(myform),
    validateLastName(myform)
    
}

//
function validateFirstName(myform){
    var firstName = myform.elements["fName"];

    if(firstName.validity.valueMissing){
        firstName.setCustomValidity("Please enter your first name here");
        return false;
    }else{
        firstName.setCustomValidity("");
        return true;
    }
}

//function to validate full name if empty
function validateLastName(myform){
    var lastName = myform.elements["lastName"];

    if(lastName.validity.valueMissing){
        lastName.setCustomValidity("Please enter your name here");
        return false;
    }else{
        lastName.setCustomValidity("");
        return true;
    }
}

//fucntion to validate member ID if empty and not valid
function validateMemberId(myform){
    var memberId = form.elements["memberID"];

    if(memberId.validity.valueMissing){
        memberId.setCustomValidity("Please enter your member ID here");
        return false;
    }else if(memberId.validity.patternMismatch){
        memberId.setCustomValidity("A valid ID starts with 5-digit code ends with an M");
        return false;
    }else{
        memberId.setCustomValidity("");
        return true;
    }
}