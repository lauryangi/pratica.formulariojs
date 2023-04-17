function validarLogin(){
    var user = "Admin";
    var pass = "1234";
    if (user === document.forms["validaLogin"]["usuario"].value &&
        pass === document.forms["validaLogin"]["senha"].value ){
            alert("Login Válido");
            return true;
        }else {
            alert("Login inválido!");
            return false;
        }
    }