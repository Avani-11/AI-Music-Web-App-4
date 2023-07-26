scoreLeftWrist = 0;
statusOfSongFiles  = "";
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;

song1 = "";
song2 = "";

function preload() {
    song1 = loadSound('Shape of You.mp3');
    song2 = loadSound('Harry Potter Theme Song.mp3');
    song1.isPlaying();
    console.log("statusOfSongFiles");
    song2.isPlaying();
    console.log("statusOfSongFiles");
}

function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw() {
    image(video, 0, 0, 600, 500);
    fill("#8210c9");
    stroke("#8210c9");

    if(scoreLeftWrist > 0.2) {
        circle(leftWristX,leftWristY,20);
    }
 }

    function modelLoaded()
{
    console.log('PoseNet Is Initialized');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        scoreLeftWrist = results[0].pose.keypoints[9].score;
        console.log("scoreLeftWrist = "+ scoreLeftWrist);

        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("leftWristX = " + leftWristX +" leftWristY =" + leftWristY);

        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("rightWristX = " + rightWristX +" rightWristY =" + rightWristY);
    }
}