var email=prompt("Enter E-mailID");
function validate(email){
    if(email.includes('@')){
        console.log("E-mail is Valid");
    }else{
        console.log("E-mail is invalid");
    }
    return validate;
}
validate(email)