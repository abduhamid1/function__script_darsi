// 1 misol

// let a = +prompt("a son kiriting");
// let b = +prompt("b son kiriting");

// function numbers(a ,b) {
//     return a + b
// }
// console.log(numbers(a,b));


// 2 misol

// let a = +prompt("a son kiriting");
// let b = +prompt("b son kiriting");

// function numbers(a ,b) {
//     return a - b
// }
// console.log(numbers(a,b));

//3 misol

// let a = 2;
// function num(a) {
//     return (
//             Math.pow(a, 4)
//     )
// }
// function num2(a) {
//     return (
//         Math.pow(a, 2)
//     )
// }
// function num3(a) {
//     return (
//         Math.pow(a,3)
//     )
// }
// console.log(num(a));
// console.log(num2(a));
// console.log(num3(a));

// 4 misol
// let a = 20;
// function toq(a) {
//     for (let i = 1; i <= a; i++) {
//         if (i % 2 == 1) {
//             console.log(i + "toq");
//         } else {
//             console.log();
//         }
//     }
// }
// toq(a);
// 5 misol

// let a = 20;

// function toq(a) {
//     for (let i = 1; i <= a; i++) {
//         if (i % 2 == 0) {
//             console.log(i + "juft");
//         } else {
//             console.log();
//         }
//     }
// }
// toq(a);

// 6misol
// n = 10;
// function inkrament(inkramentNumber,decromentNumber) {
//     let inc = ++inkramentNumber;
//     let dec = --decromentNumber;
//     return `${inc} , ${dec}`
// }
// console.log(inkrament(n , n));

// misol-7
// let a = +prompt("a son kiriting")

// function boluvchi(a) {
//     for (let i = 1; i <= a; i++) {
//         a % i == 0 ? console.log(i) : console.log();
//     }
// }
// boluvchi(a);

// misol-8
// let a = 1;
// function as(a) {

// for (let i = 1; i <= 10; i++) {
//     for (let j = 1; j <= 10; j++) {
//         document.write(i + "*" + j + "=" + i * j + "</br>")
//     }
// }
// }

// as(a);
// 9 misol
// let topee = document.querySelector(".titless");
// let input1 = document.querySelector("#input1");
// let input2 = document.querySelector("#input2");
// let plus = document.querySelector("#plus");
// let minus = document.querySelector("#minus");
// let kopaytir = document.querySelector("#kop");
// let bol = document.querySelector("#bol");
// let tozala = document.querySelector("#tozala");
// let nub1 = document.querySelector(".h2");
// plus.addEventListener('click', () => {
//     return topee.textContent = input1.value * 1 + input2.value * 1;
// })
// minus.addEventListener('click', () => {
//     return topee.textContent = input1.value * 1 - input2.value * 1;
// })
// kopaytir.addEventListener('click', () => {
//     return topee.textContent = input1.value * 1 * input2.value * 1;
// })
// bol.addEventListener('click', () => {
//     return topee.textContent = input1.value * 1 / input2.value * 1;
// })
// tozala.addEventListener('click', () => {

//     return (
//         topee.textContent = "",
//         input1.value = "",
//         input2.value = ""
//     )

// })