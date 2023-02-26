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

let counter = 15;
function timeout() {
    if(counter > -1) {
    setTimeout(function () {
    document.getElementById('time').innerHTML = counter--;
    timeout();
}, 1000);
}
}

function harharhar() {
    alert("you're about to die :D");
}

setTimeout(harharhar, 16020);
timeout();
hoi();

function updateCanvas() {
    context.drawImage(video, 0, 0, 200, 200);
    window.requestAnimationFrame(updateCanvas);
}

function hoi() {
setTimeout(function() {
    document.getElementById('myimage').style.display = 'block';
},16000);
}

document.getElementById('sound').addEventListener('click', function() {
    document.getElementById("horse").play();
    alert('you cant pause it :P')
});

document.getElementById('sound').addEventListener('click', function() {
    document.getElementById('dog').play();
})

document.getElementById('sound').addEventListener('click', function() {
    document.getElementById('fish').play();
})