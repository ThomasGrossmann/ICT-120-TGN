/*
    Programme : Projet_JS
    Auteur : Thomas Grossmann
    Date : 08.11.2019
*/
document.addEventListener('DOMContentLoaded', init)
function init() {
    btnact.addEventListener('click', clickAct);
    btntra.addEventListener('click', clickTra);
    btnpar.addEventListener('click', clickPar);
    btnajo.addEventListener('click', ClickAjouter)
    btnret.addEventListener('click', ClickRetirer)
    checkDep.addEventListener('click', ClickDep)
    checkArr.addEventListener('click', ClickArr)
    //chambres.addEventListener('change',AddChambre)
}

function clickAct() {
    alert("Cette section n'est pas développée ! Cliquez sur Hébergements");
}

function clickTra() {
    alert("Cette section n'est pas développée ! Cliquez sur Hébergements");
}

function clickPar() {
    alert("Cette section n'est pas développée ! Cliquez sur Hébergements");
}

function ClickAjouter() {
    if(elevename.value == !elevename){
        alert("Veuillez entrer un nom.")
        elevename.classList.add("errorinput")
    }else{
        if (confirm("Voulez-vous vraiment ajouter cet élève ?")){
            var x = document.getElementById("listeEleve1");
            var option = document.createElement("option");
            option.text = elevename.value;
            x.add(option);
            elevename.classList.remove("errorinput")
            elevename.value = "";
        }
    }
}

function ClickRetirer() {
    var a = document.getElementById("listeEleve1").selectedIndex
    if (a === -1){
        alert("Veuillez choisir un élève à retirer de la chambre.")
    }else{
        if(confirm("Voulez-vous vraiment retirer cet élève ?")){
            var x = document.getElementById("listeEleve1")
            x.remove(x.selectedIndex)
            elevename.value = ""
        }
    }
}

function ClickDep() {
    DivDepart.classList.remove("invisible")
    DivArrivee.classList.add("invisible")
}

function ClickArr() {
    DivArrivee.classList.remove("invisible")
    DivDepart.classList.add("invisible")
}

/*
Je voulais faire en sorte de créer la liste d'élève lorsque l'on choisit les chambres grâce à un switch (voir fonction ci-dessous)
(ça les crée normalement mais lorsque je choisis à nouveau la chambre, elle recrée la liste d'élèves une nouvelle fois)
alors j'ai décidé de mettre cette fonctionnalité de côté par manque de temps


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
