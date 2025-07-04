abstract class Character {
    hunger: number;
    health: number

    abstract eat(): void;
}

// Part 1 - incorrect way of doing it, creating two classes and then try with Spy class to inherit from both

// class Hero extends Character {
//     heroId: number

//     eat() {
//         this.hunger += 3
//     }
// }
// class Enemy extends Character {
//     enemyId: number

//     eat() {
//         this.hunger += 1
//     }
// }

// It's not allowed to inherit from more than one class, and also it's ambiguous because Spy class will not know which eat() method to use
// class Spy extends Hero, Enemy { } - This will throw an error



// Part 2 - correct way, creating interfaces allow us for Spy class to inherit from both and use properties and methods
interface Hero extends Character {
    heroId: number
}

interface Enemy extends Character {
    enemyId: number
}

class Spy implements Hero, Enemy {
    hunger: number;
    health: number;
    heroId: number;
    enemyId: number;

    eat(): void {
        this.hunger -= 1;
        console.log("Eating...");
    }
}
// Polymorphism with Interfaces
const hero: Hero = new Spy(); 
const enemy: Enemy = new Spy();
// This example effectively illustrates polymorphism: an object (Spy) can take on multiple forms (Hero and Enemy) depending on the interface it implements.
// Demonstrating that the method executed is determined by the actual object type, not just the reference type
hero.eat();
enemy.eat();