
let canvas = new Canvas(document.getElementById("example"));
canvas.addBat();
canvas.addHuman();
canvas.addHuman();
canvas.addHuman();
canvas.addHuman();
canvas.addHuman();
canvas.addHuman();
canvas.addHuman();

document.addEventListener('keydown', function (event) {
    canvas.move(event.code);
});





