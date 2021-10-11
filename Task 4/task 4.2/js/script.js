"use strict";

const num = 1;

//анонимная самовызывающаяся функция (создаем локальную область видимости)
(function(){
    let num = 2;
    console.log(num);
    console.log(num + 1);

}());

console.log(num);

// объектный интерфейс (второй способ модульности)
const user = (function(){
    const privat = function(){
        console.log(`I am privat`);
    };

    return {
        sayHello: privat //экспортируем наружу локальное свойство
    }
}());

user.sayHello();

//Рабочий вариант 3 (error)

console.log("Запрос данных…");
const req = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        console.log("Подготовка данных…");

        const product = {
            name: 'phone', 
            price: 300
        };

        resolve(product);
    }, 2000);
});

req.then((product)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=> {
            product.status = 'order';
            //resolve(product);
            reject();
            }, 2000);
    });

}).then(data=>{
    data.modify = 'true';
    return data;
}).then(data=>{
    console.log(data);
}).catch(()=>{
    console.error('ERROR!')
}
);


//Рабочий вариант 4 (finanly)
console.log("Запрос данных…");
const req = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        console.log("Подготовка данных…");

        const product = {
            name: 'phone',
            price: 300
        };

        resolve(product);

    }, 2000);   
});

req.then((product)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=> {
            product.status = 'order';
            resolve(product);
            reject();
        }, 2000);
    });

}).then(data=>{
    data.modify = 'true';
    return data;
}).then(data=>{
    console.log(data);
}).catch(()=>{
    console.error('ERROR!')
}).finally(()=>{
    console.log("Все действия выполнены!");
});

//------------------------------------------------
const test = time => {
    return new Promise(resolve => {
        setTimeout(() => resolve(), time);
    });
};

test(1000).then(() => console.log('1000 ms'));
test(2000).then(() => console.log('2000 ms'));
    
Promise.all([test(4000), test(1000)]).then(()=>{
    console.log('All');
});