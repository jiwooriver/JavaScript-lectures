//1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];

//2. Index position
const fruits = ['🍎', '🍌'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[fruits.length -1]);
console.clear();

//3. Looping over an array
//a. for
for(let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

//b. for of
for(let fruit of fruits) {
    console.log(fruit);
}

//c. forEach
fruits.forEach((fruit) => console.log(fruit));

//4. Addition, deletion, copy
//push
fruits.push('🍓', '🍑');
console.log(fruits);

//pop
const poped = fruits.pop();
fruits.pop();
console.log(fruits);

//unshift
fruits.unshift('🍓', '🍋');
console.log(fruits);

//shift
fruits.shift();
fruits.shift();
console.log(fruits);

//splice
fruits.push('🍓', '🍑', '🍋');
console.log;
fruits.splice(1, 1);
console.log(fruits);
fruits.splice(1, 0, '🍏', '🍉');
console.log(fruits);

const fruits2 = ['🍐', '🍈'];
console.log(fruits2);

//5. Searching
// indexOf
console.clear();
console(fruits);
console(fruits.indexOf('🍎'));
console(fruits.indexOf('🍉'));
console(fruits.indexOf('🍈'));

//includes
console(fruits.includes('🍉'));
console(fruits.includes('🍈'));

//lastIndexOf
console.clear();
fruits.push('🍎');
console.log(fruits);
console.log(fruits.indexOf('🍎'));
console.log(fruits.lastIndexOf('🍎'));