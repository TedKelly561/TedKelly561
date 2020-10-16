
const dogName = "Sherlock";
const human1Name = "Ted";
const human2Name = "Inessa";
let dogAge = 2
let human1Age = 39;
let human2Age = 41;
let years = 4

function ageIncreaser() {
 dogAge = dogAge + years;
 human1Age = human1Age + years;
 human2Age = human2Age + years;
}
ageIncreaser()

console.log('In ' + years + ' years my dog ' + dogName + ' will be ' + dogAge + '.');
console.log('In ' + years +' I, ' + human1Name + ' will be ' + human1Age + '.');
console.log('In ' + years + ' My wife, ' + human2Name + ' will be ' + human2Age + '.');