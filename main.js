nose_x= 0;
nose_y= 0;




function preload(){

}

function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses)
}

function draw(){
image(video,0,0,300,300);
image(moustache, nose_x, nose_y, 200,200);
}

function take_snapshot(){
    save('myFilterImage.jpg');
}
function modelLoaded(){
    console.log("Model has been intialized");
}

function gotPoses(results){
if(results.length>0) {
    console.log(results);
    nose_x=results[0].pose.nose.x-301;
    nose_y=results[0].pose.nose.y-260;
    console.log("x =" +nose_x);
    console.log("y =" +nose_y);
}
}

function preload() {
    moustache = loadImage('moustache.png');
}