const entrada = document.querySelector("#entrada")
const lista = document.querySelector("#lista")
const botaoEntrada = document.querySelector("#adicionar")

botaoEntrada.addEventListener("click", function () { addList(entrada.value) })

function addList(newText) {
    if (newText != "") {

        const listElement = document.createElement("li")
        const textNode = document.createTextNode(newText)

        listElement.appendChild(textNode)
        listElement.classList.add("list-group-item")
        lista.appendChild(listElement)

        entrada.value = ""
    }
}