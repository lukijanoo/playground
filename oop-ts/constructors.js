var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Constructors, static, parameter, readonly
var Character = /** @class */ (function () {
    function Character(hunger, health) {
        Character.characterCount++;
        console.log("I'm the ".concat(Character.characterCount, " character created"));
        this.hunger = hunger;
        this.health = health;
    }
    Character.prototype.setHunger = function (hunger) {
        this.hunger = hunger;
    };
    Character.prototype.setHealth = function (health) {
        this.health = health;
    };
    Character.prototype.getHunger = function () {
        return this.hunger;
    };
    Character.prototype.getHealth = function () {
        return this.health;
    };
    // it lives on the class not the instance level
    Character.characterCount = 0;
    return Character;
}());
var Hero = /** @class */ (function (_super) {
    __extends(Hero, _super);
    function Hero(heroId, hunger, health) {
        var _this = _super.call(this, hunger, health) || this;
        _this.heroId = heroId;
        return _this;
    }
    Hero.prototype.setHeroId = function (heroId) {
        // Cannot assign to 'heroId' because it is a read-only property, this one we'll get if we set heroId to be readonly property
        this.heroId = heroId;
    };
    Hero.prototype.getHeroId = function () {
        return this.heroId;
    };
    return Hero;
}(Character));
var jeff = new Hero(123, 100, 100);
var jeff2 = new Hero(123, 100, 100);
var jeff3 = new Hero(123, 100, 100);
var jeff4 = new Hero(123, 100, 100);
var jeff5 = new Hero(123, 100, 100);
console.log("Hero Id: ".concat(jeff.getHeroId(), ", Hunger: ").concat(jeff.getHunger(), ", Health: ").concat(jeff.getHealth()));
// Character.characterCount -> valid
// jeff. -> there is no characterCount on the instance level
//-------------------------------------------------------------------------------
// I had to compile .ts into .js to run it, running a .ts file directly won't work cause of lack of expiremental feature in node 
var Hero1 = /** @class */ (function () {
    function Hero1(hunger1, health1) {
        this.hunger1 = hunger1;
        this.health1 = health1;
    }
    return Hero1;
}());
var jeff1 = new Hero1(100, 100);
console.log("Hunger: ".concat(jeff1.hunger1, ", Health: ").concat(jeff1.health1));
