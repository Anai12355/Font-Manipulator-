diffrence = 0;
rightWrist = 0;
leftWrist = 0;
function setup()
{
    video = createCapture(VIDEO);
    video.size(550, 550);

    canvas = createCanvas(600, 600);
    canvas.position(560, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw()
{
     background('#969A97');

     document.getElementById("font_size").innerHTML = "Width And Height of a Font will be = " + diffrence + "px";
     fill('#F90093');
     stroke('#F90093');
    textSize(diffrence);
    text('Anaishaa', 200, 300);
}
function modelLoaded()
{
    console.log('PoseNet Is Initialized!');
}
function gotPoses(results)
{
    if( results.length > 0)
    {

        leftWrist = results[0].pose.leftWrist.x;
        rightWrist = results[0].pose.rightWrist.x;
        diffrence = floor(leftWrist - rightWrist);
        console.log("leftWrist = " + leftWrist + "rightWrist = " + rightWrist + "Diffrence = " + diffrence);
    }
}