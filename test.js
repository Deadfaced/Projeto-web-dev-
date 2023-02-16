class flashcard{
    constructor(fcId, id, answer){
        this.fcId = fcId;
        this.id = id;
        this.answer = answer;
    }
}




var arrayFC = [

    new flashcard("flashcard-a", id, "a"),
    new flashcard("flashcard-i", id, "u"),
    new flashcard("flashcard-u", id, "u"),
    new flashcard("flashcard-e", id, "e"),
    new flashcard("flashcard-o", id, "o"),


    
    new flashcard("flashcard-ka", id, "a"),
    new flashcard("flashcard-ki", id, "u"),
    new flashcard("flashcard-ku", id, "u"),
    new flashcard("flashcard-ke", id, "e"),
    new flashcard("flashcard-ko", id, "o"),


];


for(let i = 0; i < arrayFC.length; i++){
    arrayFC[i].id = "id-" + (i + 1);
}



arrayFC.sort( (a,b) => {return 0.5 - Math.random() });



function validation(flashcard, id, answer){
    let tempId = document.getElementById(id);
    let tempFC = document.getElementById(flashcard);

    if(tempId.value === answer){
        tempFC.style.backgroundColor = "lightgreen";
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