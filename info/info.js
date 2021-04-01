const alice = {
  firstName: 'Alice',
  lastName: 'Liddell',
  age: 28,
  language: ['HTML', 'CSS', 'JavaScript', 'Visual Basic']
}

const bob = {
  firstName: 'Bob',
  lastName: 'Lemon',
  age: 30,
  language: ['Python', 'LISP', 'C++', 'Scheme']
}

const charlie = {
  firstName: 'Charlie',
  lastName: 'Charlot',
  age: 8,
  language: ['Python', 'C++', 'Javascript', 'HTML', 'CSS', 'PHP', 'JAVA']
}

const printInfo = (thisObj) => {
  console.log(`firstName: ${thisObj.firstName}`)
  console.log(`lastName: ${thisObj.lastName}`)
  console.log(`age: ${thisObj.age}`)
}

const canVote = (thisObj) => {
  return thisObj.age >= 18
}

const mostSkilledDev = (obj1, obj2) => {
  let nbSkill1 = obj1.language.length
  let nbSkill2 = obj2.language.length
  return nbSkill1 > nbSkill2 ? obj1.firstName : nbSkill1 < nbSkill2 ? obj2.firstName : "draw"
}

console.log(mostSkilledDev(charlie, charlie))