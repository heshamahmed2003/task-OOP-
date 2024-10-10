class Rectangle {
    
    static objectCount = 0;

    
    constructor(width, height) {
        this.width = width;
        this.height = height;
        Rectangle.objectCount++; 
    }

 
    calculateArea() {
        return this.width * this.height;
    }

   
    calculatePerimeter() {
        return 2 * (this.width + this.height);
    }

    
    displayInfo() {
        console.log(`Width: ${this.width}, Height: ${this.height}`);
        console.log(`Area: ${this.calculateArea()}, Perimeter: ${this.calculatePerimeter()}`);
    }

   
    toString() {
        return `Rectangle - Width: ${this.width}, Height: ${this.height}, Area: ${this.calculateArea()}, Perimeter: ${this.calculatePerimeter()}`;
    }


    static getObjectCount() {
        return Rectangle.objectCount;
    }
}


const rect1 = new Rectangle(10, 5);
rect1.displayInfo();
console.log(rect1.toString());

const rect2 = new Rectangle(7, 3);
rect2.displayInfo();
console.log(rect2.toString());

console.log(`Total rectangles created: ${Rectangle.getObjectCount()}`);
