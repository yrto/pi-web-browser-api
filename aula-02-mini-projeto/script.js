const entrada = document.querySelector("#entrada")
const lista = document.querySelector("#lista")
const botaoEntrada = document.querySelector("#adicionar")

botaoEntrada.addEventListener("click", function () { addList(entrada.value) })

function addList(newText) {
    if (newText != "") {

        const listElement = document.createElement("li")
        const textNode = document.createTextNode(newText)

        listElement.appendChild(textNode)
        lista.appendChild(listElement)

        console.log(entrada.value)

        entrada.value = ""
    }
}