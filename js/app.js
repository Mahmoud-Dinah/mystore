"user strict"
let userName = prompt("what's your name?");

console.log(typeof userName);

let userAge = prompt("how old are you");
console.log(typeof userAge);

let favEquip = prompt("whats your favourite equipment?" , 'Hammer , Gloves , Helmet');
console.log(typeof favEquip);

let favSeas = prompt('Which season do you like?' , 'Summer , winter');
console.log(typeof favSeas);


alert('Your name is : ' + userName + '  and your age is : ' + userAge + '  your favourite equipment is : ' + favEquip + '  your favourite season is : ' + favSeas);