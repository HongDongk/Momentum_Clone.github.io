const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));    // JSON.stringify: 어떤 자바스트립트코드를 string으로 바꿔줌
}


function deleteToDo(event) {
  const li = event.target.parentElement;     // 원하는 리스트를 삭제할수있도록 찾아줌
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));    //  filter 함수: 배열.filter(함수)로 쓰며 함수에서 값이 true일 때 값을 배열에 유지
  saveToDos();
}                         
  

function paintToDo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteToDo);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const newTodoObj = {     //text를 object로 변환해줌
    text: newTodo,
    id: Date.now(),  //id를 랜덤하게 생성해줌
  };
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos); // JSON.parse: string을 배열로바꿔줌
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo); // 배열의 각각의 요소에 명령 실행
}





