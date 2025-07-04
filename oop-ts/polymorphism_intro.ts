class Hero {
    hunger: number;
    health: number;

    attack() {
        console.log("I'm attacking");
    }
    move() {
        console.log("I'm moving");
    }
    eat() {
        console.log("I'm eating");
    }
}

class Archer extends Hero {
    arrows: number

    attack(): void {
        super.attack()
        console.log("Firing an arrow");
        this.arrows -= 1
    }
}
class Mage extends Hero {
    mana: number
    attack(): void {
        super.attack()
        console.log("Throwing a potion");
        this.mana -= 1
    }
}
class Knight extends Hero {
    shield: number
    attack(): void {
        super.attack()
        console.log("I'm swinging with a sword");
    }
}

class Tribe {
    private heros: Hero[]

    setHeros(heros: Hero[]) {
        this.heros = heros
    }

    attack() {
        for (let hero of this.heros) {
            hero.attack()
        }
    }
}

const archer: Hero = new Archer()
const mage: Hero = new Mage()
const knight: Hero = new Knight()

const heros: Hero[] = [archer, mage, knight]

const tribe: Tribe = new Tribe()
tribe.setHeros(heros)

tribe.attack()
/**
 • Polymorphism allows the same method call to 'behave' different depending on the type of object on which the method is called.
    -> tribe.attack() will call different methods depending on the type of object on which the method is called

 • Different 'behavior' of one and the same method is achieved by predefining methods inherited from the base class to different ones methods in derived classes.
    -> We extended Archer, Mage and Knight classes from the base Hero class. Every class has its own attack method

 • When calling that method via a mentionable type of the base class, which method will be executed depends on the type of object on which method call, not from the type of the variable that stores a reference to that object.
    -> Object o = new Triangle()
    -> o.translate() will call the translate method from the Triangle class
 */

export { }