// To prevent direct instantiation of a class like Hero, the abstract keyword is used
// When abstract is added, TypeScript immediately throws an error if you try to new Hero(), stating: "Cannot create an instance of an abstract class."
abstract class Hero {
    hunger: number;
    health: number;

    abstract attack(): void;

    move(): void {
        console.log("I'm moving");
    }
    eat(): void {
        console.log("I'm eating");
    }
}

// PART 1

// Concrete classes extend the abstract class
class Archer extends Hero {
    arrows: number

    attack(): void {
        console.log("Firing an arrow");
        this.arrows -= 1
    }
}

class Knight extends Hero {
    shield: number
    attack(): void {
        console.log("I'm swinging with a sword");
    }
}

const archer: Hero = new Archer()
const knight: Hero = new Knight()

//Creating a direct instance of Hero class doesn't make logical sense in this context, as Hero is a general concept, and specific hero types (Archer, Knight) are instantiated.
//const bob: Hero = new Hero()


const heroes: Hero[] = [archer, knight]
for (let hero of heroes) {
    hero.attack()
}

// PART 2 - Nested Abstract Classes
// Class extending an abstract class doesn't have to be concrete itself. It can also be abstract.
abstract class Mage extends Hero {
    mana: number;
}
class Wizard extends Mage {
    attack() {
        this.mana -= 1
        console.log("Wizard attacks");
    }
}
class Witch extends Mage {
    attack() {
        this.mana -= 1
        console.log("Witch attacks");
    }
}

const wizard = new Wizard()
const witch = new Witch()

wizard.attack()
witch.attack()


export { }