canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

background_image="mars.jpg";
rover_image="rover.png";

rover_x=30;
rover_y=30;
rover_width=100;
rover_height=90;

function add(){
    bg_imgTag=new Image();
    bg_imgTag.onload=uploadBg;
    bg_imgTag.src=background_image;

    rover_imgTag=new Image();
    rover_imgTag.onload=uploadRover;
    rover_imgTag.src=rover_image;
}

function uploadBg(){
    ctx.drawImage(bg_imgTag,0,0,canvas.width,canvas.height);
}
function uploadRover(){
    ctx.drawImage(rover_imgTag,rover_x,rover_y,rover_width,rover_height);
}
window.addEventListener("keydown",my_keydown);

function my_keydown(e){
    keyPressed=e.keyCode;
    console.log(keyPressed);

    if (keyPressed=='37'){
        //left();
        console.log("left");
    }
    if (keyPressed=='38'){
       // up();
        console.log("up");
    }
    if (keyPressed=='39'){
        //right();
        console.log("right");
    }
    if (keyPressed=='40'){
        //down();
        console.log("down");
    }
} 