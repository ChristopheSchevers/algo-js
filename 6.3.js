class Rectangle {
    constructor (topLeftXPos, topLeftYPos, height, width) {
        this.x1 = topLeftXPos;
        this.y1 = topLeftYPos;
        this.height = height;
        this.width = width;
        this.x2 = this.x1 + width;
        this.y2 = this.y1 + height;
    }

    collides(otherRectangle) {
        if (this.x1 < otherRectangle.x2 &&
            this.x2 > otherRectangle.x1 &&
            this.y1 < otherRectangle.y2 &&
            this.y2 > otherRectangle.y1) {
            console.log("collides");
            console.log(this.x1 < otherRectangle.x2,this.x2 > otherRectangle.x1,this.y1 < otherRectangle.y2,this.y2 > otherRectangle.y1);
        } else {
            console.log("does not collapse");
        }
    }
}