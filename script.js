const dogName = "Sherlock";
const human1Name = "Ted";
const human2Name = "Inessa";
let dogAge = 2
let human1Age = 39;
let human2Age = 38;
let years = 550
let inessaAge = .85

function ageIncreaser() {
 dogAge = dogAge + years;
 human1Age = human1Age + years;
 human2Age = human2Age + years * inessaAge;
}
ageIncreaser()

console.log('In ' + years + ' years, my dog ' + dogName + ' will be ' + dogAge + '.');
console.log('In ' + years +' years, I, ' + human1Name + ' will be ' + human1Age + '.');
console.log('In ' + years + ' years, My wife, ' + human2Name + ' will be ' + human2Age + '.');
