const images = ["0.jpeg", "1.jpeg", "2.jpeg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img"); //html에 img라는 element 생성

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage); //html에 img라는 element 추가 

