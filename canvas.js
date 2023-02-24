const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext('2d');

//Resizing
canvas.height = "650";
canvas.width = window.innerWidth;
window.addEventListener("load",()=>{
  console.log("hello");
 
  canvas.style.cursor = "crosshair"
  // ctx.lineWidth = 5;
  // ctx.strokeStyle = "red"
  // ctx.strokeRect(100,100,200,500)
  // ctx.strokeStyle = "blue"
  // ctx.lineWidth = 2;
  // ctx.strokeRect(200,200,200,500)
  // ctx.beginPath()
  // ctx.strokeStyle = "green"
  // ctx.moveTo(200,200)
  // ctx.lineTo(200,100)
  // ctx.lineTo(200,150)
  // ctx.closePath()
  // ctx.stroke()
  

  //Variables

  let painting = false;

  function startPosition(e){
    painting = true
    draw(e)
  }

  function finishedPosition(){
    painting = false
    ctx.beginPath()
  }

  function draw(e){
    if(!painting) return;
    ctx.lineWidth = 3;
    ctx.lineCap = "round"
    ctx.lineTo(e.clientX, e.clientY)
    ctx.strokeStyle = "blue"
    ctx.stroke() 
    ctx.beginPath()
    ctx.moveTo(e.clientX, e.clientY)
  }

  //EventListeners

  canvas.addEventListener("mousedown",startPosition)
  canvas.addEventListener("mouseup",finishedPosition)
  canvas.addEventListener("mousemove",draw)

  

  
})

window.addEventListener("onclick",clearScreen)
function clearScreen(){
  console.log("screen cleared")
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

window.addEventListener("onclick",drawRectangle)
function drawRectangle(){
clearScreen()
console.log("reached rectangle")
ctx.fillStyle = "red",
ctx.fillRect(50,50,100,100)
ctx.strokeStyle = "blue"
ctx.strokeRect(50,50,100,100)
// ctx.clearRect(50, 50, 100, 100);
}

window.addEventListener("onclick",drawSquare)
function drawSquare(){
clearScreen()
console.log("reached square")
ctx.fillStyle = "green",
ctx.fillRect(50,50,50,50)
ctx.strokeStyle = "pink"
ctx.strokeRect(50,50,50,50)
// ctx.clearRect(50, 50, 100, 100);
}

window.addEventListener("onclick",drawCircle)
function drawCircle(){
clearScreen()
ctx.beginPath()
console.log("reached circle")
ctx.arc(200, 200, 50, 0, 2*Math.PI);
ctx.fillStyle = "red";
ctx.fill();
ctx.strokeStyle = "blue";
ctx.stroke();
// ctx.clearRect(50, 50, 100, 100);
}



