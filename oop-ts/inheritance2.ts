//Extending methods
class Animal {
    private coordX: number;
    private coordY: number;

    makeNoise() {
        console.log("Make noise");
    }
    move() {
        console.log(`I'm moving from coord (${this.coordX}, ${this.coordY})`);
    }
    setCoordX(x: number) {
        this.coordX = x
    }
    setCoordY(y: number) {
        this.coordY = y
    }
}

class Dog extends Animal {
    //Override
    makeNoise(): void {
        console.log("Bark bark bark");
    }

    //Extending method
    // Here we are extending the move method by adding our own code(console.log in this case)
    // and calling the move method from Animal call using super keyword
    move() {
        console.log("getting up on all four paws...")
        super.move()
    }
}

const dog = new Dog()
dog.makeNoise() // Bark bark bark
dog.setCoordX(51)
dog.setCoordY(59)
dog.move()