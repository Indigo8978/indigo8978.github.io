let video = null;
let canvas = null;
let context = null;

function main() {
    canvas = document.getElementById("myCanvas");
    context = canvas.getContext("2d");
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;

    let promise=navigator.mediaDevices.getUserMedia({video:true});
    promise.then(function(signal) {
        video = document.createElement("video")
        video.srcObject = signal;
        video.play();

        video.onloadeddata = function() {
            updateCanvas();
        }
    })
}

document.getElementById('fell').addEventListener('click', function(){
    alert("Haha L I cant believe you fell for it")
    return;
});

function harharhar() {
    alert("you're about to die :D");
}

let counter = 59;
function timeout() {
    setTimeout(function () {
    document.getElementById('time').innerHTML = counter--;
    timeout();
}, 1000);
}

/*
*/
timeout();
setTimeout(harharhar, 61000);
hoi();

function updateCanvas() {
    context.drawImage(video, 0, 0, 200, 200);
    window.requestAnimationFrame(updateCanvas);
}

function hoi() {
setTimeout(function() {
    document.getElementById('myimage').style. display = 'block';
},59000);
}