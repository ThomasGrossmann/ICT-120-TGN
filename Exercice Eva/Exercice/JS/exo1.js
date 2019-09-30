document.addEventListener('DOMContentLeaded', init)
function init() {
    bluetraced.addEventListener('click', Div1Click)
    clearDiv1.addEventListener('click', ClearDiv1)
    fontArial.addEventListener('mouseover', FontArial)
    fontArial.addEventListener('mouseleave', FontArial2)
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


