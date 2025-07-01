const tituloTask = document.querySelector(".input-task");
const addTask = document.querySelector(".button-add-task");
const completeListTask = document.querySelector(".list-task");

let listTask = [];

function newTitle() {
   listTask.push(addTask.value);

   newTask;
}
function newTask() {
   let codeTask = "";

   listTask.forEach((tasks) => {
      codeTask =
         codeTask +
         `
            <li class="task">

                <button class="check">
                    <img src="img/icon-check.png" alt="concuir task" />
                </button>

                <h2 class="titulo-task">${listTask}/h2>

                <button class="trash">
                    <img src="img/icon-trash.png" alt="apagar task" />
                </button>

            </li>
`;
   });
   completeListTask.innerHTML = codeTask;
}

addTask.addEventListener("click", newTitle);
