class Expression {
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }

    evaluate() {};
    toString() {};
}

class Addition extends Expression {
    evaluate() {
        return this.a + this.b;
    }

    toString() {
        return `${this.a} + ${this.b} = ${this.evaluate()}`;
    }
}

class Subtraction extends Expression {
    evaluate() {
        return this.a - this.b;
    }

    toString() {
        return `${this.a} - ${this.b} = ${this.evaluate()}`;
    }
}

class Multiplication extends Expression {
    evaluate() {
        return this.a * this.b;
    }

    toString() {
        return `${this.a} * ${this.b} = ${this.evaluate()}`;
    }
}

class Division extends Expression {
    evaluate() {
        if (this.b === 0) {
            return "Нельзя делить на 0 :|";
        }
        return this.a / this.b;
    }

    toString() {
        return `${this.a} / ${this.b} = ${this.evaluate()}`;
    }
}

const add = new Addition(2, 2);
const subtract = new Subtraction(2, 2);
const multiply = new Multiplication(2, 2);
const divide = new Division(2, 2);
const divideError = new Division(2, 0);

console.log(add.toString());     
console.log(subtract.toString());
console.log(multiply.toString());
console.log(divide.toString());
console.log(divideError.toString());
