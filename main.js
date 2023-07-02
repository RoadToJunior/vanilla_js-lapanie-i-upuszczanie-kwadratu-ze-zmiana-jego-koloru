const div = document.querySelector("div");
let divX = 150;
let divY = 50;

let insertDivX;
let insertDivY;

div.style.left = `${divX}px`;
div.style.top = `${divY}px`;

let isActive = false; //flag

div.addEventListener("mousemove", (e) => {
  if (isActive) {
    divX = e.clientX - insertDivX;
    divY = e.clientY - insertDivY;
    div.style.left = `${divX}px`;
    div.style.top = `${divY}px`;
  }
});

div.addEventListener("mousedown", (e) => {
  isActive = !isActive;
  insertDivX = e.offsetX;
  insertDivY = e.offsetY;
  div.style.backgroundColor = "gray";
});

div.addEventListener("mouseup", () => {
  isActive = !isActive;
  div.style.backgroundColor = "black";
});
