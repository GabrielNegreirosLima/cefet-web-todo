// Exercício 0 
let tarefas = [
    {
        nome: "Fazer essa prática de Web",
        categoria: "estudos",
        realizada: true
    },
    {
        nome: "Terminar o frontend do trabalho de Web",
        categoria: "estudos",
        realizada: false
    },
    {
        nome: "Ir no sacolão",
        categoria: "compras",
        realizada: true
    },
    {
        nome: "Jogar um CTF",
        categoria: "lazer",
        realizada: false
    }
];


// Exercício 1
const listaTarefasEl = document.querySelector("#lista-tarefas");

function insereTarefaNaPagina(tarefa){

    const itemTarefaEl = document.createElement("li");
    itemTarefaEl.classList.add("item-tarefa");

    if(tarefa.realizada){
        itemTarefaEl.classList.add("marcado");
    }

    itemTarefaEl.classList.add(`categoria-${tarefa.categoria}`);

    itemTarefaEl.innerHTML = tarefa.nome;

    listaTarefasEl.appendChild(itemTarefaEl);
}

listaTarefasEl.innerHTML = "";
tarefas.forEach(insereTarefaNaPagina);


// Exercício 2
const botaoNovaTarefaEl = document.querySelector("#incluir-nova-tarefa");
botaoNovaTarefaEl.addEventListener("click", e => {
    const nomeEL = document.querySelector("#nova-tarefa-nome");
    const categoriaEl = document.querySelector("#nova-tarefa-categoria");
    
    const tarefa = {
        nome: nomeEL.value,
        categoria: categoriaEl.value,
        realizada: false
    };
    tarefas.push(tarefa);
    insereTarefaNaPagina(tarefa);

    nomeEL.focus();
});

// Exercício opcional 3
const filtroCategoriaEl = document.querySelector("#filtro-de-categoria");

filtroCategoriaEl.addEventListener("change", e => {
    const categoria = e.currentTarget.value;
    const listaTarefas = document.querySelectorAll(".item-tarefa");

    if(categoria === ""){
        listaTarefas.forEach(tarefa => {
            tarefa.classList.remove("retido-no-filtro");
        });
        return;
    }

    const tarefasFiltradas = Array.from(listaTarefas).filter(evt => {
        return evt.classList.contains(`categoria-${categoria}`);
    });

    listaTarefas.forEach(tarefa => {
        tarefa.classList.add("retido-no-filtro");
    });
    tarefasFiltradas.forEach(tarefa => {
        tarefa.classList.remove("retido-no-filtro");
    })
});
