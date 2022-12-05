
/* Задание 70
Напишите функцию makeItFunny(), которая принимает на вход строку и возвращает её копию, у которой каждый n-ный элемент переведен в верхний регистр. n – задается на входе в функцию.

Для определения каждого n-ного элемента понадобится остаток от деления %. Подумайте, как его можно использовать.
const text = 'I never look back';
// Каждый третий элемент
makeItFunny(text, 3); // 'I NevEr LooK bAck'
Решение: */

// Решение учителя: через переменную
// const makeItFunny = (str, n) => {
//   let i = 0;
//   let result = '';
//   while (i < str.length) {
//     const current = str[i];
//     if ((i + 1) % n === 0) {
//       result = `${result}${current.toUpperCase()}`;
//     } else {
//       result = `${result}${current}`;
//     }
//     i++;
//   }

//   return result;
// };

// Мое через долгие мытарства:

// const makeItFunny = (str, n) => {
//   let i = 0;
//   let result = '';
//   while (i < str.length) {
//     if ((i+1) % n === 0) {
//       result = `${result}${str[i].toUpperCase()}`;
//     }
//     if ((i+1) % n !== 0) {
//       result = `${result}${str[i]}`;
//     }
//     ++i;
//   }

//   return result;
// };

// Самое короткое но пока есть непонятка для меня
/* const makeItFunny = (text, stepUpperCase) => {
  let i = 0;
  let result = '';
  
  while (i < text.length) {
  let char = text[i];
  if (++i % stepUpperCase === 0) {// движение цикла заложено здесь, а не в конце. Код сильно сократился, но пока не понимаю как это работает
  char = char.toUpperCase();
  }
  result += char;
  }
  
  return result;
  };

console.log(makeItFunny('I never look back', 3));// проверка I NevEr LooK bAck */

// let hasChar = (str, char) => {
//   let i = 0;
//   while (i < str.length) {
//     if (str[i] !== char)
//     return false;
//     ++i;
//   }
//   return true;
// };
// console.log(hasChar('Usd', 'U'));//false

// let hasChar = (str, char) => {
//   let i = 0;
//   while (i < str.length) {
//     if (str[i] === char)
//     return true;
//     ++i;
//   }
//   return false;
// };
// console.log(hasChar('sdlUUUUfj8888sadfsaf', 'U'));
//Я немного разобрался. В этом условии мы используем return, поэтому если мы напишем таким образом, если наше условие не выполниться, то нам вернетcя false (указали в else) и на этом программа остановиться. А нам нужно, чтобы она проверяла дальше. То есть проблема в том, что return останавливает наш цикл, а нам нужно, чтобы return false был только после проверки ВСЕХ букв. А так получается, что если первая буква не true, то возвращается false и программа останавливается.
const encrypt = (str) => {
  let result = '';
  for (let i = 0; i < str.length; i += 2) {
    const nextSymbol = str[i + 1] || '';
    result = `${result}${nextSymbol}${str[i]}`;
  }

  return result;
};
console.log(encrypt('move'));

let fef ='0123456';
