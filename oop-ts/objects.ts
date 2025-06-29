/**
-> Mental Model: Wires, not Boxes
    Instead of thinking of variables as boxes holding data, think of them as wires (or pointers) that point to values that exist in memory.
    const name = 'Mario' means the name wire points to the 'Mario' value.
-> Primitive vs. Object Values
    Primitives (string, number, boolean): There is only one of each unique primitive value in memory. Multiple variables can point to the same single value (e.g., two different variables set to true point to the same true value).
    Objects: new Player() creates a new, unique object instance in memory (the heap) each time it's called. The mario and peach variables point to two separate, distinct objects.
-> Instance Variables & Methods
    A class is a blueprint for creating object instances.
    The properties inside an object (e.g., mario.name) are themselves "wires" that point from that specific object instance to a value. This is why they're called instance variables.
    When calling a method (e.g., mario.greet()), the this keyword inside the method refers to the object the method was called on (the object to the left of the dot). This allows one method to have dynamic behavior based on the unique data of each object instance
 */

export default class Player {
    name: string;
    health: number;
    isInvincible: boolean;
    crush: Player

    greet() {
        console.log(`Hello, my name is ${this.name}`);
    }
}

const mario = new Player()
mario.name = "mario";
mario.health = 10;
mario.isInvincible = true

const peach = new Player()
peach.name = "peach";
peach.health = 5;
peach.isInvincible = true;

// if we run "node objects.ts" in the terminal, we will get name "peach"
mario.crush = peach
console.log(mario.crush.name)

mario.greet()
peach.greet()