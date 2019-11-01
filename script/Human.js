
class Human {
    constructor(x, y, width, height, src) {
        this.x = Math.abs(x - width);
        this.y = Math.abs(y - height);
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
    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }
}