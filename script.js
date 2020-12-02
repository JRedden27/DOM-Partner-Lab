// let names = ["Elu", "Hakim", "John"];
// for(let i = 0; i < names.length; i++) {
//     document.getElementById("list").innerHTML += `<li>${names[i]}</li>`;
// }

// data types in javascript
// const int = 8; // stored by value
// const string = 'hello';
// const array = []; // located at memory block 1
// const array2 = []; // located at memory block 2
// const object = {}; // located at a specific place in memory

// console.log(int); // 8
// console.log(string); // hello
// console.log(array); // address to he location of the array
// console.log(array === array2);

// const img = document.createElement('img');

// let logo = prompt("Small or large?");

// if (logo === "Small") {
//     document.getElementById("logo").innerHTML += `<img src="http://placekitten.com/400/250">`;

//     // img.src = "http://placekitten.com/200/300";
//     // img.height = 400;
//     // img.width = 250;
// } else if (logo === "Large") {
//     document.getElementById("logo").innerHTML += `<img src="http://placekitten.com/800/500">`;
//     // img.src = "http://placekitten.com/200/300";
//     // img.height = 800;
//     // img.width = 500;
// }

// document.getElementById("logo").appendChild(img);

//let color = prompt("What color do you want");

//document.getElementById("color").style.backgroundColor = color

// for ( let i = 0; i < 4; i++){
//    let member = prompt("Who's in class today?");
//    document.getElementById("list").innerHTML += `<li>${member}</li>`
// }

// let question = prompt("What is your name?");
// let header = document.createElement("header");
// header.innerHTML += `${question}'s Resume!`;
// document.querySelector('body').appendChild(header);

let skills = ["Hacking", "Skating", "Flying"];
let answer = prompt("Ordered or unordered?");

if (answer === "Ordered") {
    let orderedList = document.createElement('ol');
    for (let i = 0; i < skills.length; i++) {
        orderedList.innerHTML += `<li>${skills[i]}</li>`
    }
    document.querySelector('body').appendChild(orderedList);
} else if (answer === "Unordered") {
    let unorderedList = document.getElementById("list").innerHTML += `<ul></ul>`
    for (let i = 0; i < skills.length; i++) {
        document.querySelector('ul').innerHTML += `<li>${skills[i]}</li>`
    }
}