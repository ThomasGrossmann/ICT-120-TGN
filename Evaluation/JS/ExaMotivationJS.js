/*
    Projet : Examen ICT 120
    Auteur : Thomas Grossmann
    Date : 15.11.2019
*/

document.addEventListener('DOMContentLoaded', init)

function init() {
    alert(window.location.search)
    description.addEventListener("keyup", BtnOK)
    description.addEventListener("keyup", CaracteresRestant)
}

//Fonction qui permet d'activer le bouton Ok lorsque la longueur du texte est plus grand que 30 caractÃ¨res
function BtnOK() {
    var x = document.getElementById("description").value.length         //Longueur de la textarea
    if (x < 30){
        btnOK.classList.add("invisible")
    } else {
        btnOK.classList.remove("invisible")
    }
}

//Fonction qui permet d'afficher les caractÃ¨res restants (et d'afficher l'erreur de longueur)
function CaracteresRestant() {
    var x = document.getElementById("description").value.length         //Longueur de la textarea
    var Left = 0
    var max = 144
    description.maxLength = max         //Longueur maximum du texte
    if (x < 30){
        DescShort.classList.remove("invisible")
        DescShort.classList.add("ErrorInput")
        CarLeft.classList.add("invisible")
    } else {
        DescShort.classList.add("invisible")
        DescShort.classList.remove("ErrorInput")
        CarLeft.classList.remove("invisible")
        Left = max - x
        document.getElementById("car").innerText = Left         //Met Ã  jour le nombre de caractÃ¨res restants
    }
}