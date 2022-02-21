const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const todo = document.querySelector("#todo-form");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY="username"

function onLoginSubmit(event) {
  event.preventDefault();  // submit했을때 새로고침되는 기본이벤트 없애기
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);  //username 저장
  paintGreetings(username);
}

function paintGreetings(username) {
  greeting.innerText = `Hello !! ${username}`;   //화면에 Hello + username 출력
  greeting.classList.remove(HIDDEN_CLASSNAME); 
  todo.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY)

if(savedUsername === null){
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
}else{
  paintGreetings(savedUsername);
}
