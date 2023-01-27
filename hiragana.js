var correctInputs = 0;
var totalInputs = 46;






//function to validate input
function validateInput1(event){
    var a_correctInput = false;
    //validate ENTER key pressed
    if(event.key === "Enter"){
        let input_a = document.getElementById("a");
        let flashcard_a = document.getElementById("flashcard-a");

        //validates user input
        if(input_a.value === "a"){
            flashcard_a.style.backgroundColor = "lightgreen";

            //after input focuses on the next input
            document.getElementById("i").focus();

            if(a_correctInput === false){
                correctInputs++;
                a_correctInput = true;
            }
        }
        else{
            flashcard_a.style.backgroundColor = "red";

            //adds class "shake" to flashcard class
            flashcard_a.classList.add("shake");
            setTimeout(function(){
                flashcard_a.classList.remove("shake");
              },500);

            //after input focuses on the next input
            document.getElementById("i").focus();
        }
    }    
}



//validateInput copies for all the 46 Hiragana characters
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function validateInput2(event){
    var i_correctInput = false;
    //validate ENTER key pressed
    if(event.key === "Enter"){
        let input_i = document.getElementById("i");
        let flashcard_i = document.getElementById("flashcard-i");

        //validates user input
        if(input_i.value === "i"){
            flashcard_i.style.backgroundColor = "lightgreen";

            //after input focuses on the next input
            document.getElementById("u").focus();

            if(i_correctInput === false){
                correctInputs++;
                i_correctInput = true;
            }
        }
        else{
            flashcard_i.style.backgroundColor = "red";

            //adds class "shake" to flashcard class
            flashcard_i.classList.add("shake");
            setTimeout(function(){
                flashcard_i.classList.remove("shake");
              },500);

            //after input focuses on the next input
            document.getElementById("u").focus();
        }
    }    
}


function validateInput3(event){
    var u_correctInput = false;
    //validate ENTER key pressed
    if(event.key === "Enter"){
        let input_u = document.getElementById("u");
        let flashcard_u = document.getElementById("flashcard-u");

        //validates user input
        if(input_u.value === "u"){
            flashcard_u.style.backgroundColor = "lightgreen";

            //after input focuses on the next input
            document.getElementById("e").focus();

            if(u_correctInput === false){
                correctInputs++;
                u_correctInput = true;
            }
        }
        else{
            flashcard_u.style.backgroundColor = "red";

            //adds class "shake" to flashcard class
            flashcard_u.classList.add("shake");
            setTimeout(function(){
                flashcard_u.classList.remove("shake");
              },500);

            //after input focuses on the next input
            document.getElementById("e").focus();
        }
    }    
}


function validateInput4(event){
    var e_correctInput = false;
    //validate ENTER key pressed
    if(event.key === "Enter"){
        let input_e = document.getElementById("e");
        let flashcard_e = document.getElementById("flashcard-e");

        //validates user input
        if(input_e.value === "e"){
            flashcard_e.style.backgroundColor = "lightgreen";

            //after input focuses on the next input
            document.getElementById("o").focus();

            if(e_correctInput === false){
                correctInputs++;
                e_correctInput = true;
            }
        }
        else{
            flashcard_e.style.backgroundColor = "red";

            //adds class "shake" to flashcard class
            flashcard_e.classList.add("shake");
            setTimeout(function(){
                flashcard_e.classList.remove("shake");
              },500);

            //after input focuses on the next input
            document.getElementById("o").focus();
        }
    }    
}


function validateInput5(event){
    var o_correctInput = false;
    //validate ENTER key pressed
    if(event.key === "Enter"){
        let input_o = document.getElementById("o");
        let flashcard_o = document.getElementById("flashcard-o");

        //validates user input
        if(input_o.value === "o"){
            flashcard_o.style.backgroundColor = "lightgreen";

            //after input focuses on the next input
            document.getElementById("ka").focus();

            if(o_correctInput === false){
                correctInputs++;
                o_correctInput = true;
            }
        }
        else{
            flashcard_o.style.backgroundColor = "red";

            //adds class "shake" to flashcard class
            flashcard_o.classList.add("shake");
            setTimeout(function(){
                flashcard_o.classList.remove("shake");
              },500);

            //after input focuses on the next input
            document.getElementById("ka").focus();
        }
    }    
}


//////////////////////////////////////////////////////////////////////////////////////////SECOND LINE



function validateInput6(event){
    var ka_correctInput = false;
    //validate ENTER key pressed
    if(event.key === "Enter"){
        let input_ka = document.getElementById("ka");
        let flashcard_ka = document.getElementById("flashcard-ka");

        //validates user input
        if(input_ka.value === "ka"){
            flashcard_ka.style.backgroundColor = "lightgreen";

            //after input focuses on the next input
            document.getElementById("ki").focus();

            if(ka_correctInput === false){
                correctInputs++;
                ka_correctInput = true;
            }
        }
        else{
            flashcard_ka.style.backgroundColor = "red";

            //adds class "shake" to flashcard class
            flashcard_ka.classList.add("shake");
            setTimeout(function(){
                flashcard_ka.classList.remove("shake");
              },500);

            //after input focuses on the next input
            document.getElementById("ki").focus();
        }
    }    
}


function validateInput7(event){
    var ki_correctInput = false;
    //validate ENTER key pressed
    if(event.key === "Enter"){
        let input_ki = document.getElementById("ki");
        let flashcard_ki = document.getElementById("flashcard-ki");

        //validates user input
        if(input_ki.value === "ki"){
            flashcard_ki.style.backgroundColor = "lightgreen";

            //after input focuses on the next input
            document.getElementById("ku").focus();

            if(ki_correctInput === false){
                correctInputs++;
                ki_correctInput = true;
            }
        }
        else{
            flashcard_ki.style.backgroundColor = "red";

            //adds class "shake" to flashcard class
            flashcard_ki.classList.add("shake");
            setTimeout(function(){
                flashcard_ki.classList.remove("shake");
              },500);

            //after input focuses on the next input
            document.getElementById("ku").focus();
        }
    }    
}


function validateInput8(event){
    var ku_correctInput = false;
    //validate ENTER key pressed
    if(event.key === "Enter"){
        let input_ku = document.getElementById("ku");
        let flashcard_ku = document.getElementById("flashcard-ku");

        //validates user input
        if(input_ku.value === "ku"){
            flashcard_ku.style.backgroundColor = "lightgreen";

            //after input focuses on the next input
            document.getElementById("ke").focus();

            if(ku_correctInput === false){
                correctInputs++;
                ku_correctInput = true;
            }
        }
        else{
            flashcard_ku.style.backgroundColor = "red";

            //adds class "shake" to flashcard class
            flashcard_ku.classList.add("shake");
            setTimeout(function(){
                flashcard_ku.classList.remove("shake");
              },500);

            //after input focuses on the next input
            document.getElementById("ke").focus();
        }
    }    
}


function validateInput9(event){
    var ke_correctInput = false;
    //validate ENTER key pressed
    if(event.key === "Enter"){
        let input_ke = document.getElementById("ke");
        let flashcard_ke = document.getElementById("flashcard-ke");

        //validates user input
        if(input_ke.value === "ke"){
            flashcard_ke.style.backgroundColor = "lightgreen";

            //after input focuses on the next input
            document.getElementById("ko").focus();

            if(ke_correctInput === false){
                correctInputs++;
                ke_correctInput = true;
            }
        }
        else{
            flashcard_ke.style.backgroundColor = "red";

            //adds class "shake" to flashcard class
            flashcard_ke.classList.add("shake");
            setTimeout(function(){
                flashcard_ke.classList.remove("shake");
              },500);

            //after input focuses on the next input
            document.getElementById("ko").focus();
        }
    }    
}


function validateInput10(event){
    var ko_correctInput = false;
    //validate ENTER key pressed
    if(event.key === "Enter"){
        let input_ko = document.getElementById("ko");
        let flashcard_ko = document.getElementById("flashcard-ko");

        //validates user input
        if(input_ko.value === "ko"){
            flashcard_ko.style.backgroundColor = "lightgreen";

            //after input focuses on the next input
            document.getElementById("sa").focus();

            if(ko_correctInput === false){
                correctInputs++;
                ko_correctInput = true;
            }
        }
        else{
            flashcard_ko.style.backgroundColor = "red";

            //adds class "shake" to flashcard class
            flashcard_ko.classList.add("shake");
            setTimeout(function(){
                flashcard_ko.classList.remove("shake");
              },500);

            //after input focuses on the next input
            document.getElementById("sa").focus();
        }
    }    
}


//////////////////////////////////////////////////////////////////////////////////////////THIRD LINE
function validateInput11(event){
    var sa_correctInput = false;
    //validate ENTER key pressed
    if(event.key === "Enter"){
        let input_sa = document.getElementById("sa");
        let flashcard_sa = document.getElementById("flashcard-sa");

        //validates user input
        if(input_sa.value === "sa"){
            flashcard_sa.style.backgroundColor = "lightgreen";

            //after input focuses on the next input
            document.getElementById("shi").focus();

            if(sa_correctInput === false){
                correctInputs++;
                sa_correctInput = true;
            }
        }
        else{
            flashcard_sa.style.backgroundColor = "red";

            //adds class "shake" to flashcard class
            flashcard_sa.classList.add("shake");
            setTimeout(function(){
                flashcard_sa.classList.remove("shake");
              },500);

            //after input focuses on the next input
            document.getElementById("shi").focus();
        }
    }    
}


function validateInput12(event){
    var shi_correctInput = false;
    //validate ENTER key pressed
    if(event.key === "Enter"){
        let input_shi = document.getElementById("shi");
        let flashcard_shi = document.getElementById("flashcard-shi");

        //validates user input
        if(input_shi.value === "shi"){
            flashcard_shi.style.backgroundColor = "lightgreen";

            //after input focuses on the next input
            document.getElementById("su").focus();

            if(shi_correctInput === false){
                correctInputs++;
                shi_correctInput = true;
            }
        }
        else{
            flashcard_shi.style.backgroundColor = "red";

            //adds class "shake" to flashcard class
            flashcard_shi.classList.add("shake");
            setTimeout(function(){
                flashcard_shi.classList.remove("shake");
              },500);

            //after input focuses on the next input
            document.getElementById("su").focus();
        }
    }    
}


function validateInput13(event){
    var su_correctInput = false;
    //validate ENTER key pressed
    if(event.key === "Enter"){
        let input_su = document.getElementById("su");
        let flashcard_su = document.getElementById("flashcard-su");

        //validates user input
        if(input_su.value === "su"){
            flashcard_su.style.backgroundColor = "lightgreen";

            //after input focuses on the next input
            document.getElementById("se").focus();

            if(su_correctInput === false){
                correctInputs++;
                su_correctInput = true;
            }
        }
        else{
            flashcard_su.style.backgroundColor = "red";

            //adds class "shake" to flashcard class
            flashcard_su.classList.add("shake");
            setTimeout(function(){
                flashcard_su.classList.remove("shake");
              },500);

            //after input focuses on the next input
            document.getElementById("se").focus();
        }
    }    
}


function validateInput14(event){
    var se_correctInput = false;
    //validate ENTER key pressed
    if(event.key === "Enter"){
        let input_se = document.getElementById("se");
        let flashcard_se = document.getElementById("flashcard-se");

        //validates user input
        if(input_se.value === "se"){
            flashcard_se.style.backgroundColor = "lightgreen";

            //after input focuses on the next input
            document.getElementById("so").focus();

            if(se_correctInput === false){
                correctInputs++;
                se_correctInput = true;
            }
        }
        else{
            flashcard_se.style.backgroundColor = "red";

            //adds class "shake" to flashcard class
            flashcard_se.classList.add("shake");
            setTimeout(function(){
                flashcard_se.classList.remove("shake");
              },500);

            //after input focuses on the next input
            document.getElementById("so").focus();
        }
    }    
}


function validateInput15(event){
    var so_correctInput = false;
    //validate ENTER key pressed
    if(event.key === "Enter"){
        let input_so = document.getElementById("so");
        let flashcard_so = document.getElementById("flashcard-so");

        //validates user input
        if(input_so.value === "so"){
            flashcard_so.style.backgroundColor = "lightgreen";

            //after input focuses on the next input
            document.getElementById("ta").focus();

            if(so_correctInput === false){
                correctInputs++;
                so_correctInput = true;
            }
        }
        else{
            flashcard_so.style.backgroundColor = "red";

            //adds class "shake" to flashcard class
            flashcard_so.classList.add("shake");
            setTimeout(function(){
                flashcard_so.classList.remove("shake");
              },500);

            //after input focuses on the next input
            document.getElementById("ta").focus();
        }
    }    
}


//////////////////////////////////////////////////////////////////////////////////////////FOURTH LINE
function validateInput16(event){
    var ta_correctInput = false;
    //validate ENTER key pressed
    if(event.key === "Enter"){
        let input_ta = document.getElementById("ta");
        let flashcard_ta = document.getElementById("flashcard-ta");

        //validates user input
        if(input_ta.value === "ta"){
            flashcard_ta.style.backgroundColor = "lightgreen";

            //after input focuses on the next input
            document.getElementById("chi").focus();

            if(ta_correctInput === false){
                correctInputs++;
                ta_correctInput = true;
            }
        }
        else{
            flashcard_ta.style.backgroundColor = "red";

            //adds class "shake" to flashcard class
            flashcard_ta.classList.add("shake");
            setTimeout(function(){
                flashcard_ta.classList.remove("shake");
              },500);

            //after input focuses on the next input
            document.getElementById("chi").focus();
        }
    }    
}


function validateInput17(event){
    var chi_correctInput = false;
    //validate ENTER key pressed
    if(event.key === "Enter"){
        let input_chi = document.getElementById("chi");
        let flashcard_chi = document.getElementById("flashcard-chi");

        //validates user input
        if(input_chi.value === "chi"){
            flashcard_chi.style.backgroundColor = "lightgreen";

            //after input focuses on the next input
            document.getElementById("tsu").focus();

            if(chi_correctInput === false){
                correctInputs++;
                chi_correctInput = true;
            }
        }
        else{
            flashcard_chi.style.backgroundColor = "red";

            //adds class "shake" to flashcard class
            flashcard_chi.classList.add("shake");
            setTimeout(function(){
                flashcard_chi.classList.remove("shake");
              },500);

            //after input focuses on the next input
            document.getElementById("tsu").focus();
        }
    }    
}


function validateInput18(event){
    var tsu_correctInput = false;
    //validate ENTER key pressed
    if(event.key === "Enter"){
        let input_tsu = document.getElementById("tsu");
        let flashcard_tsu = document.getElementById("flashcard-tsu");

        //validates user input
        if(input_tsu.value === "tsu"){
            flashcard_tsu.style.backgroundColor = "lightgreen";

            //after input focuses on the next input
            document.getElementById("te").focus();

            if(tsu_correctInput === false){
                correctInputs++;
                tsu_correctInput = true;
            }
        }
        else{
            flashcard_tsu.style.backgroundColor = "red";

            //adds class "shake" to flashcard class
            flashcard_tsu.classList.add("shake");
            setTimeout(function(){
                flashcard_tsu.classList.remove("shake");
              },500);

            //after input focuses on the next input
            document.getElementById("te").focus();
        }
    }    
}


function validateInput19(event){
    var te_correctInput = false;
    //validate ENTER key pressed
    if(event.key === "Enter"){
        let input_te = document.getElementById("te");
        let flashcard_te = document.getElementById("flashcard-te");

        //validates user input
        if(input_te.value === "te"){
            flashcard_te.style.backgroundColor = "lightgreen";

            //after input focuses on the next input
            document.getElementById("to").focus();

            if(te_correctInput === false){
                correctInputs++;
                te_correctInput = true;
            }
        }
        else{
            flashcard_te.style.backgroundColor = "red";

            //adds class "shake" to flashcard class
            flashcard_te.classList.add("shake");
            setTimeout(function(){
                flashcard_te.classList.remove("shake");
              },500);

            //after input focuses on the next input
            document.getElementById("to").focus();
        }
    }    
}


function validateInput20(event){
    var to_correctInput = false;
    //validate ENTER key pressed
    if(event.key === "Enter"){
        let input_to = document.getElementById("to");
        let flashcard_to = document.getElementById("flashcard-to");

        //validates user input
        if(input_to.value === "to"){
            flashcard_to.style.backgroundColor = "lightgreen";

            //after input focuses on the next input
            document.getElementById("na").focus();

            if(to_correctInput === false){
                correctInputs++;
                to_correctInput = true;
            }
        }
        else{
            flashcard_to.style.backgroundColor = "red";

            //adds class "shake" to flashcard class
            flashcard_to.classList.add("shake");
            setTimeout(function(){
                flashcard_to.classList.remove("shake");
              },500);

            //after input focuses on the next input
            document.getElementById("na").focus();
        }
    }    
}


//////////////////////////////////////////////////////////////////////////////////////////FIFTH LINE
function validateInput21(event){
    var na_correctInput = false;
    //validate ENTER key pressed
    if(event.key === "Enter"){
        let input_na = document.getElementById("na");
        let flashcard_na = document.getElementById("flashcard-na");

        //validates user input
        if(input_na.value === "na"){
            flashcard_na.style.backgroundColor = "lightgreen";

            //after input focuses on the next input
            document.getElementById("ni").focus();

            if(na_correctInput === false){
                correctInputs++;
                na_correctInput = true;
            }
        }
        else{
            flashcard_na.style.backgroundColor = "red";

            //adds class "shake" to flashcard class
            flashcard_na.classList.add("shake");
            setTimeout(function(){
                flashcard_na.classList.remove("shake");
              },500);

            //after input focuses on the next input
            document.getElementById("ni").focus();
        }
    }    
}


function validateInput22(event){
    var ni_correctInput = false;
    //validate ENTER key pressed
    if(event.key === "Enter"){
        let input_ni = document.getElementById("ni");
        let flashcard_ni = document.getElementById("flashcard-ni");

        //validates user input
        if(input_ni.value === "ni"){
            flashcard_ni.style.backgroundColor = "lightgreen";

            //after input focuses on the next input
            document.getElementById("nu").focus();

            if(ni_correctInput === false){
                correctInputs++;
                ni_correctInput = true;
            }
        }
        else{
            flashcard_ni.style.backgroundColor = "red";

            //adds class "shake" to flashcard class
            flashcard_ni.classList.add("shake");
            setTimeout(function(){
                flashcard_ni.classList.remove("shake");
              },500);

            //after input focuses on the next input
            document.getElementById("nu").focus();
        }
    }    
}


function validateInput23(event){
    var nu_correctInput = false;
    //validate ENTER key pressed
    if(event.key === "Enter"){
        let input_nu = document.getElementById("nu");
        let flashcard_nu = document.getElementById("flashcard-nu");

        //validates user input
        if(input_nu.value === "nu"){
            flashcard_nu.style.backgroundColor = "lightgreen";

            //after input focuses on the next input
            document.getElementById("ne").focus();

            if(nu_correctInput === false){
                correctInputs++;
                nu_correctInput = true;
            }
        }
        else{
            flashcard_nu.style.backgroundColor = "red";

            //adds class "shake" to flashcard class
            flashcard_nu.classList.add("shake");
            setTimeout(function(){
                flashcard_nu.classList.remove("shake");
              },500);

            //after input focuses on the next input
            document.getElementById("ne").focus();
        }
    }    
}


function validateInput24(event){
    var ne_correctInput = false;
    //validate ENTER key pressed
    if(event.key === "Enter"){
        let input_ne = document.getElementById("ne");
        let flashcard_ne = document.getElementById("flashcard-ne");

        //validates user input
        if(input_ne.value === "ne"){
            flashcard_ne.style.backgroundColor = "lightgreen";

            //after input focuses on the next input
            document.getElementById("no").focus();

            if(ne_correctInput === false){
                correctInputs++;
                ne_correctInput = true;
            }
        }
        else{
            flashcard_ne.style.backgroundColor = "red";

            //adds class "shake" to flashcard class
            flashcard_ne.classList.add("shake");
            setTimeout(function(){
                flashcard_ne.classList.remove("shake");
              },500);

            //after input focuses on the next input
            document.getElementById("no").focus();
        }
    }    
}


function validateInput25(event){
    var no_correctInput = false;
    //validate ENTER key pressed
    if(event.key === "Enter"){
        let input_no = document.getElementById("no");
        let flashcard_no = document.getElementById("flashcard-no");

        //validates user input
        if(input_no.value === "no"){
            flashcard_no.style.backgroundColor = "lightgreen";

            //after input focuses on the next input
            document.getElementById("ha").focus();

            if(no_correctInput === false){
                correctInputs++;
                no_correctInput = true;
            }
        }
        else{
            flashcard_no.style.backgroundColor = "red";

            //adds class "shake" to flashcard class
            flashcard_no.classList.add("shake");
            setTimeout(function(){
                flashcard_no.classList.remove("shake");
              },500);

            //after input focuses on the next input
            document.getElementById("ha").focus();
        }
    }    
}


//////////////////////////////////////////////////////////////////////////////////////////SIXTH LINE
function validateInput26(event){
    var ha_correctInput = false;
    //validate ENTER key pressed
    if(event.key === "Enter"){
        let input_ha = document.getElementById("ha");
        let flashcard_ha = document.getElementById("flashcard-ha");

        //validates user input
        if(input_ha.value === "ha"){
            flashcard_ha.style.backgroundColor = "lightgreen";

            //after input focuses on the next input
            document.getElementById("hi").focus();

            if(ha_correctInput === false){
                correctInputs++;
                ha_correctInput = true;
            }
        }
        else{
            flashcard_ha.style.backgroundColor = "red";

            //adds class "shake" to flashcard class
            flashcard_ha.classList.add("shake");
            setTimeout(function(){
                flashcard_ha.classList.remove("shake");
              },500);

            //after input focuses on the next input
            document.getElementById("hi").focus();
        }
    }    
}


function validateInput27(event){
    var hi_correctInput = false;
    //validate ENTER key pressed
    if(event.key === "Enter"){
        let input_hi = document.getElementById("hi");
        let flashcard_hi = document.getElementById("flashcard-hi");

        //validates user input
        if(input_hi.value === "hi"){
            flashcard_hi.style.backgroundColor = "lightgreen";

            //after input focuses on the next input
            document.getElementById("hu").focus();

            if(hi_correctInput === false){
                correctInputs++;
                hi_correctInput = true;
            }
        }
        else{
            flashcard_hi.style.backgroundColor = "red";

            //adds class "shake" to flashcard class
            flashcard_hi.classList.add("shake");
            setTimeout(function(){
                flashcard_hi.classList.remove("shake");
              },500);

            //after input focuses on the next input
            document.getElementById("hu").focus();
        }
    }    
}


function validateInput28(event){
    var hu_correctInput = false;
    //validate ENTER key pressed
    if(event.key === "Enter"){
        let input_hu = document.getElementById("hu");
        let flashcard_hu = document.getElementById("flashcard-hu");

        //validates user input
        if(input_hu.value === "hu"){
            flashcard_hu.style.backgroundColor = "lightgreen";

            //after input focuses on the next input
            document.getElementById("he").focus();

            if(hu_correctInput === false){
                correctInputs++;
                hu_correctInput = true;
            }
        }
        else{
            flashcard_hu.style.backgroundColor = "red";

            //adds class "shake" to flashcard class
            flashcard_hu.classList.add("shake");
            setTimeout(function(){
                flashcard_hu.classList.remove("shake");
              },500);

            //after input focuses on the next input
            document.getElementById("he").focus();
        }
    }    
}


function validateInput29(event){
    var he_correctInput = false;
    //validate ENTER key pressed
    if(event.key === "Enter"){
        let input_he = document.getElementById("he");
        let flashcard_he = document.getElementById("flashcard-he");

        //validates user input
        if(input_he.value === "he"){
            flashcard_he.style.backgroundColor = "lightgreen";

            //after input focuses on the next input
            document.getElementById("ho").focus();

            if(he_correctInput === false){
                correctInputs++;
                he_correctInput = true;
            }
        }
        else{
            flashcard_he.style.backgroundColor = "red";

            //adds class "shake" to flashcard class
            flashcard_he.classList.add("shake");
            setTimeout(function(){
                flashcard_he.classList.remove("shake");
              },500);

            //after input focuses on the next input
            document.getElementById("ho").focus();
        }
    }    
}


function validateInput30(event){
    var ho_correctInput = false;
    //validate ENTER key pressed
    if(event.key === "Enter"){
        let input_ho = document.getElementById("ho");
        let flashcard_ho = document.getElementById("flashcard-ho");

        //validates user input
        if(input_ho.value === "ho"){
            flashcard_ho.style.backgroundColor = "lightgreen";

            //after input focuses on the next input
            document.getElementById("ma").focus();

            if(ho_correctInput === false){
                correctInputs++;
                ho_correctInput = true;
            }
        }
        else{
            flashcard_ho.style.backgroundColor = "red";

            //adds class "shake" to flashcard class
            flashcard_ho.classList.add("shake");
            setTimeout(function(){
                flashcard_ho.classList.remove("shake");
              },500);

            //after input focuses on the next input
            document.getElementById("ma").focus();
        }
    }    
}


//////////////////////////////////////////////////////////////////////////////////////////SEVENTH LINE
function validateInput31(event){
    var ma_correctInput = false;
    //validate ENTER key pressed
    if(event.key === "Enter"){
        let input_ma = document.getElementById("ma");
        let flashcard_ma = document.getElementById("flashcard-ma");

        //validates user input
        if(input_ma.value === "ma"){
            flashcard_ma.style.backgroundColor = "lightgreen";

            //after input focuses on the next input
            document.getElementById("mi").focus();

            if(ma_correctInput === false){
                correctInputs++;
                ma_correctInput = true;
            }
        }
        else{
            flashcard_ma.style.backgroundColor = "red";

            //adds class "shake" to flashcard class
            flashcard_ma.classList.add("shake");
            setTimeout(function(){
                flashcard_ma.classList.remove("shake");
              },500);

            //after input focuses on the next input
            document.getElementById("mi").focus();
        }
    }    
}


function validateInput32(event){
    var mi_correctInput = false;
    //validate ENTER key pressed
    if(event.key === "Enter"){
        let input_mi = document.getElementById("mi");
        let flashcard_mi = document.getElementById("flashcard-mi");

        //validates user input
        if(input_mi.value === "mi"){
            flashcard_mi.style.backgroundColor = "lightgreen";

            //after input focuses on the next input
            document.getElementById("mu").focus();

            if(mi_correctInput === false){
                correctInputs++;
                mi_correctInput = true;
            }
        }
        else{
            flashcard_mi.style.backgroundColor = "red";

            //adds class "shake" to flashcard class
            flashcard_mi.classList.add("shake");
            setTimeout(function(){
                flashcard_mi.classList.remove("shake");
              },500);

            //after input focuses on the next input
            document.getElementById("mu").focus();
        }
    }    
}


function validateInput33(event){
    var mu_correctInput = false;
    //validate ENTER key pressed
    if(event.key === "Enter"){
        let input_mu = document.getElementById("mu");
        let flashcard_mu = document.getElementById("flashcard-mu");

        //validates user input
        if(input_mu.value === "mu"){
            flashcard_mu.style.backgroundColor = "lightgreen";

            //after input focuses on the next input
            document.getElementById("me").focus();

            if(mu_correctInput === false){
                correctInputs++;
                mu_correctInput = true;
            }
        }
        else{
            flashcard_mu.style.backgroundColor = "red";

            //adds class "shake" to flashcard class
            flashcard_mu.classList.add("shake");
            setTimeout(function(){
                flashcard_mu.classList.remove("shake");
              },500);

            //after input focuses on the next input
            document.getElementById("me").focus();
        }
    }    
}


function validateInput34(event){
    var me_correctInput = false;
    //validate ENTER key pressed
    if(event.key === "Enter"){
        let input_me = document.getElementById("me");
        let flashcard_me = document.getElementById("flashcard-me");

        //validates user input
        if(input_me.value === "me"){
            flashcard_me.style.backgroundColor = "lightgreen";

            //after input focuses on the next input
            document.getElementById("mo").focus();

            if(me_correctInput === false){
                correctInputs++;
                me_correctInput = true;
            }
        }
        else{
            flashcard_me.style.backgroundColor = "red";

            //adds class "shake" to flashcard class
            flashcard_me.classList.add("shake");
            setTimeout(function(){
                flashcard_me.classList.remove("shake");
              },500);

            //after input focuses on the next input
            document.getElementById("mo").focus();
        }
    }    
}


function validateInput35(event){
    var mo_correctInput = false;
    //validate ENTER key pressed
    if(event.key === "Enter"){
        let input_mo = document.getElementById("mo");
        let flashcard_mo = document.getElementById("flashcard-mo");

        //validates user input
        if(input_mo.value === "mo"){
            flashcard_mo.style.backgroundColor = "lightgreen";

            //after input focuses on the next input
            document.getElementById("ra").focus();

            if(mo_correctInput === false){
                correctInputs++;
                mo_correctInput = true;
            }
        }
        else{
            flashcard_mo.style.backgroundColor = "red";

            //adds class "shake" to flashcard class
            flashcard_mo.classList.add("shake");
            setTimeout(function(){
                flashcard_mo.classList.remove("shake");
              },500);

            //after input focuses on the next input
            document.getElementById("ra").focus();
        }
    }    
}


//////////////////////////////////////////////////////////////////////////////////////////EIGHTH LINE
function validateInput36(event){
    var ra_correctInput = false;
    //validate ENTER key pressed
    if(event.key === "Enter"){
        let input_ra = document.getElementById("ra");
        let flashcard_ra = document.getElementById("flashcard-ra");

        //validates user input
        if(input_ra.value === "ra"){
            flashcard_ra.style.backgroundColor = "lightgreen";

            //after input focuses on the next input
            document.getElementById("ri").focus();

            if(ra_correctInput === false){
                correctInputs++;
                ra_correctInput = true;
            }
        }
        else{
            flashcard_ra.style.backgroundColor = "red";

            //adds class "shake" to flashcard class
            flashcard_ra.classList.add("shake");
            setTimeout(function(){
                flashcard_ra.classList.remove("shake");
              },500);

            //after input focuses on the next input
            document.getElementById("ri").focus();
        }
    }    
}


function validateInput37(event){
    var ri_correctInput = false;
    //validate ENTER key pressed
    if(event.key === "Enter"){
        let input_ri = document.getElementById("ri");
        let flashcard_ri = document.getElementById("flashcard-ri");

        //validates user input
        if(input_ri.value === "ri"){
            flashcard_ri.style.backgroundColor = "lightgreen";

            //after input focuses on the next input
            document.getElementById("ru").focus();

            if(ri_correctInput === false){
                correctInputs++;
                ri_correctInput = true;
            }
        }
        else{
            flashcard_ri.style.backgroundColor = "red";

            //adds class "shake" to flashcard class
            flashcard_ri.classList.add("shake");
            setTimeout(function(){
                flashcard_ri.classList.remove("shake");
              },500);

            //after input focuses on the next input
            document.getElementById("ru").focus();
        }
    }    
}


function validateInput38(event){
    var ru_correctInput = false;
    //validate ENTER key pressed
    if(event.key === "Enter"){
        let input_ru = document.getElementById("ru");
        let flashcard_ru = document.getElementById("flashcard-ru");

        //validates user input
        if(input_ru.value === "ru"){
            flashcard_ru.style.backgroundColor = "lightgreen";

            //after input focuses on the next input
            document.getElementById("re").focus();

            if(ru_correctInput === false){
                correctInputs++;
                ru_correctInput = true;
            }
        }
        else{
            flashcard_ru.style.backgroundColor = "red";

            //adds class "shake" to flashcard class
            flashcard_ru.classList.add("shake");
            setTimeout(function(){
                flashcard_ru.classList.remove("shake");
              },500);

            //after input focuses on the next input
            document.getElementById("re").focus();
        }
    }    
}


function validateInput39(event){
    var re_correctInput = false;
    //validate ENTER key pressed
    if(event.key === "Enter"){
        let input_re = document.getElementById("re");
        let flashcard_re = document.getElementById("flashcard-re");

        //validates user input
        if(input_re.value === "re"){
            flashcard_re.style.backgroundColor = "lightgreen";

            //after input focuses on the next input
            document.getElementById("ro").focus();

            if(re_correctInput === false){
                correctInputs++;
                re_correctInput = true;
            }
        }
        else{
            flashcard_re.style.backgroundColor = "red";

            //adds class "shake" to flashcard class
            flashcard_re.classList.add("shake");
            setTimeout(function(){
                flashcard_re.classList.remove("shake");
              },500);

            //after input focuses on the next input
            document.getElementById("ro").focus();
        }
    }    
}


function validateInput40(event){
    var ro_correctInput = false;
    //validate ENTER key pressed
    if(event.key === "Enter"){
        let input_ro = document.getElementById("ro");
        let flashcard_ro = document.getElementById("flashcard-ro");

        //validates user input
        if(input_ro.value === "ro"){
            flashcard_ro.style.backgroundColor = "lightgreen";

            //after input focuses on the next input
            document.getElementById("ya").focus();

            if(ro_correctInput === false){
                correctInputs++;
                ro_correctInput = true;
            }
        }
        else{
            flashcard_ro.style.backgroundColor = "red";

            //adds class "shake" to flashcard class
            flashcard_ro.classList.add("shake");
            setTimeout(function(){
                flashcard_ro.classList.remove("shake");
              },500);

            //after input focuses on the next input
            document.getElementById("ya").focus();
        }
    }    
}


//////////////////////////////////////////////////////////////////////////////////////////NINETH LINE
function validateInput41(event){
    var ya_correctInput = false;
    //validate ENTER key pressed
    if(event.key === "Enter"){
        let input_ya = document.getElementById("ya");
        let flashcard_ya = document.getElementById("flashcard-ya");

        //validates user input
        if(input_ya.value === "ya"){
            flashcard_ya.style.backgroundColor = "lightgreen";

            //after input focuses on the next input
            document.getElementById("yu").focus();

            if(ya_correctInput === false){
                correctInputs++;
                ya_correctInput = true;
            }
        }
        else{
            flashcard_ya.style.backgroundColor = "red";

            //adds class "shake" to flashcard class
            flashcard_ya.classList.add("shake");
            setTimeout(function(){
                flashcard_ya.classList.remove("shake");
              },500);

            //after input focuses on the next input
            document.getElementById("yu").focus();
        }
    }    
}


function validateInput42(event){
    var yu_correctInput = false;
    //validate ENTER key pressed
    if(event.key === "Enter"){
        let input_yu = document.getElementById("yu");
        let flashcard_yu = document.getElementById("flashcard-yu");

        //validates user input
        if(input_yu.value === "yu"){
            flashcard_yu.style.backgroundColor = "lightgreen";

            //after input focuses on the next input
            document.getElementById("yo").focus();

            if(yu_correctInput === false){
                correctInputs++;
                yu_correctInput = true;
            }
        }
        else{
            flashcard_yu.style.backgroundColor = "red";

            //adds class "shake" to flashcard class
            flashcard_yu.classList.add("shake");
            setTimeout(function(){
                flashcard_yu.classList.remove("shake");
              },500);

            //after input focuses on the next input
            document.getElementById("yo").focus();
        }
    }    
}


function validateInput43(event){
    var yo_correctInput = false;
    //validate ENTER key pressed
    if(event.key === "Enter"){
        let input_yo = document.getElementById("yo");
        let flashcard_yo = document.getElementById("flashcard-yo");

        //validates user input
        if(input_yo.value === "yo"){
            flashcard_yo.style.backgroundColor = "lightgreen";

            //after input focuses on the next input
            document.getElementById("wa").focus();

            if(yo_correctInput === false){
                correctInputs++;
                yo_correctInput = true;
            }
        }
        else{
            flashcard_yo.style.backgroundColor = "red";

            //adds class "shake" to flashcard class
            flashcard_yo.classList.add("shake");
            setTimeout(function(){
                flashcard_yo.classList.remove("shake");
              },500);

            //after input focuses on the next input
            document.getElementById("wa").focus();
        }
    }    
}


//////////////////////////////////////////////////////////////////////////////////////////TENTH LINE
function validateInput44(event){
    var wa_correctInput = false;
    //validate ENTER key pressed
    if(event.key === "Enter"){
        let input_wa = document.getElementById("wa");
        let flashcard_wa = document.getElementById("flashcard-wa");

        //validates user input
        if(input_wa.value === "wa"){
            flashcard_wa.style.backgroundColor = "lightgreen";

            //after input focuses on the next input
            document.getElementById("wo").focus();

            if(wa_correctInput === false){
                correctInputs++;
                wa_correctInput = true;
            }
        }
        else{
            flashcard_wa.style.backgroundColor = "red";

            //adds class "shake" to flashcard class
            flashcard_wa.classList.add("shake");
            setTimeout(function(){
                flashcard_wa.classList.remove("shake");
              },500);

            //after input focuses on the next input
            document.getElementById("wo").focus();
        }
    }    
}


function validateInput45(event){
    var wo_correctInput = false;
    //validate ENTER key pressed
    if(event.key === "Enter"){
        let input_wo = document.getElementById("wo");
        let flashcard_wo = document.getElementById("flashcard-wo");

        //validates user input
        if(input_wo.value === "wo"){
            flashcard_wo.style.backgroundColor = "lightgreen";

            //after input focuses on the next input
            document.getElementById("n").focus();

            if(wo_correctInput === false){
                correctInputs++;
                wo_correctInput = true;
            }
        }
        else{
            flashcard_wo.style.backgroundColor = "red";

            //adds class "shake" to flashcard class
            flashcard_wo.classList.add("shake");
            setTimeout(function(){
                flashcard_wo.classList.remove("shake");
              },500);

            //after input focuses on the next input
            document.getElementById("n").focus();
        }
    }    
}


function validateInput46(event){
    var n_correctInput = false;
    //validate ENTER key pressed
    if(event.key === "Enter"){
        let input_n = document.getElementById("n");
        let flashcard_n = document.getElementById("flashcard-n");

        //validates user input
        if(input_n.value === "n"){
            flashcard_n.style.backgroundColor = "lightgreen";

            //after input focuses on the submit button
            document.getElementById("submit_score_hiragana").focus();


            if(n_correctInput === false){
                correctInputs++;
                n_correctInput = true;
            }
        }
        else{
            flashcard_n.style.backgroundColor = "red";

            //adds class "shake" to flashcard class
            flashcard_n.classList.add("shake");
            setTimeout(function(){
                flashcard_n.classList.remove("shake");
              },500);

            //after input focuses on the submit button
            document.getElementById("submit_score_hiragana").focus();
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






















//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//teste
//criar array de objetos em que cada objeto vai ter id_flashcard, input e answer (string)
function validateInput48(event, id, answer, id_flashcard, id_flashcard_next){
    var ya_correctInput = false;
    //validate ENTER key pressed
    if(event.key === "Enter"){
        let input_ya = document.getElementById(id);
        let flashcard_ya = document.getElementById(id_flashcard);

        //validates user input
        if(input_ya.value === answer){
            flashcard_ya.style.backgroundColor = "lightgreen";

            //after input focuses on the next input
            document.getElementById(id_flashcard_next).focus();

            if(ya_correctInput === false){
                correctInputs++;
                ya_correctInput = true;
            }
        }
        else{
            flashcard_ya.style.backgroundColor = "red";

            //adds class "shake" to flashcard class
            flashcard_ya.classList.add("shake");
            setTimeout(function(){
                flashcard_ya.classList.remove("shake");
              },500);

            //after input focuses on the next input
            document.getElementById("yu").focus();
        }
    }    
}






