//Global Variables
arrayLetters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','ñ','o','p','q','r','s','t','u','v','w','x','y','z'];
arrayNumbers = [0,1,2,3,4,5,6,7,8,9];
let submitErrors = [];

// Get Elements
var nameVar = document.myform.name;
var password = document.getElementById('password'); 
var age = document.getElementById('age');
var phoneNumber = document.getElementById('phone');
var adress = document.getElementById('adress');
var city = document.getElementById('city');
var postalCode = document.getElementById('postal-code');
var dni = document.getElementById('dni');
var email = document.getElementById('email');
var subsBtn = document.getElementById('subscribeButton');
var hello = document.getElementById('hello');

//General Functions
function checkLength(a, minLength, maxLength) {
    if ((a.length >= minLength)&&(a.length <= maxLength)){
        return true;
    }else{
        return false;
    }
}
//The next function will check if the value has all of the characters passed to it or none of them
function checkCharacters(a, arrayCharacters, mustHave){
    if (mustHave === true){
        for (i = 0; i <= (arrayCharacters.length-1); i++){
            if(a.indexOf(arrayCharacters[i]) === -1 ){
                return false;
            }
        }    
    }else if (mustHave === false){
        for (i = 0; i <= (arrayCharacters.length-1); i++){
            if(a.indexOf(arrayCharacters[i]) !== -1 ){
                return false;
            }
        }
    }
    return true;
}
//The next function will check if the value has at least one of the characters passed to it
function checkCharactersNotAll(a, arrayCharacters){
    for(i=0 ; i<= (arrayCharacters.length-1); i++){
        if(typeof (arrayCharacters[i]) === 'string'){
            if(a.indexOf(arrayCharacters[i].toLowerCase()) !== -1){
                return true;
            }
        }else{
            if(a.indexOf(arrayCharacters[i]) !== -1){
                return true;
            }
        }
    }
    return false;
}
function errorMessage (target) {
    target.nextElementSibling.classList.remove('hidden');
    target.classList.add('danger');
}
function removeMessage(e){
    e.target.nextElementSibling.classList.add('hidden');
    e.target.classList.remove('danger');
}
function checkGlobalErrors (errorM){
    counterOfMessages = 0;    
    for (i=0 ; i<= (submitErrors.length-1); i++){
        if (submitErrors[i].indexOf(errorM) !== -1){
            counterOfMessages += 1;
        }
    }
    if (counterOfMessages === 0){
        submitErrors.push(errorM)
    }
}
function removeGlobalErrors (errorM){ 
    for (i=0 ; i<= (submitErrors.length-1); i++){
        if (submitErrors[i].indexOf(errorM) !== -1){
            submitErrors.splice(i,1);
        }
    }
}


//Validate Functions
function validateName(e){
    errorM = " Error: the name must contain at least 6 leters and have an space ";
    if ( (checkLength(e.target.value, 7, 80)) && (checkCharacters(e.target.value, [" "], true)) && (checkCharacters(e.target.value,arrayNumbers,false))){
        //console.log("no error");  Tester
        removeGlobalErrors(errorM);
    }else{
        //console.log("Error"); Tester    
        errorMessage(e.target);
        checkGlobalErrors(errorM);
    }
    //console.log(submitErrors);  
}
function validatePass (e){
    errorM = " Error: the password must contain at least 8 characters: leters and numbers ";
    if(((checkLength(e.target.value,8,16))&&(checkCharactersNotAll(e.target.value,arrayLetters))) && checkCharactersNotAll(e.target.value, arrayNumbers)){
        //console.log('no error'); Tester
        errorMessage(e.target, "");
        removeGlobalErrors(errorM);
    }else{
        errorMessage(e.target, errorM);
        checkGlobalErrors(errorM);
    }
    //console.log(submitErrors); 
}
function validateAge(e){
    errorM = " Error: you must be over 18 years old to subscribe";
    if ((parseInt(e.target.value, 10) >= 18)  && (checkCharacters(e.target.value, arrayLetters, false))){
        //console.log("no error");  Tester
        errorMessage(e.target, "");
        removeGlobalErrors(errorM);
    }else{
        //console.log("Error"); Tester 
        errorMessage(e.target, errorM);
        checkGlobalErrors(errorM);
    } 
    //console.log(submitErrors); 
}
function validatePhone(e){
    errorM = " Error: the phone number must be at least 7 digits and not contain any symbols";
    if (checkCharacters(e.target.value, arrayLetters, false) && checkCharacters(e.target.value,[' ','-','(',')'], false) && checkLength(e.target.value,7,20)){
        //console.log("no error");  Tester
        errorMessage(e.target, "");
        removeGlobalErrors(errorM);
    }else{
        //console.log("Error"); Tester 
        errorMessage(e.target, errorM);
        checkGlobalErrors(errorM);
    } 
    //console.log(submitErrors); 
}
function validateAdress(e){
    errorM = " Error: the adress must contain at least 5 characters: leters, numbers and a space ";
    if (checkLength(e.target.value, 5,50) && checkCharactersNotAll(e.target.value,arrayLetters) && checkCharactersNotAll(e.target.value,arrayNumbers) && checkCharacters(e.target.value,[' '],true)){
        //console.log("no error");  Tester
        errorMessage(e.target, "");
        removeGlobalErrors(errorM);
    }else{
        //console.log("Error"); Tester 
        errorMessage(e.target, errorM);
        checkGlobalErrors(errorM);
    } 
    //console.log(submitErrors); 
}
function validateCityAndPostal(e){
    errorM = " Error: City or Postal Code must have at leats 3 characters ";
    if (checkLength(e.target.value,3,50)){
        //console.log("no error");  Tester
        errorMessage(e.target, "");
        removeGlobalErrors(errorM);
    }else{
        //console.log("Error"); Tester 
        errorMessage(e.target, errorM);
        checkGlobalErrors(errorM);
    } 
    //console.log(submitErrors); 
}
function validateDni(e){
    errorM = " Error: DNI must contain between 7 and 8 numbers ";
    if (checkLength(e.target.value,7,8) && checkCharacters(e.target.value,arrayLetters,false)){
        //console.log("no error");  Tester
        errorMessage(e.target, "");
        removeGlobalErrors(errorM);
    }else{
        //console.log("Error"); Tester 
        errorMessage(e.target, errorM);
        checkGlobalErrors(errorM);
    } 
    //console.log(submitErrors); 
}
function validateEmail(e){
    errorM = " Error: must be a valid email format ";
    if (checkCharacters(e.target.value,['@','.com'],true)){
        //console.log("no error");  Tester
        errorMessage(e.target, "");
        removeGlobalErrors(errorM);
    }else{
        //console.log("Error"); Tester 
        errorMessage(e.target, errorM);
        checkGlobalErrors(errorM);
    } 
    //console.log(submitErrors); 
}
function validateEnter(e){
    e.preventDefault();
    if (nameVar.value === '' || password.value === '' || age.value === '' || phoneNumber.value === '' || adress.value === '' || city.value === '' || postalCode.value === '' || dni.value === '' || email.value === '') {
        alert('Error: you must fill all camps');
    }else if (submitErrors.length === 0){
        alert('You have submited: Name:'+ nameVar.value+
        " Password: "+ password.value+" Age: "+age.value+" Phone Number: "+ phoneNumber.value+ " Adress; "+ adress.value+ "City: "+ city.value+" Postal Code: " + postalCode.value+" DNI: "+ dni.value+" Email: "+email.value);
    }else {
        alert(submitErrors);
    }
    //console.log(submitErrors); 
}

//Event Listeners
//Blur
nameVar.addEventListener('blur', validateName);
password.addEventListener('blur', validatePass);
age.addEventListener('blur', validateAge);
phoneNumber.addEventListener('blur', validatePhone);
adress.addEventListener('blur', validateAdress);
city.addEventListener('blur', validateCityAndPostal);
postalCode.addEventListener('blur', validateCityAndPostal);
dni.addEventListener('blur', validateDni);
email.addEventListener('blur', validateEmail);

 
//Focus
nameFocus = nameVar.addEventListener('focus', removeMessage);
password.addEventListener('focus', removeMessage);
age.addEventListener('focus', removeMessage);
phoneNumber.addEventListener('focus', removeMessage);
adress.addEventListener('focus', removeMessage);
city.addEventListener('focus', removeMessage);
postalCode.addEventListener('focus', removeMessage);
dni.addEventListener('focus', removeMessage);
email.addEventListener('focus', removeMessage);

//Click
subsBtn.onclick = validateEnter;

//Bonus 
nameVar.addEventListener('keydown', helloUser);
function helloUser(){
    hello.nextElementSibling.remove();
    hello.insertAdjacentHTML("afterend", '<h2>' + nameVar.value + '</h2>');
}
nameVar.addEventListener('blur', helloUser);