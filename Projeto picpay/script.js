const listaOpcoes = document.querySelector(".secaoDetalhesConta__opcoesTransacoes")

//ADICIONANDO ESCUTADOR DE EVENTOS
listaOpcoes.addEventListener("click", indentificarOpcoes)

//EXECUTANDO AÇÃO DEPOIS DO CLIQUE 
function indentificarOpcoes(event) {

    //IDENTIFICANDO ONDE OCORREU O CLIQUE
    const elemento = event.target

    //VERIFICANDO SE É UM LI 
    if (elemento.tagName == "LI") {

        //RECUPERANDO O ID
        const id = elemento.id

        //SELECIONANDO UMA SEÇÃO UTILIZANDO O ID(ESCOLHA DO USUÁRIO)
        const secaoEscolha = document.querySelector(`div[data-id="${id}"]`)

        //REMOVENDO CLASSE MOSTRAR
        removeClasseMostrar()

        //ADICIONAR UMA CLASSE 
        secaoEscolha.classList.add("mostrar")
    }
}

//FUNÇÃO PARA REMOVER AS CLASSES DAS DIVS  
function removeClasseMostrar() {
    const divs = document.querySelectorAll(".secaoTransacao .container div")

    for (let i = 0; i < divs.length; i++) {

        divs[i].classList.remove("mostrar")

    }
}