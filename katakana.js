let correctInputs = 0;
let totalInputs = 46;






class flashcard{
    constructor(fcId, answer){
        this.fcId = fcId;
        this.answer = answer;
    }
}




var arrayFC = [
    
    new flashcard("ア", "a"),
    new flashcard("イ", "i"),
    new flashcard("ウ", "u"),
    new flashcard("エ", "e"),
    new flashcard("オ", "o"),


    
    new flashcard("カ", "ka"),
    new flashcard("キ", "ki"),
    new flashcard("ク", "ku"),
    new flashcard("ケ", "ke"),
    new flashcard("コ", "ko"),


    
    new flashcard("サ", "sa"),
    new flashcard("シ", "shi"),
    new flashcard("ス", "su"),
    new flashcard("セ", "se"),
    new flashcard("ソ", "so"),


    
    new flashcard("タ", "ta"),
    new flashcard("チ", "chi"),
    new flashcard("ツ", "tsu"),
    new flashcard("テ", "te"),
    new flashcard("ト", "to"),


    
    new flashcard("ナ", "na"),
    new flashcard("ニ", "ni"),
    new flashcard("ヌ", "nu"),
    new flashcard("ネ", "ne"),
    new flashcard("ノ", "no"),


    
    new flashcard("ハ", "ha"),
    new flashcard("ヒ", "hi"),
    new flashcard("フ", "hu"),
    new flashcard("ヘ", "he"),
    new flashcard("ホ", "ho"),


    
    new flashcard("マ", "ma"),
    new flashcard("ミ", "mi"),
    new flashcard("ム", "mu"),
    new flashcard("メ", "me"),
    new flashcard("モ", "mo"),


    
    new flashcard("ラ", "ra"),
    new flashcard("リ", "ri"),
    new flashcard("ル", "ru"),
    new flashcard("レ", "re"),
    new flashcard("ロ", "ro"),


    
    new flashcard("ヤ", "ya"),
    new flashcard("ユ", "yu"),
    new flashcard("ヨ", "yo"),


    
    new flashcard("ワ", "wa"),
    new flashcard("ヲ", "wo"),
    new flashcard("ン", "n")
];






arrayFC.sort( (a,b) => {return 0.5 - Math.random() })
/*
    usa a função sort para ordenar a flashcard atual e a seguinte; passa por todos os elementos do array
    a função Math.random() retorna ou 0 ou 1
    a seguir à arrow a função sort vai fazer o return da diferença entre 0.5 e o retorno da função Math.random():
    se Math.random() retornar 0 a função sort() vai retornar 0.5 (0.5 - 0 = 0.5); se Math.random() retornar 1 a função sort() vai retornar -0.5
    dependendo de a função sort() retornar um número positivo ou negativo, a função vai ou não vai trocar os argumentos a e b 
*/

let gameDiv = document.getElementById("flashcard-container");

arrayFC.forEach((card, id) => {
    gameDiv.innerHTML += "<div class=\"flashcard\" id=\"card" + id + "\"><p class=\"katakana\">" + card.fcId + "</p><input id=\"input" + id + "\" type=\"text\" onkeydown=\"validation(" + id + ")\"></div>"
});






function validation(index){
    if(event.key === "Enter"){
        let inputID = document.getElementById("input" + index);
        let cardID = document.getElementById("card" + index);

        if(inputID.value === arrayFC[index].answer){
            cardID.style.backgroundColor = "lightgreen";
            correctInputs++;
            if(index < arrayFC.length - 1){
                document.getElementById("input" + (index + 1)).focus();
            }
        }   
        else{
            cardID.style.backgroundColor = "red";

            //adds class "shake" to flashcard class
            cardID.classList.add("shake");
            setTimeout(function(){
                cardID.classList.remove("shake");
            },500);

            document.getElementById("input" + (index + 1)).focus();
        }
    }
    
}








//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



function showScore(){
    let output = document.getElementById("output");
    output.innerHTML = correctInputs + " / " + totalInputs + " correct answers";

    let resetButton = document.getElementById("reset");
    resetButton.removeAttribute("hidden");
    let studyButton = document.getElementById("study");
    studyButton.removeAttribute("hidden");

    window.scrollTo(0, document.body.scrollHeight);
}




















