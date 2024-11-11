//Завдання1 Напишіть цикл, який виводить всі парні числа від 20 до 32.
const numbers = []
for (let i = 20; i <= 32; i++) {
  numbers.push(i)
}

numbers.forEach( num => {
  if (num % 2 === 0) {
    console.log(num)

  }
})

//завдання2 Створіть масив зі списком:вашого улюбленого фрукту,вашого улюбленого кольору,ім'я,рандомного числа,вашого віку.Виведіть цей проітерований масив на консоль і визначте його тип даних.

const myArray = [
    "watermelon",        
    "black",         
    "Olena",         
    Math.floor(Math.random() * 100), 
    21                
  ]
  
  myArray.forEach(element => {

    console.log(element )
  })
  
  console.log("Type of data array :", typeof myArray)


//завдання3 Напишіть цикл який виводить всі непарні числа від 17 до 39.

const numberrs = []
for (let i = 17; i <= 39; i++) {
  numberrs.push( i)
}

numberrs.forEach(num => {
  if (num % 2 !== 0) {

    console.log(num)

  }
})

//завдання4 Даний масив [1, 5, true, 'hello', false, null, 'iiii', 54, null], виведіть парні елементи

const array = [1, 5, true, 'hello', false, null, 'iiii', 54, null]

array.forEach((element, index) => {
  if (index % 2 === 0 ) {
    console.log("Index:", index, "Element:", element)
  }
})

//завдання5 Даний масив [1, 5, true, 'hello', false, null, 'iiii', 54, null], виведіть не парні елемент
const arrayy = [1, 5, true, 'hello', false, null, 'iiii', 54, null ]

arrayy.forEach((element, index) => {

  if (index % 2 !== 0) {
    console.log("Index:", index, "Elemennt :", element)

  } 
})

//завдання6 Даний масив [1, 2, 4, 2, 3, 55, 66, 777, 12]. Виведіть суму всіх  елементів масиву.

const array11 = [1, 2, 4, 2, 3, 55, 66, 777, 12]

let sum = 0

array11.forEach(element => {
  sum += element
})

console.log("Summa all elements is:", sum)

//звдання7 Даний масив [1, 2, 4, 2, 3, 5, 6, 7, 1]. Перемножити та вивести всі елементи масиву.

const array12 = [1, 2, 4, 2, 3, 5, 6, 7, 1]

let pr = 1

array12.forEach(element => {
  pr *= element
})

console.log("Multiplication  elements is :", pr)


//завдання9 Створіть функцію яка приймає дробове значення (наприклад 1.34 чи 55.43), та заокруглює його до меншого числа і повертає значення.

function roundDown(number) 
{
    return Math.floor(number)
}

console.log(roundDown(1.34))
console.log(roundDown(55.43))
console.log(roundDown(3.99))


//завдання10 Створіть функцію яка приймає дробове значення (наприклад 1.34 чи 55.43), та заокруглює його до більшого числа і повертає значення.
function roundUp(number) {
    return Math.ceil(number);
  }
  
  console.log(roundUp(1.34))
  console.log(roundUp(55.43))
  console.log(roundUp(3.99))

//завдання11 Створіть функцію яка генерує рандомне число (випадкове) від 0 до 1000 і повертає його.

function generateRandomNum() {
    return Math.floor(Math.random() * 1000)
  }
  

  console.log(generateRandomNum())

//завдання12 Створіть функцію яка приймає 2 числа та виодить степіть перше число основне, друге сама степіть.

function calculatePower(num, exponent) {
    return Math.pow(num, exponent)
  }
  
  console.log(calculatePower(2, 3)) 
  console.log(calculatePower(5, 2))  
  console.log(calculatePower(10, 0))

//завдання13 Створіть функцію яка приймає число, виводить з нього корінь, заокруглює його і повертає.

function calculateSR(number) {
    const sqrt = Math.sqrt(number)
    return Math.round(sqrt)
  }
  
  console.log(calculateSR(16))
  console.log(calculateSR(20))
  console.log(calculateSR(50))
  

//завдання14 Дано масив [1, 5, true], додати в кінець масиву 'Hello'

let arr = [1, 5, true]

arr.push('Hello')

console.log(arr)

//завдання15 Дано масив [1, 5, true], додати в початок масиву 'HelloArray'
let arr1 = [1, 5, true]

arr.unshift('HelloArray')

console.log(arr1)

//завдання16 Дано масив [1, 5, true], видалити останній елемент з масиву

let arr2 = [1, 5, true]

arr.pop()

console.log(arr2)

//завдання17  Дано масив [1, 5, true], видалити перший елемент з масиву
let arr3 = [1, 5, true]

arr3.shift()

console.log(arr3)


//завдання18 Дано масив [5, true, 'hello', false, null, 5] вирізати *в новий масив* з 1 по 5 індекс

let arr4 = [5, true, 'hello', false, null, 5]

let newArr = arr4.slice(1, 5)

console.log(newArr)

//завданн19 Дано масив [5, true, 'hello', false, null, 5] вирізати з 1 по 5 індекс дані

let arr5 = [5, true, 'hello', false, null, 5]

arr5.splice(1, 5)

console.log(arr)
  

//завдання20  Дано масив [5, true, 'hello', false, null, 5] вирізати з 1 по 5 індекс та вставити 10, 100, 111, 222

let arr6 = [5, true, 'hello', false, null, 5]

arr6.splice(1, 5, 10, 100, 111, 222)

console.log(arr6)

//завдання21  Створені масиви під час виконанняцього завдання об'єднайте в рядок, а потім назад приведіть рядок в масив.


let arr7 = [5, true, 'hello', false, null, 5]
arr7.splice(1, 5, 10, 100, 111, 222)

let arrString = arr7.join(', ')

console.log(arrString)

let newArr1 = arrString.split(', ')

console.log(newArr1)