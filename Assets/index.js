const canvas = document.getElementById("GameArea");
const ctx = canvas.getContext("2d"); 

let x = 600;
let y = 400;
let radius = 20;
let Speed = 7;

let UpPressed = false;
let DownPressed = false;
let LeftPressed = false;
let RightPressed = false;

function DrawGame() {
    //console.log("draw");
    requestAnimationFrame(DrawGame);
    ClearScreen();
    inputs();
    BoundryCheck();
    DrawGreenBlob();
    
}

function BoundryCheck(){
    //up
    if (y < radius) {
        y = radius;
    }
    //down
    if (y > canvas.height-radius){
        y = canvas.height - radius;
    }
    //left
    if (x < radius) {
        x = radius;
    }
    if ( x > canvas.width - radius)
    {
        x = canvas.width - radius;
    }
}

function inputs() {
    if (UpPressed) {
        y = y - Speed;
    } 
    if (DownPressed) {
        y = y + Speed;
    }
    if (LeftPressed) {
        x = x - Speed;
    }
    if (RightPressed) {
        x = x + Speed;
    } 
}

function DrawGreenBlob(){
    ctx.fillStyle = "green"
    ctx.beginPath();
    ctx.arc(x,y, radius,0, Math.PI * 2);
    ctx.fill(); 
    
}

function ClearScreen(){
    
    ctx.fillStyle = "black";
    ctx.fillRect (0,0, canvas.width, canvas.height); 

}

document.body.addEventListener("keydown", KeyDown); //"keydown" can't have capetialised letters
document.body.addEventListener("keyup", KeyUp);     //"keyup" can't have capetialised letters

function KeyDown(event) {            
    if (event.keyCode == 83) { //40 for down arrow       
        DownPressed = true;
        }
    if (event.keyCode == 87) { //38 for up arrow      
        UpPressed = true;
        }
    if (event.keyCode == 65) { //37 for lefr arrow
        LeftPressed = true;
        }
    if (event.keyCode == 68) { //39 for right arrow
        RightPressed = true;
        }
}

function KeyUp(event){
    if (event.keyCode == 83) {       
        DownPressed = false;
        }
    if (event.keyCode == 87) {       
        UpPressed = false;
        }
    if (event.keyCode == 65) {       
        LeftPressed = false;
        }
    if (event.keyCode == 68) {       
        RightPressed = false;
        }
}

DrawGame();

