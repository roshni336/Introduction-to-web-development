//Arrow functions

const greet =(name) => {
//console.log(`hello ${name}`);
};

greet ('Roshni');


//Array methods
const numbers =[10, 20, 40, 60];

//Push and Pop
numbers.push(60);
numbers.push(100);

//console.log(numbers);

numbers.pop();
//console.log(numbers);

//Map, Filters and Reduce
//numberslist =[10, 20, 30, 40, 50];
const anotherNumbers =[10, 20, 35, 45, 50];
/*numberslist.map((numbers) =>{
    console.log(numbers);
})
*/

const doubleNumbers = anotherNumbers.map((numbers)=>{
    return numbers*2;
});
//console.log(doubleNumbers);

const evenNumberList = anotherNumbers.filter((number)=>{
    return number%2 ===0;
});
//console.log(evenNumberList);

const totalSum = anotherNumbers.reduce((accumulator, currentValue) =>{
    //console.log (accumulator, currentValue);
    return accumulator + currentValue;
}, 0);
//console.log(totalSum);

//Slice and Splice
const fruits=['apple', 'banana', 'orange', 'mango'];

const slicefruits =fruits.slice(1,3);
//console.log(slicefruits);

//const splicefruits =
fruits.splice(1,2, 'grapes','kiwi');
//console.log(splicefruits);
//console.log(fruits);

//Spread operator
const names =['Alice', 'Bob', 'Charlie'];
/*console.log(names);
console.log(...names);
*/
const newNames =[...names, 'Roshni', 'Saugat'];
//console.log(newNames);

const user = {
    name : 'Roshni',
    address : 'Kathnmadu',
    age : 20,
};

const updatedUser = {
    ...user,
    isStudent : true,
};
//console.log(updatedUser);


//Distructing
const [firstName, secondName] = newNames;
// console.log(firstName);
// console.log(secondName);
const{name, address}=updatedUser;
console.log(name, address);