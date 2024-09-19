class Pet {
    eat() {console.log("Животное ест")};

    makeSound() {};
}

class Dog extends Pet {
    makeSound() {
        console.log("Собака лает");
    }

    sleep() {
        console.log("Собака спит");
    }
}


class Cat extends Pet {
    makeSound() {
        console.log("Кошка мяукает");
    }
    sleep() {
        console.log("Кошка спит");
    }
}

let dog = new Dog();
let cat = new Cat();

dog.eat();
dog.sleep();
dog.makeSound();

cat.eat();
cat.sleep();
cat.makeSound()