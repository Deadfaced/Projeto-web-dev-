let navbar = document.getElementById("navbar");
let logo = document.getElementById("logo");
let logo2 = document.getElementById("logo2");
let img = document.getElementById("img");
let img2 = document.getElementById("img2");

logo.addEventListener("mouseover", () => {
    navbar.style.width = "75%";
    img.style.width = "75px";
    img.style.height = "75px";
    img2.style.height = "75px";
    img2.style.width = "75px";
})
logo.addEventListener("mouseout", () => {
    navbar.style.width = "50%"; 
    img.style.width = "50px"; 
    img.style.height = "50px";
    img2.style.height = "50px";
    img2.style.width = "50px";
})

logo2.addEventListener("mouseover", () => {
    navbar.style.width = "75%";
    img.style.width = "75px";
    img.style.height = "75px";
    img2.style.height = "75px";
    img2.style.width = "75px";
})
logo2.addEventListener("mouseout", () => {
    navbar.style.width = "50%"; 
    img.style.width = "50px"; 
    img.style.height = "50px";
    img2.style.height = "50px";
    img2.style.width = "50px";
})








const qualq = document.getElementById("filtro");
const card = document.querySelectorAll(".option");

card.forEach(element => {
    element.addEventListener("mouseover", () =>{
        qualq.style.zIndex = "1000";
    })
    element.addEventListener("mouseout", () =>{
        qualq.style.zIndex = "-1000";
    })
});
