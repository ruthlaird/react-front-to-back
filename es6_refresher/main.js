// CONST & LET
const name = 'John';
let name2 = 'Jack';
name2 = 'Fred';

console.log(name2); //Fred

const person = {
    name: 'John',
    age: 33,
};

person.name = 'Jack';
console.log(person.name); //Jack

const nums = [1,2,3,4];
nums.push(5);
console.log(nums); //[1,2,3,4,5]

// ARROW FUNCTIONS

// function sayHello() {
//     console.log('Hello');
// }

// const sayHello = () => {
//     console.log('Hello from an arrow function');
// }

const sayHello = () =>  console.log('Hello from an arrow function');

sayHello();

const sayName = name => console.log(name);
sayName('Harry');

const sayNameAndAge = (name, age) => console.log(`Name: ${name}, Age: ${age}`);
sayNameAndAge('Bill', 27);


//High order array methods

const fruits = ['Apples', 'Oranges', 'Grapes'];

// FOREACH
fruits.forEach((fruit, index) => {
    console.log(fruit, index);
});

// MAP
const singleFruit = fruits.map( fruit => fruit.slice(0, -1).toUpperCase());

console.log(singleFruit);

// FILTER

const people = [
    {id: 1, name: 'Karen'},
    {id: 2, name: 'Bob'},
    {id: 3, name: 'Sharon'},
];

const people2 = people.filter(person => person.id !== 2);
console.log(people2);

// SPREAD

const arr = [1, 2, 3];
const arr2 = [...arr, 4];

console.log(arr2);

const arr3 = [...arr.filter(num => num !== 2)];

console.log(arr3);

const person2 = {
    name: 'Brad',
    age: 36
}

const newPerson2 = {
    ...person2,
    email: 'brad@gmail.com'
};

console.log(newPerson2);

// DESTRUCTURING

const profile = {
    pname: 'John Doe',
    address: {
        street: '40 Main St',
        city: 'Boston'
    },
    hobbies: ['movies', 'music']
};

const { pname, address, hobbies } = profile;
const { street, city } = profile.address;

console.log(pname, address.street, hobbies[0]);
console.log(street, city);

// CLASSES

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        return `Hello, may name is ${this.name} and I am ${this.age}`;
    }
}

const personA = new Person('John', 33);
const personB = new Person('Sara', 28);

console.log(personA.age);
console.log(personA.greet());

// SUBCLASSES
class Customer extends Person {
    constructor(name, age, balance) {
        super(name, age);
        this.balance = balance;
    }

    info() {
        return `${this.name} owes $${this.balance}.00`
    }
}

const customer1 = new Customer('Kevin', 32, 300);
console.log(customer1.name);
console.log(customer1.info());

// MODULES
/*
//in file1.js
export const name = 'Jeff';
export const nums = [1,2,3];
export default Person;

//in file2.js
import {name, nums} from './file1';
import Person from './file1';
*/