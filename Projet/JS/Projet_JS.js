/*
    Programme : Projet_JS
    Auteur : Thomas Grossmann
    Date : 08.11.2019
*/
document.addEventListener('DOMContentLoaded', init)
function init() {
    checkDep.addEventListener('click', clickDep())
}

function clickDep() {
    console.log();
    DivDepart.style.visibility = "show"
}