//////////////////////////////////////////////////////////////////
//Задачи на закрепление ссылочного типа данных и spread оператора:
//////////////////////////////////////////////////////////////////

//3) У вас есть объект пользователя с информацией о его имени и адресе.
// Обновите значение города в адресе пользователя(сделайте это иммутабельно, используя spread оператор

const user = {
    name: 'John', address: {
        city: 'New York', country: 'USA',
    },
}

const updatedUser = {...user, address: {...user.address, city: 'Toronto'}};

//TODO:
// updatedUser.address.city = 'Toronto';

console.log("user: ", user.address.city)
console.log("updatedUser: ", updatedUser.address.city)

//4) У вас есть массив и новый элемент, который вы хотите добавить в конец этого массива.
// Напишите функцию addElementToArray, которая принимает исходный массив и новый элемент, и возвращает новый массив, в котором новый элемент добавлен в конец(используйте spread опретор для решения)

const originalArray = [1, 2, 3, 4, 5];

const addElementToArray = (numbers, element) => {

    return [...numbers, element];

    //TODO:
    // const newArray = [...numbers];
    // newArray.push(element);
    // return newArray;

}

const newArray = addElementToArray(originalArray, 6);

console.log(originalArray)
console.log(newArray)

//////////////////////////////////////////////////////////////////
//Задачи для отработки деструктуризации:
//////////////////////////////////////////////////////////////////

//1) Извлечь значения свойств объекта в переменные name, age, city
//   и вывести в консоль эти переменные

const secondUser = {
    name: 'John',
    age: 25,
    city: 'New York'
};

const {name, age, city} = secondUser

console.log(name);  // 'John'
console.log(age);   // 25
console.log(city);  // 'New York'

//2) Извлечь значения из массива в переменные secondFruit, thirdFruit,
// а первую переменную пропустить и вывести в консоль эти переменные

const fruits = ['apple', 'banana', 'orange'];

const [, secondFruit, thirdFruit] = fruits

console.log(secondFruit);  // 'banana'
console.log(thirdFruit);   // 'orange'

// 3) Использовать деструктуризацию в параметрах функции

const person =
    {
        name: 'Alice',
        age: 30
    };

// Деструктуризация в параметрах функции
function printPersonDetails({name, age}) {
    console.log(`Name: ${name}, Age: ${age}`);
}

printPersonDetails(person);  // Вывод: Name: Alice, Age: 30

// 4) Установите значение по умолчанию для свойства year которого нет в объекте car

const car = {brand: 'Toyota', model: 'Camry'};

const {brand, model, year = '2022'} = car;

console.log(brand);  // 'Toyota'
console.log(model);  // 'Camry'
console.log(year);   // 2022 (значение по умолчанию)

// 5) Извлечь значения из массива объектов и вывести их в консоль

const students = [
    {name: 'Alex', grade: 'A'},
    {name: 'Emma', grade: 'B'},
    {name: 'Chris', grade: 'C'},
];

// TODO:
//  const [student1,,student3]= students

const [{ name: student1 }, , { name: student3 }] = students;

console.log(student1);  // 'Alex'
console.log(student3);  // 'Chris'

// 6) Установите значение по умолчанию для свойства age которого нет в объекте person
// и переименовать переменные, чтобы достать значение с свойства firstName

const thirdPerson = {
    firstName: 'Max',
    lastName: 'Johnson'
};

const firstName = 'first Name: Nina';
const lastName = 'last Name: Ivanov';

const {firstName: namePerson, lastName: secondNamePerson, agePerson = 25} = thirdPerson

console.log(namePerson); // 'Max'
console.log(secondNamePerson); // 'Johnson'
console.log(agePerson); // 25 (значение по умолчанию)





