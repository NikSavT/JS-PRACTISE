/*Задание 49
Допишите функцию truncate(), которая обрезает переданную строку до указанного количества символов, добавляет в конце многоточие и возвращает получившуюся строку. Подобная логика часто используется на сайтах, чтобы отобразить длинный текст в сокращенном виде.
Функция принимает два параметра:
Строка, которую нужно обрезать
Число символов, которые нужно оставить
Пример того, как должна работать написанная вами функция:
Передаём текст напрямую
Обрезаем текст, оставляя 2 символа
truncate('hexlet', 2); // 'he...'

 Решение*/

// const truncate = (text, length) => {
//   return`${text.slice(0,length)}...`;
// };
// let example = 'Hello, everybody!';
// console.log(truncate(example,5)); // проверка функции - результат - Hello...

// const getHiddenCard = (cardNumber, starsCount = 4) => {
//   const visibleDigitsLine = cardNumber.slice(12);
//   return `${'*'.repeat(starsCount)}${visibleDigitsLine}`;
// };
// const number12 = 12012345;
// console.log(getHiddenCard(number12, 5));

/*Задание 50

Реализуйте функцию getHiddenCard(), которая принимает на вход номер кредитки (состоящий из 16 цифр) в виде строки 
и возвращает его скрытую версию, которая может использоваться на сайте для отображения. Если исходная карта имела номер 2034399002125581, то скрытая версия выглядит так ****5581. Другими словами, функция заменяет первые 12 символов, на звездочки. Количество звездочек регулируется вторым необязательным параметром. Значение по умолчанию — 4.

Кредитка передается внутрь как строка
getHiddenCard('1234567812345678', 2); // "**5678"
getHiddenCard('2034399002121100', 1); // "*1100"
Для выполнения задания вам понадобится метод строки repeat(), который повторяет строку указанное количество раз
'+'.repeat(5); // "+++++"
'o'.repeat(3); // "ooo"

Решение*/

/* const getHiddenCard = (numberCard, asteriksCount = 4) => {
  return`${'*'.repeat(asteriksCount)}${numberCard.slice(-4)}`;
};
getHiddenCard('1234567812345678', 2);
console.log(getHiddenCard('1234567812345678'));
 */

/* Задание 51

Реализуйте функцию capitalize(), которая принимает непустую строку и приводит первую букву первого слова к верхнему регистру:
const name = 'arya';
console.log(capitalize(name)); // => "Arya"
Чтобы получить подстроку (или символ) из строки, используйте метод slice():
'welcome'.slice(2, 5); // "lco"
Для приведения строки к верхнему регистру используйте метод toUpperCase()
'welcome'.toUpperCase(); // "WELCOME" 

Решение*/
// Решение учителя
//const capitalize = (text) => `${text[0].toUpperCase()}${text.slice(1)}`;
/* const capitalize = (text) => `${text.slice(0, 1).toUpperCase()}${text.slice(1)}`;
let nameFirst = 'dayeneris';
console.log(capitalize(nameFirst));//Dayeneris */

/* Задание 52

Напишите функцию isPensioner(), которая принимает один параметр — возраст человека, и проверяет, является ли он пенсионным. Пенсионером считается человек, достигший возраста 60 лет и больше.
Примеры вызова:
isPensioner(75); // true
isPensioner(18); // false

Решение*/
/* const isPensioner = (age) => age >= 60; 
console.log(isPensioner(44));// false */

/* Задание 53

Задание
Напишите функцию isMister(), которая принимает строку и проверяет, является ли она словом 'Mister'.
Примеры вызова:
isMister('Mister'); // true
isMister('Miss');   // false

Решение*/
const isMister = (text) => (text === 'Mister');
console.log(isMister('Lady')); // false