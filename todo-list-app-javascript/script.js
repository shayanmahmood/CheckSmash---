const taskInput = document.querySelector(".task-input input");

let todos = JSON.parse(localStorage.getItem("todo-list"));

taskInput.addEventListener("keyup", e => {
    let userTask = taskInput.value.trim();
    if (e.key == "Enter") {
        if (!todos) {
            todos = [];
        }
        taskInput.value = " ";
        let taskInfo = { name: userTask, status: "pending" };
        todos.push(taskInfo);
        localStorage.setItem("todo-list", JSON.stringify(todos));
    }
});









































// var taskBox = document.querySelector(".task-box");
// let todos = JSON.parse(localStorage.getItem("Todo-list"));

// function showTodo() {
//     let li = "";
//     if (todos) {
//         todos.forEach((todo, id) => {
//             li += ` <li  class="task">
//                  <label for="${id}">
//                     <input onclick="updateStatus(this)" type="checkbox" name="" id="${id}">
//                     <p>${todo.name}</p>
//                  </label>
//                 <div class="settings">
//                     <i class="uil uil-ellipsis-h"></i>
//                     <ul class="task-menu">
//                     <li><i class="uil uil-pen"></i>Edit</li>
//                     <li><i class="uil uil-trash"></i>Delete</li>
//                 </ul>
//             </div>
//         </li>`;
//         });
//     }
//     taskBox.innerHTML = li;
// }

// showTodo();

// function updateStatus(selectedTask){
// console.log(selectedTask);
// } 

