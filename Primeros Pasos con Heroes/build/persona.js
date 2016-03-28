"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Persona = (function () {
	function Persona(name, age) {
		_classCallCheck(this, Persona);

		this.name = name;
		this.age = age;
	}

	_createClass(Persona, [{
		key: "getName",
		value: function getName() {
			return this.name;
		}
	}]);

	return Persona;
})();

var name = Persona.name;
var age = Persona.age;

//Let es Var
var descriptor = {
	enumerable: false,
	configurable: true,
	writable: true
};

var speaker = {
	firstName: "Kira",
	lastName: "Mishima",
	twitterId: "@kiramishima"
};

//

var firstName = speaker.firstName;
var lastName = speaker.lastName;
var twitterId = speaker.twitterId;

console.log(firstName);
console.log(lastName);
console.log(twitterId);

//let { fName: firstName, lName: lastName, twId: twitterId } = speaker;
//console.log(fName);

/*let colors = ["red", "green", "blue"];

let [primary, secondary, tertiary] = colors;
console.log(primary);
console.log(secondary);
console.log(tertiary);*/

var colors = ["red", "green", "blue", "yellow", "orange"];

var primary = colors[0];
var secondary = colors[1];
var tertiary = colors[2];
var otherColors = colors.slice(3);

console.log(primary);
console.log(secondary);
console.log(tertiary);
console.log(otherColors);
//# sourceMappingURL=persona.js.map