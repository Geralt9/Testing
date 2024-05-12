

let first = document.getElementById('firsterror') ;
let last = document.getElementById('lasterror') ;
let email = document.getElementById('emailerror');
let phone = document.getElementById('phoneerror') ; 

let description = getElementById('description-text') ; 


function validatefirst () {
    let firstname = document.getElementById('firstname').value ;

    if(firstname.length == 0){
        first.innerHTML ="<br> First name is required"
    }
    else if(!firstname.match(/[a-zA-Z]/)){
        first.innerHTML = '<br> please enter a Valid first name .' ;
        return false;
    }
    
    else{
        first.innerHTML = '<br><i class="fa-solid fa-circle-check"></i>'
    }
}
function validatelast() {

    let lastname = document.getElementById('lastname').value ;

    if(lastname.length == 0){
        last.innerHTML =" <br> Last name is required"
    }
    else if(!lastname.match(/[a-zA-Z]/)){
        last.innerHTML = ' <br> please enter a Valid first name .' ;
        return false;
    }
    
    else{
        last.innerHTML = '<br><i class="fa-solid fa-circle-check"></i>'
    }
}

function validateemail(){
    let emailaddress = document.getElementById('email-address').value ; 

    if(emailaddress.length == 0){
        email.innerHTML = '<br> Email address is reauired' ;
        return false ;
    }
    else if (!emailaddress.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)){
        email.innerHTML = ' <br> Please enter a valid email address '
    }
    else{
        email.innerHTML = '<br><i class="fa-solid fa-circle-check"></i>'
    }

}

function validatephone(){
    let number = document.getElementById('phone-number').value ;

    if(number.length == 0){
        phone.innerHTML = ' <br> Phone number is Required '
        return false ; 
    }
    else if(number.length !=10){
        phone.innerHTML= '<br> Phone number is invalid'

    }
    else if(!number.match(/^[0-9]+$/)){
        phone.innerHTML = '<br> Please enter a Valid phone number '
        return false ;
    }
    else{
        phone.innerHTML = '<br><i class="fa-solid fa-circle-check"></i>'
    }
}