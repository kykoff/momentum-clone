const todoBtn = document.querySelector(".todo-btn");
const todo = document.querySelector(".todo");

function todoBtnHandler(e) {
    todo.classList.toggle("hidden");
}







todoBtn.addEventListener("click", todoBtnHandler);
