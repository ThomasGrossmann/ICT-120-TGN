/*
    Programme : Exercice Eva
    Auteur : Thomas Grossmann
    Date : 04.10.2019
*/
document.addEventListener('DOMContentLoaded', init)
function init() {                                                   //Initialisation de toutes les fonctions
    bluetraced.addEventListener('click', Div1Click)
    clearDiv1.addEventListener('click', ClearDiv1)
    fontArial.addEventListener('mouseover', FontArial)
    fontArial.addEventListener('mouseleave', FontArial2)
    YES.addEventListener('click', Yes)
    Clicktext.addEventListener('click', ClickText)
    nomprenom.addEventListener('keyup', Initiales)
    partez.style.display="none"
    avosmarques.addEventListener('click', AVosMarques)
    pret.addEventListener('click', Pret)
    partez.addEventListener('click', Partez)
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
        YES.style.backgroundColor="green"
        YES.style.color="white"
        YES.style.border="solid 0px black"
        document.getElementById("YES").innerHTML=("<p>YES<\p>")
    }
}

function ClickText() {
    var node = document.getElementById("DivDelete");
    if (node.parentNode) {
        node.parentNode.removeChild(node);
    }
}

function Initiales() {
    var Initiales = ""
    var Espace = 0
    var Longueur = ""
    Initiales = nomprenom.value.substr(0,1)
    Espace = nomprenom.value.lastIndexOf(" ")
    Initiales = Initiales + nomprenom.value.substr(Espace+1, 1)
    Longueur = nomprenom.value.length
    Initiales = Initiales + nomprenom.value.substr(Longueur -1, 1)
    initiales.value = Initiales.toUpperCase()
}

function AVosMarques() {
    avosmarques.disabled = true
    pret.disabled = false
    partez.style.display = "inline"
    partez.disabled = true
    myImage1.src="Images/marks.png"

}

function Pret() {
    avosmarques.style.display = "none"
    pret.disabled = true
    partez.disabled = false
    myImage1.src="Images/set.png"
}

function Partez() {
    avosmarques.style.display = "none"
    pret.style.display = "none"
    partez.disabled = true
    myImage1.src="Images/go.png"
    setTimeout(
        () => {
            myImage1.src="Images/empty.png"
            avosmarques.style.display = "inline"
            avosmarques.disabled = false
            pret.style.display = "inline"
            partez.style.display = "none"
        },
        3 * 1000
    );

}