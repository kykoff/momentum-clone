const todoBtn = document.querySelector(".todo-btn");
const todo = document.querySelector(".todo");
const emailBox = document.querySelector(".user-email");
const emailBtn = document.querySelector(".user-email a")

function todoBtnHandler(e) {
    todo.classList.toggle("hidden");
}

const userEmail = localStorage.getItem("email");
const span = document.createElement("span");
span.innerHTML = `${userEmail}       <i class="fa-solid fa-envelope"></i>`;
emailBtn.appendChild(span);







todoBtn.addEventListener("click", todoBtnHandler);
