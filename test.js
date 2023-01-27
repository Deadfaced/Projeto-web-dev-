class flashcard{
    constructor(fcId, id, answer){
        this.fcId = fcId;
        this.id = id;
        this.answer = answer;
    }
}




var arrayFC = [

    new flashcard("flashcard-a", "a", "a"),
    new flashcard("flashcard-i", "u", "u"),
    new flashcard("flashcard-u", "u", "u"),
    new flashcard("flashcard-e", "e", "e"),
    new flashcard("flashcard-o", "o", "o"),


    
    new flashcard("flashcard-a", "a", "a"),
    new flashcard("flashcard-i", "u", "u"),
    new flashcard("flashcard-u", "u", "u"),
    new flashcard("flashcard-e", "e", "e"),
    new flashcard("flashcard-o", "o", "o"),


];






function validation(flashcard, id, answer){
    let tempId = document.getElementById(id);
    let tempFC = document.getElementById(flashcard);

    if(tempId === answer[id].value){
        tempFC.style.backgroundColor = "lightgreen";
b
        document.getElementById((id + 1)).focus();
    }
    else{
        tempFC.style.backgroundColor = "red";

        //adds class "shake" to flashcard class
        tempFC.classList.add("shake");
        setTimeout(function(){
            tempFC.classList.remove("shake");
        },500);

        document.getElementById((id + 1)).focus();
    }
}