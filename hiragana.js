let correctInputs = 0;
let totalInputs = 46;






class flashcard{
    constructor(fcId, answer){
        this.fcId = fcId;
        this.answer = answer;
    }
}




var arrayFC = [

    new flashcard("あ", "a"),
    new flashcard("い", "i"),
    new flashcard("う", "u"),
    new flashcard("え", "e"),
    new flashcard("お", "o"),


    
    new flashcard("か", "ka"),
    new flashcard("き", "ki"),
    new flashcard("く", "ku"),
    new flashcard("け", "ke"),
    new flashcard("こ", "ko"),



    new flashcard("さ", "sa"),
    new flashcard("し", "shi"),
    new flashcard("す", "su"),
    new flashcard("せ", "se"),
    new flashcard("そ", "so"),



    new flashcard("た", "ta"),
    new flashcard("ち", "chi"),
    new flashcard("つ", "tsu"),
    new flashcard("て", "te"),
    new flashcard("と", "to"),



    new flashcard("な", "na"),
    new flashcard("に", "ni"),
    new flashcard("ぬ", "nu"),
    new flashcard("ね", "ne"),
    new flashcard("の", "no"),



    new flashcard("は", "ha"),
    new flashcard("ひ", "hi"),
    new flashcard("ふ", "hu"),
    new flashcard("へ", "he"),
    new flashcard("ほ", "ho"),



    new flashcard("ま", "ma"),
    new flashcard("み", "mi"),
    new flashcard("む", "mu"),
    new flashcard("め", "me"),
    new flashcard("も", "mo"),



    new flashcard("ら", "ra"),
    new flashcard("り", "ri"),
    new flashcard("る", "ru"),
    new flashcard("れ", "re"),
    new flashcard("ろ", "ro"),



    new flashcard("や", "ya"),
    new flashcard("ゆ", "yu"),
    new flashcard("よ", "yo"),



    new flashcard("わ", "wa"),
    new flashcard("を", "wo"),
    new flashcard("ん", "n")
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
    gameDiv.innerHTML += "<div class=\"flashcard\" id=\"card" + id + "\"><p class=\"hiragana\">" + card.fcId + "</p><input id=\"input" + id + "\" type=\"text\" onkeydown=\"validation(" + id + ")\"></div>"
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




















