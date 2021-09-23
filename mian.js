Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90
});

var camera = document.getElementById("camera");

Webcam.attach(camera);

console.log("ml5 version: ", ml5.version);
var classifier = ml5.classifier('https://teachablemachine.withgoogle.com/models/h0aesD_yW/model.json',modelLoaded());

function modelLoaded() {
    console.log("model Loaded");
}