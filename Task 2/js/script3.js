"use strict";

//передача по значению (примитивные типы данных)
let a = 5,
    b = а;

b = b + 5;

console.log(b);
console.log(a);

//передача по ссылке
const obj = {
    a: 5,
    b: 1
}

const copy = obj;

//хотя мы модифицируем копию, менется и изначальный объект,
//так как мы в копии имеет ссылку на него
copy.a = 10;

console. log(obj);
console. log(сору);

//клонирование объекта в новый объект
const newObj = Object. assign({}, obj);
newObj.a = 15;
console.log(newObj);

//склонировать массив
const oldArray = ['a', 'x', 'y'];
const newArray = oldArray.slice();

newArray[0] = 5;
console.log(oldArray);
console.log(newArray);

//Spread оператор, new features
const video = ['youtube', 'vimeo', 'facebook'],
    blogs = ['wordpress', 'twitter', 'blogger'],
    internet = [ ...video, ...blogs, 'vk', 'instagram'];

console.log(internet);

function log(a, b, c){
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [2, 5, 8];

log(...num);

//клонирование массива с помощью Spread
const ar = [4,3,0];
const NewAr = [...ar];

//клонирование объекта с помощью Spread
const aaa = {
    first: 1,
    second: 2
};

const newA = {...aaa};