const todoInput = document.querySelector(".todo-form input");
const todoUl = document.querySelector(".todo ul");
const todoForm = document.querySelector(".todo-form");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));

}

function deleteTodo(e) {
    const li = e.target.parentElement;
    // innerHTML로 추가한 요소라서 해당 html이 target이 되버림
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
  }

function createToDo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    const button = document.createElement("button");

    button.innerText = 'X';
    span.innerText = newTodo.text;
    button.addEventListener("click", deleteTodo);

    li.appendChild(button);
    li.appendChild(span);

    todoUl.appendChild(li);

}

function todoHandler(e) {
  e.preventDefault();
  const newTodo = todoInput.value;
  todoInput.value = ""; // 이미 todo에 저장했기 때문에 초기화해도 상관 X
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj);
  createToDo(newTodoObj);
  saveToDos();
}


todoForm.addEventListener("submit", todoHandler);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos; 
  // local storage에 최신화
  parsedToDos.forEach(createToDo);
}
// local storage에 string화 해서 저장한 배열을 다시 배열화해서 불러옴


// 왜 form이 있는 상태에서 제출하면 사라질까요