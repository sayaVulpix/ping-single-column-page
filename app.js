function validEmail(){
    var email=document.getElementById("email").value;
    const regx = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if(regx.test(email))
    {
        document.getElementById("email").style.border ="1px solid green"
        document.getElementById("error").style.display ='none';

      
    }else{
        document.getElementById("error").style.display ='block';
      document.getElementById("email").style.border ="1px solid red";
        
        
        
    }
}