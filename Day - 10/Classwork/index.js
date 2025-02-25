let str = "SV University";

console.log(str.length);

console.log(str.length-1);

console.log(str[2]);

console.log(str[str.length-1]);

// str[0];

console.log(str);

let arr = [1, 2, 3, "Rishita", 1.12, true, false, null, undefined, ""];

console.log(arr[3]);

arr.push("Krittika");

console.log(arr);

arr.pop();

console.log(arr);

let obj = {                                         //Object item prints in alphabetical order
    dipankar: {className: "B.Tech", rn: 195, subjects: ["NM", "DBMS", "CN", "RM"]}, // In object any item considered as a string
    iman: {className: "B.Tech", rn: 108, subjects: ["NM", "DBMS", "CN", "RM"]},
    1: {}
};

console.log(obj);

console.log(obj.dipankar);

console.log(obj["dipankar"]);

// obj.dipankar="My Name";
console.log(obj.dipankar.subjects[1]);

console.log(obj);

obj.sohan = {rn: 143, hobbies:["drawing", "Books"]};
obj.sohan = {rn: 22, hobbies:["drawing", "Books"]};

console.log(obj);

console.log(obj.sohan);

let name = "Amar";
let Class = "B.Tech";
let hobbies= ["Gaming", "Singing"];

let newObj = {
    name, Class, hobbies
}

console.log(newObj);

// let ans = [1, 2, 3[9, 4, 6,[5, 1, 9]]];

// console.log(ans[3][3][0]);

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
