/**
-> Inheritance allows a subclass to inherit properties and methods from a superclass using the "extends" keyword.
-> The main benefit of inheritance is code reusability, which avoids code duplication and simplifies maintenance.
-> Overriding allows a subclass to provide its own specific implementation for an inherited method.
-> The super keyword can be used to call the parent class's method, which lets you extend the parent's functionality instead of completely replacing it.
-> The protected access modifier makes a member accessible within its class and any subclasses, unlike private which is only accessible within the class itself
 */

class Animal {
    hunger: number;
    health: number;
    protected coordX: number;
    protected coordY: number;

    setCoordX(x: number) {
        this.coordX = x
    }
    setCoordY(y: number) {
        this.coordY = y
    }
    eat() {
        console.log("I'm eating");
    }
    sleep() {
        console.log("I'm sleeping");
    }
    move() {
        console.log("I'm moving");
    }
    makeNoise() {
        console.log("Make noise");
    }
}

// Dog IS-A Animal
class Dog extends Animal {
    owner: string; // Dog HAS-A owner

    // Overriding method from Animal
    makeNoise(): void {
        console.log("Bark.");
    }

    // New method that belongs just to Dog
    returnToOwner(): void {
        console.log(`I'm at ${this.coordX}, ${this.coordY} and now I'm returning to owner.`);
    }
}
class Cat extends Animal {
}

const dog = new Dog()
dog.setCoordX(10)
dog.setCoordY(20)
const cat = new Cat()
dog.makeNoise()
dog.returnToOwner()
cat.makeNoise()


// Inheritance multiple levels down
class Canine extends Animal {
    makeNoise(): void {
        console.log("Bark bark bark.");
    }
}

class Dogg extends Canine {
    owner: string;
    returnToOwner(): void {
        console.log(`Returning to ${this.owner}`);

    }
}
class Wolf extends Canine {}

const dogg = new Dogg()
// We can call methods and it's properties from Canine as well from Animal class



export { };
