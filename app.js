console.log("hello");
const board = document.querySelector(".board");
board.style.gridTemplateColumns = `repeat(16 , 1fr)`
board.style.gridTemplateRows = `repeat(16 , 1fr)`

for (let i = 0; i < 256; i++) 
{
    const cube = document.createElement("div");
    cube.style.border = "solid 1px";
    board.insertAdjacentElement("beforeend", cube);
}