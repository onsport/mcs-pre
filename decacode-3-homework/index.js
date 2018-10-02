const path = require('path');
const fs = require('fs');

const pathToJSON = path.resolve(__dirname, 'index.json');
const data = fs.readFileSync(pathToJSON, 'utf8');

const users = JSON.parse(data);

// 1. кол во пользователей
console.log("Количество пользователей ", users.length);

// 2. средний возраст
var averageAge = 0;
users.forEach(element => {
    averageAge += element["age"] / users.length;
});
console.log("Средний возраст " , averageAge);

// 3. массив данных
console.log(users.map(element => {
    return element["age"] + " " + element["name"];
}).join(", "));

//4. с навыком Paint
var tmp = users.filter(element => {
    return element["skills"].includes("Paint");
});

console.log(tmp.map(element => {
    return element["name"];
}).join(", "));
