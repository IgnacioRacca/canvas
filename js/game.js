var canvas = null,
    ctx = null,
    x = 50,
    y = 50;

    //for problem compatibility requestAnimationFram
window.requestAnimationFrame = (function () {
    return window.requestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    function (callback) {
        window.setTimeout(callback, 17);
    };
}());


function paint(ctx) {
    //clean screen
    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    //drawing rectangle
    ctx.fillStyle = '#0f0';
    ctx.fillRect(x, y, 10, 10);
}


function act() {
    //move rectangle
    x += 2;

    //return rectangle to canvas
    if (x > canvas.width) {
        x = 0;
    }
}

function run() {

    window.requestAnimationFrame(run);

    act();
    paint(ctx);
}

function init() {
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');
    run();
}

window.addEventListener('load', init, false);