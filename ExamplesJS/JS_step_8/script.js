'use strict';

class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
        console.log(this);
    }
    calcArea() {
        return this.height * this.width;
    }
}

// const rectangle = new Rectangle(10, 10);
// const long = new Rectangle(20, 100);
// console.log(rectangle.calcArea());
// console.log(long.calcArea());

class ColoredRectangleWithText extends Rectangle {
    constructor(height, width, text, bgColor) {
        super(height, width);
        this.text = text;
        this.bgColor = bgColor;
    }
    showMyProps() {
        console.log(`Текст: ${this.text}, цвет: ${this.bgColor}`);
    }
}

const div = new ColoredRectangleWithText(25, 10, 'Hello world', 'blue');

div.showMyProps();
console.log(div.calcArea());