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


    
    new flashcard("flashcard-a", id, "a"),
    new flashcard("flashcard-i", id, "u"),
    new flashcard("flashcard-u", id, "u"),
    new flashcard("flashcard-e", id, "e"),
    new flashcard("flashcard-o", id, "o"),


];


for(let i = 0; i < arrayFC.length; i++){
    arrayFC[i].id = "input " + (i + 1);
}




arrayFC.sort( (a,b) => {return 0.5 - Math.random() })
/*
    usa a função sort para ordenar a flashcard atual e a seguinte; passa por todos os elementos do array
    a função Math.random() retorna ou 0 ou 1
    a seguir à arrow a função sort vai fazer o return da diferença entre 0.5 e o retorno da função Math.random():
    se Math.random() retornar 0 a função sort() vai retornar 0.5 (0.5 - 0 = 0.5); se Math.random() retornar 1 a função sort() vai retornar -0.5
    dependendo de a função sort() retornar um número positivo ou negativo, a função vai ou não vai trocar os argumentos a e b 
*/







function validation(flashcard, id, answer){
    let tempId = document.getElementById(id);
    let tempFC = document.getElementById(flashcard);    

    if(event.key === "Enter"){
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
    
}