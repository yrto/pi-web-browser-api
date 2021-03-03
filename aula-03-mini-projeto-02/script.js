const campoEntrada = document.querySelector("#formulario-entrada input")
const botaoEntrada = document.querySelector("#formulario-entrada button")
const tarefasAbertas = document.querySelector(".tarefas-abertas ul")
const tarefasConcluidas = document.querySelector(".tarefas-concluidas ul")

campoEntrada.focus() // abre a página com o input selecionado

const tarefaAbertaActions = `<span class="action-buttons"><a href="#" class="concluir-tarefa"><i class="fas fa-check"></i></a><a href="#" class="remover-tarefa"><i class="fas fa-times"></i></a><span>`
const tarefaConcluidaActions = `<span class="action-buttons"><a href="#" class="desconcluir-tarefa"><i class="fas fa-undo"></i></a><span>`

const criarTarefa = entrada => {
    if (entrada.value != "") {
        const novaTarefa = document.createElement("li")
        const novoTexto = document.createTextNode(entrada.value)
        novaTarefa.appendChild(novoTexto)
        entrada.value = ""
        return novaTarefa
    }
}

const adicionarTarefa = (lista, item, actions) => {
    item.innerHTML += actions
    lista.appendChild(item)
}

const removerTarefa = evt => {
    if (evt.target.parentNode.className === "remover-tarefa") {
        const item = evt.target.parentNode.parentNode.parentNode
        item.remove()
    }
}

const concluirTarefa = evt => {
    if (evt.target.parentNode.className === "concluir-tarefa") {
        const actions = evt.target.parentNode.parentNode
        const item = evt.target.parentNode.parentNode.parentNode
        actions.remove()
        item.remove()
        adicionarTarefa(tarefasConcluidas, item, tarefaConcluidaActions)
    }
}

const desconcluirTarefa = evt => {
    if (evt.target.parentNode.className === "desconcluir-tarefa") {
        const actions = evt.target.parentNode.parentNode
        const item = evt.target.parentNode.parentNode.parentNode
        actions.remove()
        item.remove()
        adicionarTarefa(tarefasAbertas, item, tarefaAbertaActions)
    }
}

const addByClick = evt => {
    evt.preventDefault()
    if (campoEntrada.value != "") adicionarTarefa(tarefasAbertas, criarTarefa(campoEntrada), tarefaAbertaActions)
}

const addByEnter = evt => {
    if (evt.keyCode === 13) {
        evt.preventDefault()
        if (campoEntrada.value != "") adicionarTarefa(tarefasAbertas, criarTarefa(campoEntrada), tarefaAbertaActions)
    }
}

botaoEntrada.addEventListener("click", addByClick)
campoEntrada.addEventListener("keypress", addByEnter)

tarefasAbertas.addEventListener("click", removerTarefa)
tarefasAbertas.addEventListener("click", concluirTarefa)
tarefasConcluidas.addEventListener("click", desconcluirTarefa)