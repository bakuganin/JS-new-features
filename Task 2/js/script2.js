"use strict";

const arr = [1,2,5,8,9];

console.log(arr);

//удалить последний элемент из массива
arr.pop();
console.log(arr);

arr. push(10); //добавить элемент в конец массива
console.log(arr);
//перебрать элементы
for (let i = 0; i < arr. length; i++){
    console. log(arr[i]);
}
for (let value of arr){
    console. log(value);
}
//не работает с объектом

//длина массива не всегда длина) последний индекс, плюс 1
const arr2 = [1,2,5,8,9];
//arr2[99] = 0; //так делать нельзя)
console.log(arr2.length);
console.log(arr2);
//методы моссивов
//часто используется для перебора. Недостаток в отличии от обычных циклов - нельзя остано

arr2.forEach(function(item, i, arr2){ //call-back функция
console. log(`$(i): ${item} внутри массива ${arr2}` )
});

//сроку в массив. Например большой список товаров через запятую - в массив
const str = prompt("","");
const products = str.split(",");
console.log(products);
products.sort(); //всегда сортирует как строки
console.log(products);
//обратная операция
console.log(products.join("; "));

//функция для сортировки числе. Передается в call-back
//описание http://algolist.ru/sort/quick_sort.php
products. sort(compareNum);
function compareNum(a,b){
    return a-b;
}
console.log(products);

//методы не работают для псевдомассивов