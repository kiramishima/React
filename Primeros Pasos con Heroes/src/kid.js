//import Persona from 'Persona';

class Kid extends Persona{
	constructor(name, age, gender){
		super(name, age);
		this.gender = gender;
	}

	getAge(){
		return this.age;
	}

	getGender(){
		return this.gender;
	}
}


let kid = new Kid("Cassiano", 29, "M");
