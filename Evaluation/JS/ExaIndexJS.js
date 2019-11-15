/*
    Projet : Examen ICT 120
    Auteur : Thomas Grossmann
    Date : 15.11.2019
*/

document.addEventListener('DOMContentLoaded', init)

function init() {
    txtFirstName.addEventListener("change", Fisrtname)
    txtLastName.addEventListener("change", Lastname)
    Password.addEventListener("change", password)
    PasswordConfirm.addEventListener("change", PasswordConfirmation)
    PasswordConfirm.addEventListener("change", Submit)
    Password.addEventListener("change", Submit)
    txtFirstName.addEventListener("change", Submit)
    txtLastName.addEventListener("change", Submit)
}

//Fonction qui permet de vérifier la longueur du prénom (et d'afficher l'erreur)
function Fisrtname() {
    if (txtFirstName.value.length < 2) {
        FirstnameShort.classList.remove("invisible")
        FirstnameShort.classList.add("ErrorInput")
    } else {
        FirstnameShort.classList.add("invisible")
        FirstnameShort.classList.remove("ErrorInput")
    }
}

//Fonction qui permet de vérifier la longueur du nom de famille (et d'afficher l'erreur)
function Lastname() {
    if (txtLastName.value.length < 2){
        LastnameShort.classList.remove("invisible")
        LastnameShort.classList.add("ErrorInput")
    } else {
        LastnameShort.classList.add("invisible")
        LastnameShort.classList.remove("ErrorInput")
    }
}

//Fonction qui permet de vérifier la longueur du mot de passe
function password() {
    if (Password.value.length < 6){
        PasswordMin.classList.remove("invisible")
        PasswordMin.classList.add("ErrorInput")
    } else {
        PasswordMin.classList.add("invisible")
        PasswordMin.classList.remove("ErrorInput")
    }
}

//Fonction qui permet de vérifier si les mots de passes sont identiques (et d'afficher l'erreur)
function PasswordConfirmation() {
    if (PasswordConfirm.value === Password.value){
        PasswordDif.classList.add("invisible")
        PasswordDif.classList.remove("ErrorInput")
    } else {
        PasswordDif.classList.remove("invisible")
        PasswordDif.classList.add("ErrorInput")
    }
}

//Fonction qui permet de rendre le bouton Envoyer actif si tous les champs respectent les conditions
function Submit() {
    var firstname = document.getElementById("txtFirstName").value.length
    var lastname = document.getElementById("txtLastName").value.length
    var Password = document.getElementById("Password").value
    var PasswordConf = document.getElementById("PasswordConfirm").value

    if (firstname >= 2 && lastname >= 2 && Password >= 6 && Password == PasswordConf){
        btnEnvoyer.disabled = false
    }
}