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

const img = document.createElement('img');

let logo = prompt("Small or large?");

if (logo === "Small") {
    document.getElementById("logo").innerHTML += `<img src="http://placekitten.com/400/250">`;

    // img.src = "http://placekitten.com/200/300";
    // img.height = 400;
    // img.width = 250;
} else if (logo === "Large") {
    document.getElementById("logo").innerHTML += `<img src="http://placekitten.com/800/500">`;
    // img.src = "http://placekitten.com/200/300";
    // img.height = 800;
    // img.width = 500;
}

document.getElementById("logo").appendChild(img);