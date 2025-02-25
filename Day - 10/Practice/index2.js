let superHeroes = {
    1: {
        name: 'Batman',
        power: ['intelligence', 'money'],
        health: 45,
        villains: [
            { name: 'Redhood', health: 34 },
            { name: 'Twoface', health: 64 }
        ],
        metadata: { favouriteColor: 'red', age: 15 }
    },
    2: {
        name: 'Ironman',
        power: ['jarvis', 'money'],
        health: 33,
        villains: [
            { name: 'Manderin', health: 44 },
            { name: 'Titanium Man', health: 56 }
        ],
        metadata: { favouriteColor: 'red', age: 13 }
    }
}

console.log(superHeroes);

console.log(superHeroes[1].villains[0].health);
// 34

console.log(superHeroes[1].power[0]);
// intelligence

console.log(superHeroes[2].metadata.age);
// 13

// Slicing property

let fruits = ["banana", "mango", "apple", "orange", "pinapple"];

let newFruits = fruits.slice(1, 3);

console.log(fruits);

console.log(newFruits);

// Output:
// [ 'banana', 'mango', 'apple', 'orange', 'pinapple' ]
// [ 'mango', 'apple' ]


// Splicing property
let fruit = ["banana", "mango", "apple", "orange", "pinapple"];

console.log(fruit);

fruit.splice(2, 1, "lemon", "grape");

console.log(fruit);


// Output:
// [ 'banana', 'mango', 'apple', 'orange', 'pinapple' ]
// [ 'banana', 'mango', 'lemon', 'grape', 'orange', 'pinapple' ]
