//Global Variables
arrayLetters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','ñ','o','p','q','r','s','t','u','v','w','x','y','z'];
arrayNumbers = [0,1,2,3,4,5,6,7,8,9];

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
function errorMessage (target, error) {
    target.insertAdjacentHTML("afterend", '<p>' + error + '</p>');
}
function removeMessage(e){
    e.target.nextElementSibling.remove()
}


//Validate Functions
function validateName(e){
    if ( (checkLength(e.target.value, 7, 80)) && (checkCharacters(e.target.value, [" "], true)) && (checkCharacters(e.target.value,arrayNumbers,false))){
        //console.log("no error");  Tester
        errorMessage(e.target, "");
        return true;
    }else{
        //console.log("Error"); Tester 
        errorM = " Error: the name must contain at least 6 leters and have an space ";
        errorMessage(e.target, errorM);
        return false;
    }  
}
function validatePass (e){
    if(((checkLength(e.target.value,8,16))&&(checkCharactersNotAll(e.target.value,arrayLetters))) && checkCharactersNotAll(e.target.value, arrayNumbers)){
        //console.log('no error'); Tester
        errorMessage(e.target, "");
        return true;
    }else{
        errorM = " Error: the password must contain at least 8 characters: leters and numbers ";
        errorMessage(e.target, errorM);
        return false;
    }
}
function validateAge(e){
    if ((parseInt(e.target.value, 10) >= 18)  && (checkCharacters(e.target.value, arrayLetters, false))){
        //console.log("no error");  Tester
        errorMessage(e.target, "");
        return true;
    }else{
        //console.log("Error"); Tester 
        errorM = " Error: you must be over 18 years old to subscribe";
        errorMessage(e.target, errorM);
        return false;
    } 
}
function validatePhone(e){
    if (checkCharacters(e.target.value, arrayLetters, false) && checkCharacters(e.target.value,[' ','-','(',')'], false) && checkLength(e.target.value,7,20)){
        //console.log("no error");  Tester
        errorMessage(e.target, "");
        return true;
    }else{
        //console.log("Error"); Tester 
        errorM = " Error: the phone number must be at least 7 digits and not contain any symbols";
        errorMessage(e.target, errorM);
        return false;
    } 
}
function validateAdress(e){
    if (checkLength(e.target.value, 5,50) && checkCharactersNotAll(e.target.value,arrayLetters) && checkCharactersNotAll(e.target.value,arrayNumbers) && checkCharacters(e.target.value,[' '],true)){
        //console.log("no error");  Tester
        errorMessage(e.target, "");
        return true;
    }else{
        //console.log("Error"); Tester 
        errorM = " Error: the adress must contain at least 5 characters: leters, numbers and a space ";
        errorMessage(e.target, errorM);
        return false;
    } 
}
function validateCityAndPostal(e){
    if (checkLength(e.target.value,3,50)){
        //console.log("no error");  Tester
        errorMessage(e.target, "");
        return true;
    }else{
        //console.log("Error"); Tester 
        errorM = " Error: must have at leats 3 characters ";
        errorMessage(e.target, errorM);
        return false;
    } 
}
function validateDni(e){
    if (checkLength(e.target.value,7,8) && checkCharacters(e.target.value,arrayLetters,false)){
        //console.log("no error");  Tester
        errorMessage(e.target, "");
        return true;
    }else{
        //console.log("Error"); Tester 
        errorM = " Error: DNI must contain between 7 and 8 numbers ";
        errorMessage(e.target, errorM);
        return false;
    } 
}
function validateEmail(e){
    if (checkCharacters(e.target.value,['@','.com'],true)){
        //console.log("no error");  Tester
        errorMessage(e.target, "");
        return true;
    }else{
        //console.log("Error"); Tester 
        errorM = " Error: must be a valid email format ";
        errorMessage(e.target, errorM);
        return false;
    } 
}
function validateEnter(e){
    e.preventDefault();
    alert('default prevented');
    if(enter === true){
        alert('no error');
    }else if (enter === false){
        alert('error');
    }
}

//Event Listeners
//Blur
enter = nameValidation = nameVar.addEventListener('blur', validateName);
enter = password.addEventListener('blur', validatePass);
enter = age.addEventListener('blur', validateAge);
enter = phoneNumber.addEventListener('blur', validatePhone);
enter = adress.addEventListener('blur', validateAdress);
enter = city.addEventListener('blur', validateCityAndPostal);
enter = postalCode.addEventListener('blur', validateCityAndPostal);
enter = dni.addEventListener('blur', validateDni);
enter = email.addEventListener('blur', validateEmail);

 
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
subsBtn.addEventListener('click', validateEnter);