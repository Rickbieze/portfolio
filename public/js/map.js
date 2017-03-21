/*
function drawMap(){
var canvas = document.createElement('canvas');

canvas.id = "gameMap";
canvas.width = 1750;
canvas.height = 900;
canvas.style.zIndex = 8;
canvas.style.position = "absolute";
canvas.style.border = "1px solid";


var body = document.getElementsByTagName("body")[0];
body.appendChild(canvas);

gameMap = document.getElementById("gameMap");

console.log(gameMap);
drawBoard();
}
*/



function drawBoard(){
//grid width and height
var bw = 1750;
var bh = 900;
//padding around grid
var p = 0;
//size of canvas
var cw = bw + (p*2) + 0;
var ch = bh + (p*2) + 0;
console.log(ch,cw)
var canvas = document.getElementById("gameMap");
console.log(canvas)

var context = canvas.getContext("2d");
    for (var x = 0; x <= bw; x += 40) {
        context.moveTo(0.5 + x + p, p);
        context.lineTo(0.5 + x + p, bh + p);
    }


    for (var x = 0; x <= bh; x += 40) {
        context.moveTo(p, 0.5 + x + p);
        context.lineTo(bw + p, 0.5 + x + p);
    }

    context.strokeStyle = "black";
    context.stroke();
}
