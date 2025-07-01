//? variavel responsevel pelo input
const inputTask = document.querySelector(".input-task");

// ? variavel responsavel pelo botao de adicionar tarefas
const addTask = document.querySelector(".button-add-task");

// ? variavel responsavel pela "ul"
const completeList = document.querySelector(".list-task");
//

// ? array responsavel por conter todos os nomes das tasks
let textTask = [];
// todo: funcition responsavel por ditar os nomes das tasks
function adicionarTask() {
   // responsavel por levar o valor do input até o array
   textTask.push(inputTask.value);

   //responsavel por chamar a proxima função
   mostrarTask();
}

// todo: function responsavel por formar o codigo da lista e coloca-la na tela
function mostrarTask() {
   // ? variavel responsavel por conter o codigo html
   let htmlCode = "";
   // passa por todos os itens da array de textos e para cada um deles cria seu card
   Array.from(textTask).forEach((el) => {
      // atribui a variavel do codigo cada atualização de task
      htmlCode =
         htmlCode +
         //  texto que vai ser colocado no html
         `
            <li class="task">
                <button class="check">
                    <img src="img/icon-check.png" alt="concuir task" />
                </button>
                <h2 class="titulo-task">${el}</h2>
                <button class="trash">
                    <img src="img/icon-trash.png" alt="" />
                </button>
            </li>
    `;
      // comando de escrever o codigo gerado dentro da tag ul
      completeList.innerHTML = htmlCode;
   });
}

// observa os eventos que acontecem com o botao de adicionar tasks, assim todas as ações de click ele faz a função indicada
addTask.addEventListener("click", adicionarTask);
