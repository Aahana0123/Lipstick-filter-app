nosex = 0;
nosey = 0;

function preload(){
img = loadImage("https://i.postimg.cc/PxFvYgkv/l1.png");
}
function setup(){
canvas = createCanvas(500 , 500);
canvas.center();
video = createCapture(VIDEO);
video.hide();

poseNet = ml5.poseNet(video , modelLoaded);
poseNet.on("pose" , gotPoses);
}

function modelLoaded() {
    console.log("Posenet is Loaded!");
}

function gotPoses(results){
    if (results.length>0) {
        console.log(results);
        console.log("nose x = "+results[0].pose.nose.x );
        console.log("nose y = "+results[0].pose.nose.y );
        nosex = results[0].pose.nose.x -90;
        nosey = results[0].pose.nose.y +70;


    }
}
function snapshot() {
save("Lipstick_Filter.png")
}

function draw(){
    image(video , 0 , 0 , 500 , 500);
    image(img , nosex , nosey , 30 , 30)
    }