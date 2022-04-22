
let user=document.getElementById("user");
let pwd=document.getElementById("pwd");
let erroruser=document.getElementById("erroruser");
let errorpass=document.getElementById("errorpass");


function loginvalidate(callback) {
    if(user.value.trim()=="" || pwd.value.trim()=="" ) {
        alert("Fields cannot be empty");
        return false;
        
        
    }
    
    
   
    
    else{
        // username validation
        
        if(user.value=="admin"){
            erroruser.innerHTML="Valid User Name";
            erroruser.style.color="green";
        //  password validation  
                
            if(pwd.value=="12345"){  
                callback();
             return true;
             
             
            }
            else{
                errorpass.innerHTML="Password wrong";
                errorpass.style.color="red";
                return false;
            }
        }
             
         
        
        else{
            erroruser.innerHTML="Username wrong";
            erroruser.style.color="red";
            return false;
        
        }
        
       
    }
    
}
function redirect(){
    
    document.write(" Please wait....Redirecting to Main page");
    setTimeout('redirect()',70000);
    window.location="main.html";
}