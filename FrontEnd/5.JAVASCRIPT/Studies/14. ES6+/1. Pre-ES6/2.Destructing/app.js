// let number1, number2;

// arr=[100,200,300,400];

// number1=arr[0];
// number2=arr[1];

//Destructing//
// [number1, number2]=arr

// console.log(number1,number2);

//Object Desturcting//

// const numbers=
// {
//     a:10,
//     b:20,
//     c:30,
//     d:40,
//     e:50
// };

// const {a:number1, c:number2, e:number3}=numbers;

// console.log(number1, number2, number3)

//Function Destructing//

const getlang=()=>["Python", "Java", "C++"];

const [lang1, lang2, lang3]=getlang();
console.log(lang1,lang2,lang3);