nosex = "";
nosey = "";


function preload() {
    img = loadImage("th.jpg")
}

function setup() {
    canvas = createCanvas(400, 400);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(400, 400);
    video.hide();
    postNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);

}

function modelLoaded() {
    console.log("poseneton")
}

function gotPoses(results) {
if(results.length>0){
    console.log(results);
    nosex=results[0].pose.nose.x-10
    nosey=results[0].pose.nose.y-15
}
}

function draw(){
    image(video,0,0,400,400);
    image(img.nosex,nosey,30,30);
}