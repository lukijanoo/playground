/*
-> Encapsulation: Protects an object's internal state (instance variables) from direct external access.
-> Problem with public instance variables: Allows external modification, potentially leading to invalid states (e.g., negative health).
-> Solution: Make instance variables private.
-> Access methods: Use setters to modify private variables and getters to retrieve them.
-> Benefits:
    Prevents invalid data.
    Allows adding validation logic (e.g., ensuring health is not below 0) within the setter methods.
    Hides internal implementation details from external users (information hiding).
-> Example:
    private health: number;
    setHealth(health: number): Checks if health < 0, logs an error, and returns if true. Otherwise, sets this.health = health.
    getHealth(): Returns this.health.
*/
class Player {
    private health: number
    private speed: number

    setHealth(health: number) {
        if (health < 0) {
            console.log("Health cannot be negative")
            return;
        }
        this.health = health
    }
    getHealth() {
        return this.health
    }
    setSpeed(speed: number) {
        // We need to make sure logic is there, because if it's not there, it's the same as public, so we haven't done anything 
        // mario.setHealth(-3) and mario.health = -3 -> we will get the same result - so logic is important as we have in "setHealth"
        this.speed = speed
    }
    getSpeed() {
        return this.speed
    }
}
const mario = new Player()
//This is one of the examples why we need encapsulation, to not let someone making a change in our code, making our variables mutable, there is a chance of breaking our app
//mario.health = -3
// That's why we have getters and setters methods to get and set the values
mario.setHealth(-3)
mario.setHealth(8)
mario.setSpeed(1)

console.log(`Mario has ${mario.getHealth()} health and ${mario.getSpeed()} speed`)

export { }