
class Canvas {
    constructor(htmlElement) {
        htmlElement.height = document.body.clientHeight;
        htmlElement.width = document.body.clientWidth;
        this.height = document.body.clientHeight;
        this.width = document.body.clientWidth;
        this.ctx = htmlElement.getContext('2d');
        this.humanPool = [];
    }
    addBat() {
        if (!this.bat) {
            this.bat = new Bat(10, 10, 40, 30, 'img/bat.png');
        }
    }
    addHuman(x = 0, y = 0) {
        if (!x) {
            x = Math.floor(Math.random() * Math.floor(this.width));
        }
        if (!y) {
            y = Math.floor(Math.random() * Math.floor(this.height));
        }
        this.humanPool.push(new Human(x, y, 30, 40, 'img/human.png'));
    }
    move(code) {
        switch (code) {
            case 'KeyD':
                this.bat.moveRight();
                this.clear();
                break;
            case 'KeyS':
                this.bat.moveBottom();
                this.clear();
                break;
            case 'KeyA':
                this.bat.moveLeft();
                this.clear();
                break;
            case 'KeyW':
                this.bat.moveTop();
                this.clear();
                break;
        }
    }
    clear() {
        this.ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < this.humanPool.length; i++) {
            this.humanPool[i].draw(this.ctx);
        }
        this.bat.bite(this.humanPool);
        this.bat.draw(this.ctx);
    }
}