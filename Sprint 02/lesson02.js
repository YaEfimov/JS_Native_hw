// // 1. Добавьте один или несколько элементов в конец массива
//
// let fruits = ['apple', 'banana', 'orange'];
//
// fruits.push('apple', 'kiwi');
//
// console.log(fruits)
//
// // 2. Удалите последний элемент в массиве и верните этот элемент
//
// const users = [
//     {
//         id: 1,
//         name: 'Bob',
//         isStudent: true,
//     },
//     {
//         id: 2,
//         name: 'Alex',
//         isStudent: true,
//     },
//     {
//         id: 3,
//         name: 'Ann',
//         isStudent: true,
//     },
//     {
//         id: 4,
//         name: 'Donald',
//         isStudent: false,
//     },
// ];
//
// const lastUser = users.pop()
// console.log(lastUser)
// console.log(users)
//
// // 3. Удалите первого юзера и верните его
//
// const users = [
//     {
//         id: 1,
//         name: 'Bob',
//         isStudent: true,
//     },
//     {
//         id: 2,
//         name: 'Alex',
//         isStudent: true,
//     },
//     {
//         id: 3,
//         name: 'Ann',
//         isStudent: true,
//     },
//     {
//         id: 4,
//         name: 'Donald',
//         isStudent: false,
//     },
// ];
//
// const firstUser = users.shift();
//
// console.log(firstUser);
// console.log(users);
//
// // 4. Добавьте один и более элементов в начало массива
//
// const users = [
//     {
//         id: 1,
//         name: 'Bob',
//         isStudent: true,
//     },
//     {
//         id: 2,
//         name: 'Alex',
//         isStudent: true,
//     },
//     {
//         id: 3,
//         name: 'Ann',
//         isStudent: true,
//     },
//     {
//         id: 4,
//         name: 'Donald',
//         isStudent: false,
//     },
// ];
//
// const newsUser = {
//     id: 0,
//     name: 'Viva',
//     isStudent: true,
// }
//
// users.unshift(newsUser)
//
// console.log(users)
//
// // 5. Сделать reverse слова
//
// const str = 'JavaScript is awesome';
//
// console.log(str.split('').reverse().join(''));
//
// // 6. Напишите функцию mergeArrays, которая принимает на вход два массива и возвращает новый массив,
// // содержащий все элементы из обоих массивов.
//
// const mergeArrays = (arr1, arr2) => {
//     return arr1.concat(arr2);
// }
// console.log(mergeArrays([1, 2, 3], [4, 5, 6]))
// console.log(mergeArrays(['apple', 'banana'], ['orange', 'kiwi']));
//
// // 7. Напишите функцию JavaScript, которая сглаживает вложенный массив любой глубины
// // flat()
// const flattenArray = (array) => {
//     return array.flat(Infinity)
// }
//
// console.log(flattenArray([1, [2, 3], [[4], [5, 6]]]));
// console.log(flattenArray([1, [2, [3, [4, [5]]]]]));
//
// // 8. Напишите функцию JavaScript, которая находит первый элемент в массиве,
// // удовлетворяющий заданному условию.
// // find():
//
// const numbers = [10, 20, 30, 40, 50]
//
// const fruits = ["apple", "banana", "orange", "kiwi"]
//
// const findFirstElement = (randomArray, callback) => {
//     return randomArray.find(callback)
// }
//
// let firstNumberGreaterThan25 = findFirstElement(numbers, (num) => num > 25);
// console.log(firstNumberGreaterThan25);
//
// let firstFruitStartingWithO = findFirstElement(fruits, (fruit) => fruit.startsWith('o'));
// console.log(firstFruitStartingWithO);
//
// // 9. Напишите функцию JavaScript, которая проверяет,
// // присутствует ли заданный элемент в массиве.
// // includes()
//
// const checkElement = (array, value) =>{
//     return array.includes(value);
// }
//
// let numbers = [1, 2, 3, 4, 5];
// let fruits = ['apple', 'banana', 'orange', 'kiwi'];
//
// console.log(checkElement(numbers, 3)); // Output: true
// console.log(checkElement(fruits, 'grape')); // Output: false
//
//// 10. Напишите функцию JavaScript, которая фильтрует массив чисел
//// и возвращает только те элементы, которые больше заданного значения.
//// find()
//
// const findFirstElement = (numbers, callback) =>{
//     return numbers.find(callback);
// }
//
// const numbers = [10, 20, 30, 40, 50]
// const fruits = ['apple', 'banana', 'orange', 'kiwi'];
//
//
// let firstNumberGreaterThan25 = findFirstElement(numbers, (num) => num > 25);
// console.log(firstNumberGreaterThan25); // Output: 30
//
// let firstFruitStartingWithO = findFirstElement(fruits, (fruit) => fruit.startsWith('o'));
// console.log(firstFruitStartingWithO); // Output: "orange"

// // 11. Напишите функцию JavaScript, которая проверяет,
// // присутствует ли заданный элемент в массиве.
//
// const checkElement = (array, value) => {
//     return array.includes(value)
// }
//
// let numbers = [1, 2, 3, 4, 5];
// let fruits = ['apple', 'banana', 'orange', 'kiwi'];
//
// console.log(checkElement(numbers, 3)); // Output: true
// console.log(checkElement(fruits, 'grape')); // Output: false

// 12. Напишите функцию JavaScript, которая фильтрует массив чисел
// и возвращает только те элементы, которые больше заданного значения.
// filter():
//

const filterGreaterThan = (array, value) => {
    return array.filter((el) => {
        return el > value
    });
}

let numbers1 = [10, 20, 30, 40, 50];
let numbers2 = [5, 15, 25, 35, 45];

console.log(filterGreaterThan(numbers1, 25)); // Output: [30, 40, 50]
console.log(filterGreaterThan(numbers2, 20)); // Output: [25, 35, 45]


