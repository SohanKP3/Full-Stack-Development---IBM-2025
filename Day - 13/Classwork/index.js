// foreach

// let arr = [1, 2, 3, 4, "Sita", 5, 6, 7, 8, 9, "Rajesh", 10];
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// arr.forEach((e1, index)=>{
//     console.log(e1, index)
// });

// console.log(ans);

// let ans = arr.forEach((e1, index)=>{
//     return (e1, i)
// });

// console.log(ans);

// let ans = arr.map((e1, i)=>{
//     return (e1, i);
// });

// console.log(ans);

// let ans = arr.map((e1, i)=>{
//     return e1**2;
// });

// console.log(ans);

// filter

// let output = arr.filter((e1, i)=>{
//     return e1%2==0 && e1%4==0;
// });

// console.log(output);

// let output = arr.filter((e1, i)=>{
//     return typeof e1 == "string" && e1%5==0;
// });

// console.log(output);

// let output = arr.filter((e1, i)=>{
//     return typeof e1 == "string" || e1%5==0;
// });

// console.log(output);


// reduce

// let output = arr.reduce((acc, e1)=>{
//     return acc+e1;
// });                         //here 1 is accumulator.

// console.log(output);


// let output = arr.filter((acc, e1)=>{
//         return e1%5==0;
//     }).map((e1, i)=>{
//         return e1*2;
//     }).map((e1, e1)=>{
//         return er1*2;
//     }).reduce((acc, e1)=>{
//         return acc+e1;
//     })
    
// console.log(output);


let ans = arr.sort((a, b)=>{return b-a});

console.log(ans);

let data = [
    {name:"watch", price:2000, desc:"Good Watch", rating:4},
    {name:"shoe", price:1200, desc:"Good shoe", rating:4.5},
    {name:"car", price:200000, desc:"Good car", rating:5},
    {name:"phone", price:24000, desc:"Good Watch", rating:4.2},
    {name:"laptop", price:52000, desc:"Good Watch", rating:4.8},
    {name:"headphone", price:6000, desc:"Good Watch", rating:3},
    {name:"laptop bag", price:1000, desc:"Good Watch", rating:5},
]

data.sort((a, b)=>{
    return a.price-b.price
})


data.sort((a, b)=>{
    let nameA=a.name.toUpperCase();
    let nameB=b.name.toUpperCase();
    
    if(nameA<nameB){
        return -1;
    }
    if(nameA>nameB){
        return -1;
    }
});

data.sort((a, b)=>{
    let nameA=a.name.toUpperCase();
    let nameB=b.name.toUpperCase();
    
    if(a.name<b.name){
        return -1;
    }
    if(nameA>nameB){
        return -1;
    }
});

console.log(data);
