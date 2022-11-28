/* Задание 60

Задание
На электронной карте Вестероса, которую реализовал Сэм, союзники Старков отображены зеленым кружком, враги — красным, а нейтральные семьи — серым.
Напишите для Сэма функцию whoIsThisHouseToStarks(), которая принимает на вход фамилию семьи и возвращает одно из трёх значений: 'friend', 'enemy', 'neutral'.
Правила определения:
Друзья ('friend'): 'Karstark', 'Tally'
Враги ('enemy'): 'Lannister', 'Frey'
Любые другие семьи считаются нейтральными
Примеры вызова:
whoIsThisHouseToStarks('Karstark'); // 'friend'
whoIsThisHouseToStarks('Frey');     // 'enemy'
whoIsThisHouseToStarks('Joar');     // 'neutral'

Решение*/
/* Решение учителя: через создание переменной.
// BEGIN
const whoIsThisHouseToStarks = (houseName) => {
  let status;

  if (houseName === 'Karstark' || houseName === 'Tally') {
    status = 'friend';
  } else if (houseName === 'Lannister' || houseName === 'Frey') {
    status = 'enemy';
  } else {
    status = 'neutral';
  }

  return status;
};
// END */

/* const whoIsThisHouseToStarks = (family) => {
  if (family === 'Karstark' || family === 'Tally') {
    return 'friend';
  }
  else if (family === 'Lannister' || family === 'Frey'){
    return 'enemy';
  }
  else{
    return 'neutral';
  }
};
console.log(whoIsThisHouseToStarks('NickSova'));//neutral */

/* Задание 61

Реализуйте функцию convertText(), которая принимает на вход строку и, если первая буква не заглавная, возвращает перевернутый вариант исходной строки. Если первая буква заглавная, то строка возвращается без изменений. Если на вход передана пустая строка, функция должна вернуть пустую строку.

Примеры вызова:

convertText('Hello'); // 'Hello'
convertText('hello'); // 'olleh'

// Не забудьте учесть пустую строку
convertText(''); // ''
Перевернуть строчку можно используя функцию 
const reverse = (str) => str.split('').reverse().join('');
 В качестве аргумента в неё нужно передать строку, которую мы хотим перевернуть:

const result = reverse('Hello!');
console.log(result); // => '!olleH'
Есть разные подходы к решению этой задачи. Возможно, вам пригодится метод toUpperCase() и возможность получения символа из строки (например, str[0]).

Попробуйте написать два варианта функции: с обычным if-else, и с тернарным оператором.


Решение*/
/* Решение учителя:
const reverse = (str) => str.split('').reverse().join('');
const convertText = (text) => {
  if (text === '') {
    return '';
  }

  const reversable = text[0] !== text[0].toUpperCase();
  return reversable ? reverse(text) : text;
}; */


const reverse = (str) => str.split('').reverse().join('');// функция дана из условия
/* const convertText = (text) => {
  if (text === '') {
  return '';
}
  if (text[0] === text[0].toUpperCase()) {
  return text;
}
  return reverse(text);
}; */
// Решение через тернальный оператор (применяется дважды, что не рекомендуется)
// const convertText = (text) => (text === '' ? '' : (text[0] === text[0].toUpperCase() ? text : reverse(text)));

// Решение через один тернальный оператор:
const convertText = (text) => {
  if (text === '') {
  return '';
  }
  const stringStart = text[0] === text[0].toUpperCase;
  return stringStart ? text : reverse(text);
};

console.log(convertText('mike Vasovski'));//iksvosaV ekim