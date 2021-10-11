"use strict";
//promise похожи на call-back функции
//пример разрастания дерева call-back-ob (call-back hell)

console.log("Запрос данных...")

setTimeout(()=>{
    console.log("Подготовка данных...")

    const product = {
        name: 'phone',
        price: 300
    }

    setTimeout(()=> {
        product.status = 'order'
        console. log(product);},
        2000);
    },2000);

//тоже самое, но с использованием Promise
console.log("Запрос данных…");

const req = new Promise((resolve, reject)=> {
    setTimeout(()=>{
        console.log("Подготовка данных…")
        const product = {
            name: "phone",
            price: 300
        }

        resolve(product);

    }2000);
});



req.then((product)=>{
    const req2 = new Promise((resolve, reject)=>{
        setTimeout(()=> {
            product.status = 'order';
            resolve(product);
        }, 2000);
    });
    req2.then((data)=>{
    console.log(data)
    })
});


//Рабочий вариант
console.log("Запрос данных…");

const req = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        console.log("Подготовка данных…")
        const product = {
            name: 'phone',
            price: 300
        }
        resolve(product);
        
    },2000);
});

req.then((product)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=> {
            product.status = 'order';
            resolve(product);
        }, 2000);
    });
    }).then((data)=>{
    console.log(data);
    });


//Рабочий вариант 2
console.log("Запрос данных…");

    const req = new Promise((resolve, reject)=>{
        setTimeout(()=> {
            console.log("Подготовка данных…");
            const product = {
                name: 'phone',
                price: 300
            }
            resolve(product);
        }, 2000);
    });

req. then((product)=>{
    return new Promise((resolve, reject)=> {
        setTimeout(()=> {
        product.status = 'order';
        resolve(product);
        }, 2000);
    });
}).then(data=>{
    data.modify = "true";
    return data;
}).then(data=>{
    console.log(data);
});


//Рабочий вариант 3 (error)
console.log("Запрос данных…");

const req = new Promise((resolve, reject)=>{
    
    setTimeout(()=>{
        console.log("Подготовка данных…")
        const product = {
            name: 'phone',
            price: 300
        }
        resolve(product);
    }, 2000);
});


req.then((product)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            product.status = 'order';
            //resolve(product);
            reject();
        }, 2000);
    });
}).then(data=>{
    data.modify = 'true'
    return data;
}).then(data=>{
    console.log(data);
}).catch(()=>{
    console. error("ERROR!")
});

//Рабочий вариант 4 (finanly)
console.log("Запрос данных…");

const req = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        console. log("Подготовка данных…");
        const product = {
            name: 'phone',
            price: 300
        }
        resolve(product);
    },2000);
});

req.then((product)=>{
    return new Promise((resolve, reject)=> {
        setTimeout(()=>{
            product.status = "order";
            resolve(product);
            reject();
    }, 2000);
});
}).then(data=>{
    data.modify = 'true'
    return data;
}).then(data=>{
    console.log(data);
}).catch(()=>{
    console.error('ERROR!')
}). finally(()=>{
    console.log("Все действия выполнены!");
});

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