const clock =document.querySelector("#clock");

function getClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");  // padStart: string이 2글자이하일때 숫자 0을추가한다!! & getHours: 현재시각불러오기
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    clock.innerText = (`${hours}:${minutes}:${seconds}`);
}

getClock();
setInterval(getClock,1000)  //1초마다 반복하게하는 함수
