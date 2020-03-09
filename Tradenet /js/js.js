'use strict'

function validate(){  
    var namefistN=document.f1.fistNameRegform.value;  
    var namelastN=document.f1.lastNameRegform.value;
    var emailItem=document.f1.emailRegform.value;
    var phoneRegformlength=document.f1.phoneRegform.value.length;  
    var status=false;  
    
    if (namefistN==""){  
       document.getElementById("firstName").innerHTML=  
       "Please enter your First Name";  
       status=false;
       } else {  
       document.getElementById("firstName").innerHTML="✔";  
       status=true;
       }

    if (namelastN==""){  
        document.getElementById("lastName").innerHTML=  
        "Please enter your Last Name";  
        status=false;
        } else {  
        document.getElementById("lastName").innerHTML="✔";  
        status=true;
        }

    if (emailItem==""){  
        document.getElementById("email").innerHTML=  
        "Please enter your Email";  
        status=false;
        } else {  
        document.getElementById("email").innerHTML="✔";  
        status=true;
        }
    if(phoneRegformlength<7){  
        document.getElementById("phoneNumber").innerHTML=  
        "Phone number must be at least 7 digits";  
        status=false; 
        }else{  
        document.getElementById("phoneNumber").innerHTML="✔";  
        }        
        return status;  
        }

    
