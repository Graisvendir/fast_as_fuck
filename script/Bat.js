
class Bat {
    constructor(x, y, width, height, src) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.img = new Image();
        this.img.src = src;
    }

    moveRight() {
        this.x += 10;
        clearCanvas();
    }
    moveLeft() {
        this.x -= 10;
        clearCanvas();
    }
    moveTop() {
        this.y -= 10;
        clearCanvas();
    }
    moveBottom() {
        this.y += 10;
        clearCanvas();

    }
    cross(elem) {
        if (this.x >= elem.x && this.x <= (elem.x + elem.width)) {
            if (this.y >= elem.y && this.y <= (elem.y + elem.height)) {
                return true;
            }
            if (this.y + this.height >= elem.y && this.y + this.height <= (elem.y + elem.height)) {
                return true;
            }
        }
        if (this.x + this.width >= elem.x && this.x + this.width <= (elem.x + elem.width)) {
            if (this.y >= elem.y && this.y <= (elem.y + elem.height)) {
                return true;
            }
            if (this.y + this.height >= elem.y && this.y + this.height <= (elem.y + elem.height)) {
                return true;
            }
        }
        if (this.x <= elem.x && this.x <= (elem.x + elem.width)) {
            if (this.x + this.width >= elem.x && this.x + this.width >= (elem.x + elem.width)) {
                if (this.y >= elem.y && this.y <= (elem.y + elem.height)) {
                    return true;
                }
                if (this.y + this.height >= elem.y && this.y + this.height <= (elem.y + elem.height)) {
                    return true;
                }
            }
        }
        if (this.y <= elem.y && this.y <= (elem.y + elem.height)) {
            if (this.y + this.height >= elem.y && this.y + this.height >= (elem.y + elem.height)) {
                if (this.x <= elem.x && this.x <= (elem.x + elem.width)) {
                    return true;
                }
                if (this.x + this.width >= elem.x && this.x + this.width >= (elem.x + elem.width)) {
                    return true;
                }
            }
        }

        return false;
    }
    canBite(human) {
        if (!human.isBited()) {
            if (this.cross(human)) {
                return true;
            }
        }
    }
    bite(humanPool) {
        for (let i in humanPool) {
            if (this.canBite(humanPool[i])) {
                humanPool[i].setBited(true, 'img/dead_human.png');
                console.log(humanPool[i] + ' is bited');
            }

        }
    }
    draw() {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }
}