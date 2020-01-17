// Your job is to write a function that accepts any band name as an 
// argument. The function will increment a global variable by one each 
// time it is invoked, and return that number, and the band name 
// concatenated together.

let num = 0;

const generateBandNum = (bandName) => {
    num++;
    return `${num}. ${bandName}`;
};

const blazingGlory = generateBandNum("Blazing Glory");
console.log(blazingGlory);
const ringaBlinga = generateBandNum("Ringa Blinga");
console.log(ringaBlinga);
const bigTubs = generateBandNum("Big Tubs");
console.log(bigTubs);