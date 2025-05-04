// Question 3: Prototypal Inheritance
function Animal(name) {
  this.name = name;
  this.speed = 0;
}

Animal.prototype.run = function(speed) {
  this.speed += speed;
  console.log(`${this.name} runs at speed ${this.speed}`);
};

function Rabbit(name) {
  Animal.call(this, name); // Call parent constructor
}

Rabbit.prototype = Object.create(Animal.prototype);
Rabbit.prototype.constructor = Rabbit;

Rabbit.prototype.hide = function() {
  console.log(`${this.name} hides`);
};

// Example
const rabbit = new Rabbit("Fluffy");
rabbit.run(5);
rabbit.hide();
