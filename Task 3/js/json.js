"use strict";

const person = {
    name: 'Alex',
    age: 28
}
//такой формат мы уже можем отправлять на сервер
let toServer = JSON.stringify(person);

console.log(toServer);

let fromServer = JSON.parse(toServer);
console.log(fromServer);

//глубокое клонирование объекта
const clone = JSON.parse(JSON.stringify(person));
clone.name = 'Ann';
console.log(person);
console.log(clone);

/*Задание
Создать объект из 6 полей и вложенного в него объекта из 2 полей
Преобразовать в json
вывести в консоль
Преобразовать получившийся json обратно в объект
вывести в консоль
найти онлайн-конвертер json - xml. Посмотреть как данный объект будет в xml
создать клон этого объекта.
измениь любое поле.
Вывести в консоль старый объект и его клон. Убедиться, что объекты разные
*/


const per = {
    name : 'Ivan',
    lastname : 'Ivanov',
    age : 23,
    id : 123456789,
    place : {
        town : 'Narva',
        country : 'Estonia'
    },
    prog : true

}

let toJ = JSON.stringify(per);

let fromJ = JSON.parse(toJ);

fromJ.age=28;

console.log(per);
console.log(fromJ);
