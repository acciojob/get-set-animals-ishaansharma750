//complete this code
class Animal {
	constructor(species){
		this.species  = species;
	}
	makeSound(){
		console.log(`this ${this.species} makes a sound`);
	}
}

class Dog extends Animal {
	constructor(species){
		super(species)
	}
	bark(){
		console.log("woof");
	}
}

class Cat extends Animal {
	constructor(species){
		super(species)
	}
	purr(){
		console.log("purr");
	}
}
let species = "ragdoll"
const myCat = new Cat(species);
myCat.makeSound();
myCat.purr();

species = "Dalmitions";
const = myDog = new Dog(species);
myDog.makeSound();
myDog.bark();

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
