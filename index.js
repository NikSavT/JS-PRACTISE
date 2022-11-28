/*Задание 65
Реализуйте функцию joinNumbersFromRange(), которая объединяет все числа из диапазона в строку:

joinNumbersFromRange(1, 1); // '1'
joinNumbersFromRange(2, 3); // '23'
joinNumbersFromRange(5, 10); // '5678910'

Решение:*/

const joinNumbersFromRange = (start, finish) => {
  let i = start;
  let result = '';
  while(i <= finish) {
    result = `${result}${i}`;
    i = i + 1;
  }
  return result;
};
console.log(joinNumbersFromRange(3, 7));//34567
