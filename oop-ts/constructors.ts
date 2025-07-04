// Constructors, static, parameter, readonly
class Character {
    // it lives on the class not the instance level
    static characterCount = 0
    private hunger: number
    private health: number

    constructor(hunger: number, health: number) {
        Character.characterCount++
        console.log(`I'm the ${Character.characterCount} character created`);

        this.hunger = hunger
        this.health = health
    }
    setHunger(hunger: number) {
        this.hunger = hunger
    }
    setHealth(health: number) {
        this.health = health
    }
    getHunger(): number {
        return this.hunger
    }
    getHealth(): number {
        return this.health
    }
}

class Hero extends Character {
    //readonly heroId: number
    private heroId: number

    constructor(heroId: number, hunger: number, health: number) {
        super(hunger, health)
        this.heroId = heroId
    }

    setHeroId(heroId: number) {
        // Cannot assign to 'heroId' because it is a read-only property, this one we'll get if we set heroId to be readonly property
        this.heroId = heroId
    }
    getHeroId(): number {
        return this.heroId
    }
}

const jeff = new Hero(123, 100, 100)
const jeff2 = new Hero(123, 100, 100)
const jeff3 = new Hero(123, 100, 100)
const jeff4 = new Hero(123, 100, 100)
const jeff5 = new Hero(123, 100, 100)
console.log(`Hero Id: ${jeff.getHeroId()}, Hunger: ${jeff.getHunger()}, Health: ${jeff.getHealth()}`);


// Character.characterCount -> valid
// jeff. -> there is no characterCount on the instance level


//-------------------------------------------------------------------------------
// I had to compile .ts into .js to run it, running a .ts file directly won't work cause of lack of expiremental feature in node 
class Hero1 {
    constructor(public hunger1: number, public health1: number) { }
}
const jeff1 = new Hero1(100, 100)
console.log(`Hunger: ${jeff1.hunger1}, Health: ${jeff1.health1}`);