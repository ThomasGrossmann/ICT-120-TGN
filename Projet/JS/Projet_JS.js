/*
    Programme : Projet_JS
    Auteur : Thomas Grossmann
    Date : 10.11.2019
*/

document.addEventListener('DOMContentLoaded', init)

function init() {
    btnact.addEventListener('click', clickWrongBtn)
    btntra.addEventListener('click', clickWrongBtn)
    btnpar.addEventListener('click', clickWrongBtn)
    btnajo.addEventListener('click', ClickAjouter)
    btnret.addEventListener('click', ClickRetirer)
    checkDep.addEventListener('click', ClickDep)
    checkArr.addEventListener('click', ClickArr)
    chambres.addEventListener('change', displayListe)
    //chambres.addEventListener('change',AddChambre)
}

//Fonction qui fait un popup si on clique sur le mauvais bouton du menu
function clickWrongBtn() {
    alert("Cette section n'est pas développée ! Cliquez sur Hébergements");
}

//Fonction qui ajoute un élève dans la chambre (popup de confirmation et indication de l'erreur si on n'écrit rien dans l'input
function ClickAjouter() {
        if (elevename.value == !elevename) {
            alert("Veuillez entrer un nom.")
            elevename.classList.add("errorinput")
        } else {
            if (confirm("Voulez-vous vraiment ajouter cet élève ?")) {
                var x = document.getElementById("listeEleve1")
                var option = document.createElement("option")
                option.text = elevename.value
                x.add(option)
                elevename.classList.remove("errorinput")
                elevename.value = ""
            }
        }
    }

//Fonction que retire un élève de la chambre (popup de confirmation et popup d'erreur lorsqu'aucun élève n'est sélectionné
    function ClickRetirer() {
        var a = document.getElementById("listeEleve1").selectedIndex
        if (a === -1) {
            alert("Veuillez choisir un élève à retirer de la chambre.")
        } else {
            if (confirm("Voulez-vous vraiment retirer cet élève ?")) {
                var x = document.getElementById("listeEleve1")
                x.remove(x.selectedIndex)
                elevename.value = ""
            }
        }
}

//Fonction qui affiche la checklist de départ
function ClickDep() {
    DivDepart.classList.remove("invisible")
    DivArrivee.classList.add("invisible")
}

//Fonction qui affiche la checklist d'arrivée
function ClickArr() {
    DivArrivee.classList.remove("invisible")
    DivDepart.classList.add("invisible")
}

//Fonction qui affiche la liste d'élèves présents dans la chambre
function displayListe() {
    var x = document.getElementById("chambres").selectedIndex
    if (x === 1) {
        listeEleve1.classList.remove("invisible")
        listeEleve2.classList.add("invisible")
        listeEleve3.classList.add("invisible")
        elevename.disabled = false
    } else if (x === 2) {
        listeEleve1.classList.add("invisible")
        listeEleve2.classList.remove("invisible")
        listeEleve3.classList.add("invisible")
        elevename.disabled = false
    } else if (x === 3) {
        listeEleve1.classList.add("invisible")
        listeEleve2.classList.add("invisible")
        listeEleve3.classList.remove("invisible")
        elevename.disabled = false
    } else {
        listeEleve1.classList.add("invisible")
        listeEleve2.classList.add("invisible")
        listeEleve3.classList.add("invisible")
        elevename.disabled = true
    }
}

/*
Je voulais faire en sorte de créer la liste d'élève lorsque l'on choisit les chambres grâce à un switch (voir fonction ci-dessous)
(ça les crée normalement mais lorsque je choisis à nouveau la chambre, elle recrée la liste d'élèves une nouvelle fois)
alors j'ai décidé de mettre cette fonctionnalité de côté par manque de temps

//Fontion qui crée les <option> dans la liste des élèves de la chambre sélectionnée
function AddChambre() {
    var x = document.getElementById("chambres").selectedIndex;
    switch (x) {
        case 0:
            listeEleve1.classList.remove("invisible")
            listeEleve2.classList.add("invisible")
            listeEleve3.classList.add("invisible")
            break;
        case 1:
            newopt1_1 = document.createElement('option')
            newopt1_1.innerText = "Benoît"
            newopt1_2 = document.createElement('option')
            newopt1_2.innerText = "Miguel"
            newopt1_3 = document.createElement('option')
            newopt1_3.innerText = "Johnny"
            newopt1_4 = document.createElement('option')
            newopt1_4.innerText = "Marwan"

            listeEleve2.appendChild(newopt1_1)
            listeEleve2.appendChild(newopt1_2)
            listeEleve2.appendChild(newopt1_3)
            listeEleve2.appendChild(newopt1_4)

            listeEleve1.classList.add("invisible")
            listeEleve2.classList.remove("invisible")
            listeEleve3.classList.add("invisible")
            break;
        case 2:
            newopt2_1 = document.createElement('option')
            newopt2_1.innerText = "Samuel"
            newopt2_2 = document.createElement('option')
            newopt2_2.innerText = "Simon"
            newopt2_3 = document.createElement('option')
            newopt2_3.innerText = "Altin"

            listeEleve3.appendChild(newopt2_1)
            listeEleve3.appendChild(newopt2_2)
            listeEleve3.appendChild(newopt2_3)

            listeEleve1.classList.add("invisible")
            listeEleve2.classList.add("invisible")
            listeEleve3.classList.remove("invisible")
            break;
    }
}*/
