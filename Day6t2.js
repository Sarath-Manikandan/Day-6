// Convert the UML diagram to Typescript class. - use number for double

class Circle {
    constructor() {
        this.radius = 1.0;
        this.color = "red";
    }
    getArea() {
        return Math.PI * this.radius * this.radius;
    }
    getCircumference() {
        return 2 * Math.PI * this.radius;
    }
}
const myCircle = new Circle();
console.log("Area:", myCircle.getArea());
console.log("Circumference:", myCircle.getCircumference());