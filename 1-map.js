//HomeWork 1-map
let array = [
    { id: 1, name: "Вася" },
    { id: 2, name: "Петя" },
    { id: 1, name: "Вася" }
];

let mySet = new Set();
let array2 = [];
array.forEach((element) => {
    mySet.add(Object.values(element)[0]);
});

function compare(element) {
    return element.id == targetId;
}

let targetId;
mySet.forEach((element) => {
    targetId = element;
    array2.push(array.find(compare));
})

console.log(array2);