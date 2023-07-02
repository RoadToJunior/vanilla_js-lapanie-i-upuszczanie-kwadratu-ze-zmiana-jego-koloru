const div = document.querySelector("div");
let divX = 150;
let divY = 50;

div.style.left = `${divX}px`;
div.style.top = `${divY}px`;

let isActive = false; //flag

div.addEventListener("mousemove", (e) => {
  if (isActive) {
    divX = e.clientX;
    divY = e.clientY;
    div.style.left = `${divX - 100}px`;
    div.style.top = `${divY - 100}px`;
  }
});

div.addEventListener("mousedown", () => {
  isActive = !isActive;
  div.style.backgroundColor = "gray";
});

div.addEventListener("mouseup", () => {
  isActive = !isActive;
  div.style.backgroundColor = "black";
});
