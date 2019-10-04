/*
    Programme : Exercice Eva
    Auteur : Thomas Grossmann
    Date : 04.10.2019
*/
document.addEventListener('DOMContentLoaded', init)
function init() {
    bluetraced.addEventListener('click', Div1Click)
    clearDiv1.addEventListener('click', ClearDiv1)
    fontArial.addEventListener('mouseover', FontArial)
    fontArial.addEventListener('mouseleave', FontArial2)
    YES.addEventListener('click', Yes)
    Clicktext.addEventListener('click', ClickText)
}

function Div1Click() {
    bluetraced.style.backgroundColor = "lightblue"
    bluetraced.style.textDecoration = "line-through"
}

function ClearDiv1() {
    bluetraced.style.backgroundColor = "white"
    bluetraced.style.textDecoration = "none"
}

function FontArial() {
    fontArial.style.fontFamily = "arial"
}

function FontArial2() {
    fontArial.style.fontFamily = ""
}

function Yes() {
    if(YES1.checked&&YES2.checked){
        YES.style.backgroundColor="green"               //
        YES.style.color="white"
        YES.style.border="solid 0px black"                                  //Retirer la bordure
        document.getElementById("YES").innerHTML=("<p>YES<\p>")
    }
}

function ClickText() {
    Delete.style.display = "none"
}