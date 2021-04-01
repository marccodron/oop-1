/* Créer un object literal alice qui contiendra les informations suivantes:
firstName: 'Alice'
lastName : 'Liddell'
age: 28
*/

const run = (alice) => {
  return `${alice.firstName} ${alice.lastName} is actually ${alice.age}`
}
const alice = {
  firstName: 'Alice',
  lastName: 'Liddell',
  age: 28,
}
console.log(run(alice))


/* Dans le même fichier créer object literal bob qui contiendra 
les informations suivantes:
firstName: 'Bob'
lastName: 'Lemon'
age: 30
*/

const newRun = (bob) => {
  return `${bob.firstName} ${bob.lastName} is actually ${bob.age}`
}
const bob = {
  firstName: 'Bob',
  lastName: 'Lemon',
  age: 30,
}
console.log(newRun(bob))



/* Dans le même fichier créer object literal charlie qui contiendra 
les informations suivantes:
firstName: 'Charlie'
lastName: 'Charlot'
age: 8
*/

const lastRun = (charlie) => {
  return `${charlie.firstName} ${charlie.lastName} is actually ${charlie.age}`
}
const charlie = {
  firstName: 'Charlie',
  lastName: 'Charlot',
  age: 8,
}
console.log(lastRun(charlie))