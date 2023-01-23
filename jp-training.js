function validateInput(){
    var inp = document.forms["input-form"]["a"].value;

    if(inp == ""){

        return false;
    }else if (inp == "a"){
        
        return true;
    }
}