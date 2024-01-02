img=""
status= "";
objects = [];

function preload(){
    img = loadImage("desk.jpg");
}

function setup(){
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modeloaded);
    document.getElementById("status").innerHTML = "Status : Detecting Obejects";
}

function draw(){
    image(img, 0, 0, 640, 420);
    if(status != ""){
        for(i = 0; i < objects.length; i++)
        {
            document.getElementById("status").innerHTML = "Status : Detecting Objects";
 
 
            fill("#326da8");
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label + " "+ percent + "%", objects[i].x, objects[i].y);
            noFill();
            stroke("#3255a8");
            rect(objects[i].x,objects[i].y, objects[i].width, objects[i].height);
        }
    }
 }
 
function modeloaded(){
    console.log("Model Loaded");
    status = true;
    objectDetector.detect(img, gotResults);
}

function gotResults(error, results){
    if(error){
        console.log(error)
    }
    console.log(results);
    objects = results;
}

function back() {
    window.location = "index.html";
}