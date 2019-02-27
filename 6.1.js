// Class Circle with constructor
class Circle {
    constructor(xPos, yPos, radius) {
        this.xPos = xPos;
        this.yPos = yPos;
        this.radius = radius;
    }

    // Getters & setters to Circle class
    get posX() {
        return this.xPos;
    }

    set posX(posX) {
        this.xPos = posX;
    }

    get posY() {
        return this.yPos;
    }

    set posY(posY) {
        this.yPos = posY;
    }

    get rad() {
        return this.radius;
    }

    set rad(rad) {
        this.radius = rad;
    }

    // Method to set new coordinates for created object
    move (xOffset, yOffset) {
        this.xPos = xOffset;
        this.yPos = yOffset;
    }

    // Getter which instigates method to calculate surface of a circle
    get surface() {
        return this.calcSurface();
    }

    calcSurface() {
        return Math.PI * (this.radius)**2;
    }

}

// Creation of new object using the class constructor of Circle
const circleOne = new Circle(3,4,20);

// Prints the object to the console
console.log(circleOne);
console.log(circleOne.surface);