/* Traduire votre script info.js pour utiliser une classe, et donc des instances de classes, au lieu object literals.

la classe devra se nommer Human
il faudra un constructeur qui initialisera donc firstName, lastName, age, et language
les fonctions printInfo, canVote, mostSkilledDev seront désormais des méthodes de cette classe
*/

class Human {
  // class 'Human':
  constructor(firstName, lastName, age, language) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.language = language;
  }
  // methodes de la class 'Human': printInfo, canVote, mostSkilledDev
  // 
  printInfo() {
    console.log(`firstName: ${this.firstName}`)
    console.log(`lastName: ${this.lastName}`)
    console.log(`age: ${this.age}`)
    console.log(`age: ${this.language}`)
  }
  canVote() {
    return this.age >= 18 ?
  }
  mostSkilledDev = (object) => {
    const nbSkill1 = this.language.length;
    const nbSkill2 = object.language.length;
    return nbSkill1 > nbSkill2 ? this.firstName : nbSkill1 < nbSkill2 ? object.firstName : "draw"
  }
}

//exports.Human = Human
exports.Human = Human