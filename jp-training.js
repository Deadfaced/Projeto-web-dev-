function validateInput(){
    var inp = document.forms["input-form"]["a"].value;

    if(inp == ""){
        alert("Vazio!");
        return false;
    }else if (inp == "a"){
        alert("Correto!");
        return true;
    }
}