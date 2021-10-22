canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");


rover_image="rover.png";
mars_images_array=["NASA_img_1.jpg","NASA_img_2.jpg","NASA_img_3.jpg","NASA_img_4.jpg","NASA_img_5.jpg"]
random_img_no=Math.floor(Math.random()*5);
background_image=mars_images_array[random_img_no];

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
        left();
        console.log("left");
    }
    if (keyPressed=='38'){
        up();
        console.log("up");
    }
    if (keyPressed=='39'){
        right();
        console.log("right");
    }
    if (keyPressed=='40'){
        down();
        console.log("down");
    }
} 
function up(){
    if (rover_y>=0){
        rover_y=rover_y-10;
        console.log("When up arrow key is pressed - x = "+rover_x +" , y ="+rover_y);
        uploadBg();
        uploadRover();
    }
}
function down(){
    if (rover_y<=460){
        rover_y=rover_y+10;
        console.log("When down arrow key is pressed - x = "+rover_x +" , y ="+rover_y);
        uploadBg();
        uploadRover();
    }
}
function right(){
    if (rover_x<=700){
        rover_x=rover_x+10;
        console.log("When right arrow key is pressed - x = "+rover_x +" , y ="+rover_y);
        uploadBg();
        uploadRover();
    }
}
function left(){
    if (rover_x>=0){
        rover_x=rover_x-10;
        console.log("When left arrow key is pressed - x = "+rover_x +" , y ="+rover_y);
        uploadBg();
        uploadRover();
    }
}