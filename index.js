/*Задание 65
Реализуйте функцию joinNumbersFromRange(), которая объединяет все числа из диапазона в строку:

joinNumbersFromRange(1, 1); // '1'
joinNumbersFromRange(2, 3); // '23'
joinNumbersFromRange(5, 10); // '5678910'

Решение:*/

// const joinNumbersFromRange = (start, finish) => {
//   let i = start;
//   let result = '';
//   while(i <= finish) {
//     result = `${result}${i}`;
//     i = i + 1;
//   }
//   return result;
// };
// console.log(joinNumbersFromRange(3, 7));//34567

/* Задание 66
const newFunction = (name1) => {
  let i = 0;
  while (i < name1.length) {
    console.log(name1[i]);
    i = i + 1;
  }
};
newFunction('name677');
Реализуйте функцию printReversedWordBySymbol(), которая печатает переданное слово посимвольно, 
как в примере из теории, но делает это в обратном порядке.
const word = 'Hexlet';
printReversedWordBySymbol(word);
// => 't' // => 'e' // => 'l' // => 'x' // => 'e' // => 'H'
Решение: */
/* const printReversedWordBySymbol = (text) => {
  let i = text.length -1;
  while (i >= 0) {
    console.log(text[i]);
    i = i - 1;
  }
};
printReversedWordBySymbol('name'); //e m a n */

/* Задание 67
const countChars = (str, char) => {
  let i = 0;
  let count = 0;
  while (i < str.length) {
    if (str[i] === char) {
      // Считаем только подходящие символы
      count = count + 1;
    }
    // Счетчик увеличивается в любом случае
    i = i + 1;
  }

  return count;
};
Функция из теории учитывает регистр букв. То есть A и a с её точки зрения разные символы. 
Реализуйте вариант этой же функции, так чтобы регистр букв был не важен:

countChars('HexlEt', 'e'); // 2
countChars('HexlEt', 'E'); // 2

Решение: */

const countChars = (str, char) => {
  let i = 0;
  let count = 0;
  while (i < str.length) {
    if (str[i].toUpperCase() === char.toUpperCase()) {
      // Считаем только подходящие символы
      count = count + 1;
    }
    // Счетчик увеличивается в любом случае
    i = i + 1;
  }
  return count;
};

console.log(countChars('HExlet is a iiGood school On Ithe Internet', 'I'));//5