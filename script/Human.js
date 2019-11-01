
class Human {
    constructor(x, y, width, height, src) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.img = new Image();
        this.img.src = src;
        this.bited = false;
    }
    setBited(value, img = null) {
        this.bited = value;
        if (img) {
            this.img.src = img;
        }
    }

    isBited() {
        return this.bited;
    }
    draw() {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }
}