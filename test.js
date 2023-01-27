class flashcard{
    constructor(fcId, id, answer){
        this.fcId = fcId;
        this.id = id;
        this.answer = answer;
    }
}




var arrayFC = [

    new flashcard("flashcard-a", 1, "a"),
    new flashcard("flashcard-i", 2, "u")

];






function validation(flashcard, id, answer){
    let tempId = document.getElementById(id);
    let tempFC = document.getElementById(flashcard);

    if(tempId === answer[id].value){
        flashcard.style.backgroundColor = "lightgreen";
    }
    else{
        flashcard.style.backgroundColor = "red";

            //adds class "shake" to flashcard class
            flashcard.classList.add("shake");
            setTimeout(function(){
                flashcard.classList.remove("shake");
              },500);
    }
}