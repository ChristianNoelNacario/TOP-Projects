// // const buttons = document.querySelectorAll('button');

// // buttons.forEach((button) => {

// //     button.addEventListener('click', () => {
// //         alert(button.id);
// //     })
// // // }) 

// // let fruit = prompt("What fruit do you want?", "apples");
// // let date = {};

// // function isEmpty(obj) {
// //     if (Object.keys(obj).length == 0) {
// //         return true;
// //     }
// //     else {
// //         return false
// //     }
// // }

// // alert(isEmpty(date));

// // date["day"] = "Sunday";

// // alert(isEmpty(date));

// // let menu = {
// //     width: 200,
// //     height: 300,
// //     title: "My menu"
// //   };

// // function multiplyNumeric(obj) {
// //     for (keys in obj) {
// //         if (typeof(obj[keys]) === typeof(1)) {
// //             console.log(typeof(obj[keys]));
// //             obj[keys] *= 2;
// //         }
// //     }
// // }
// // multiplyNumeric(menu);
// // console.log(menu);

// let array = [1,2,3,4,5];

// // console.log(nums.reduce( (total, currentValue) => total * currentValue), 1);

// // console.log(nums.filter( num => num % 2 != 0));

// function sumOfTripledEvens(arr) {
//     return arr.filter( num => num % 2 == 0).map( num => num * 3).reduce( (total, curr) => total += curr, 0 )
//     // let filt = arr.filter( num => num % 2 == 0);

//     // let multiplied = filt.map( num => num * 3);

//     // let totaled = multiplied.reduce( (total, curr) => total += curr, 0 )

//     // console.log(filt);
//     // console.log(multiplied);
//     // console.log(totaled);    
//     // console.log(arr);
//   }

//   console.log(sumOfTripledEvens(array));

// const palindromes = function (word) {
//   let cleanStr = word.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
//   console.log(cleanStr);
//   let reversedWord = cleanStr.split('').reverse().join('')

//   for (i = 0; i < cleanStr.length; i++ ) {
//       if (cleanStr[i] === reversedWord[i]){
//         continue;
//       }
//       else{
//         return false;
//       }
//   }

//   return true;
// };

// console.log(palindromes('rac3e3car'));

// const books = [
//   {
//     title: 'Book',
//     author: 'Name'
//   },
//   {
//     title: 'Book2',
//     author: 'Name2'
//   }
// ]
// let arr = []
// for (titles in books) {
//   arr.push(books[titles].title);
// }
// console.log(arr);

// const fibonacci = function(num) {
//   let arr = [0,1];
//   let next = 0;
//   parseInt(num);

//   if ( num < 0){ return "OOPS"};
//   if ( num == 1){ return 1};

//   for (i = 1; i < num; i++){
//    next = arr[i] + arr[i - 1];
//    arr.push(next);
//   }
//   return next;
// };

// console.log(fibonacci(1));

// const people = [
//   {
//     name: "Carly",
//     yearOfBirth: 2018,
//   },
//   {
//     name: "Ray",
//     yearOfBirth: 1962,
//     yearOfDeath: 2011,
//   },
//   {
//     name: "Jane",
//     yearOfBirth: 1912,
//     yearOfDeath: 1941,
//   },
// ]

// // function findTheOldest (user) {
// //   let sorted = 
  
// // };
// let sorted = people.sort( (a,b) => (a.yearOfDeath - a.yearOfBirth) < (b.yearOfDeath - b.yearOfBirth) ? 1 : -1);
// console.log(sorted[2].yearOfBirth);

// let year = new Date().getFullYear();
// console.log(year);

var screenText = "-125+500/3-400";


var second_num = screenText.match(/\+(\d+)/g);

console.log(screenText);
console.log(second_num); // Output: [ '5', '10', '15', '2' ]
console.log(-200 - 200);
