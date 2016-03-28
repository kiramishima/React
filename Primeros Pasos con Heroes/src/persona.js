class Persona{
	constructor(name, age){
		this.name = name;
		this.age = age;
	}
	getName(){
		return this.name;
	}
}

let { name , age } = Persona;

//Let es Var
let descriptor = {
  enumerable: false,
  configurable: true,
  writable: true
};

let speaker = {
	firstName: "Kira",
	lastName: "Mishima",
	twitterId: "@kiramishima"
}

//

let { firstName, lastName, twitterId} = speaker;

console.log(firstName)
console.log(lastName)
console.log(twitterId);

//let { fName: firstName, lName: lastName, twId: twitterId } = speaker;
//console.log(fName);

/*let colors = ["red", "green", "blue"];

let [primary, secondary, tertiary] = colors;
console.log(primary);
console.log(secondary);
console.log(tertiary);*/

let colors = ["red", "green", "blue", "yellow", "orange"];

let [primary, secondary, tertiary, ...otherColors] = colors;
console.log(primary);
console.log(secondary);
console.log(tertiary);
console.log(otherColors);