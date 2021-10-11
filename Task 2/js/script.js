"use strict";

//const obj = new Object(); // один из вариантов создания обьекта

//самый частый вариант создания обьекта
const option = {
    name: 'test',
    width: '640',
    height: '480',
    colors: {
        border: 'black',
        bg: 'red'
    }
};

console.log(option.name);
console.log(option['name']); //реже используемый вариант нотации

//delete option.name; //удаление какого-либо свойства из обьекта

console.log(option);

//перебрать все элементы обьекта
for (let key in option){
    console.log('Свойство ${key} имеет значение ${option[key]}');
}

//перебрать все элементы обьекта
let counter = 0;
for (let key in option){
    if (typeof(option[key]) === 'object'){
        for (let i in option[key]){
        console.log(`Свойство $(i) имеет значение $(option[key][i]]`);
        counter++;
    }}else{
    console. log(`Свойство $(key) имеет значение $(option[key]`);
    counter++;
}}

//количество свойств в обьекте
console.log(counter);

console.log(Object.keys(option));
console.log(Object.keys(option).length);

//добавим поведение для обьекта
const option2 = {
    name: 'test',
    width: '640',
    height: '480',
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function(){ //метод обьекта
        console.log("Yes!");
    }
};

option2.makeTest();

//деструктуризация обьекта (вытаскиваем нужные нам свойства)
const {border, bg} = option2.colors;
console.log(border);

/*Задание
Создание обьект 
в нем 7 свойств
и для одного из свойств - сделайте свойство в виде обьект, состоящего из трех свойств
Добавьте два метода и вызовите их.
С помощью деструктуризации выведете два любых свойства в консоль
*/

myObject = {
    name:'Lux Torpeda',
    owner: 'Jegor Bakunin',
    price: '3500',
    technicalPassport: {
        Turbo: true,
        colors: {
            body: 'white',
            roof: 'black',
            wheels: 'gradient'
        },
        speed: '247',
        gaas: false
    },
    doTest: function(info){
        console.log(myObject)
    }
};

myObject.doTest();