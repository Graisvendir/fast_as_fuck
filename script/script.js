
let canvas = document.getElementById("example"),
    ctx     = canvas.getContext('2d');
canvas.height = document.body.clientHeight;
canvas.width = document.body.clientWidth;
let bat = new Bat(10, 10, 40, 30, 'img/bat.png');
let humanPool = [];
let human = new Human(10, 100, 30, 40, 'img/human.png');
let human2 = new Human(100, 100, 30, 40, 'img/human.png');
humanPool.push(human);
humanPool.push(human2);

function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    humanPool.map(function (human) {
        human.draw();
    });
    bat.bite(humanPool);
    bat.draw();
}

bat.src = 'img/bat.png';
human.src = 'img/human.png';
document.addEventListener('keydown', function (event) {
    switch (event.code) {
        case 'KeyD':
            bat.moveRight(ctx);
            break;
        case 'KeyS':
            bat.moveBottom(ctx);
            break;
        case 'KeyA':
            bat.moveLeft(ctx);
            break;
        case 'KeyW':
            bat.moveTop(ctx);
            break;
    }
});




