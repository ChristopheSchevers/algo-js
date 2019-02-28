class Rectangle {
    constructor (topLeftXPos, topLeftYPos, height, width) {
        this.topLeftXPos = topLeftXPos;
        this.topLeftYPos = topLeftYPos;
        this.height = height;
        this.width = width;
    }

    collides(otherRectangle) {
        if (this.topLeftXPos < otherRectangle.topLeftXPos + otherRectangle.width &&
            this.topLeftXPos + this.width > otherRectangle.topLeftXPos &&
            this.topLeftYPos < otherRectangle.topLeftYPos + otherRectangle.height &&
            this.topLeftYPos + this.height > otherRectangle.topLeftYPos) {
            return true;
        }
    }
}

const rectangle = new Rectangle(1,6,4,6);
const otherRectangle = new Rectangle(4,5,2,4);

console.log(rectangle);
console.log(otherRectangle);
console.log(JSON.stringify(rectangle.collides));