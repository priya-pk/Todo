function validate(callback){
    let inpAdmin = document.getElementById("inpAdmin");
    let inpPwd = document.getElementById("inpPwd");
    

    //username
    if(inpAdmin.value !== "admin"){
        error.innerHTML = "Invalid Username";
        error.style.color = "red";
        inpAdmin.style.border = "2px solid red";
        return false;
    }
    else{
        error.innerHTML = "Valid Username";
        error.style.color = "green";
        inpAdmin.style.border = "2px solid green";
    }

    //password
    if(inpPwd.value !== "12345"){
            pwder.innerHTML = "Invalid Password";
            pwder.style.color = "red";
            inpPwd.style.border = "2px solid red";
            return false;
        }
    else{
        pwder.innerHTML = "Valid Password";
        pwder.style.color = "green";
        inpPwd.style.border = "2px solid green";
    }
    callback();
}
function callback(){
    window.location = "todo.html";
}   
  
