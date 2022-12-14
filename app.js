let color = "black";
let click = false;

// Creating the board
populate = (size) =>
{
  let board = document.querySelector(".board");
  let cube = board.querySelectorAll("div");
  cube.forEach((div) => div.remove());
  board.style.gridTemplateColumns = `repeat(${size} , 1fr)`;
  board.style.gridTemplateRows = `repeat(${size} , 1fr)`;

  // populating the board
  let amount = size * size;
  for (let i = 0; i < amount; i++) {
    let cube = document.createElement("div");
    cube.addEventListener("mouseover", colorSquare);
    cube.style.border = "groove 1px";
    board.insertAdjacentElement("beforeend", cube);
  }
}

populate(16);

setSize = (input) =>
{
    populate(input);
}

// changing color
function changeColor(choice)
{
  color = choice;
}

// reseting the board
function reset()
{
  let board = document.querySelector(".board");
  let cube = board.querySelectorAll("div");
  cube.forEach((div) => (div.style.backgroundColor = "white"));
}

// coloring the cube
function colorSquare() 
{
    if (click) {
      if (color === "random") {
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
      } else {
        this.style.backgroundColor = color;
      }
    }
  }

document.querySelector(".board").addEventListener("click", () => click = !click);


