"use strict";

//https://jsonplaceholder.typicode.com/ API

fetch('https://jsonplaceholder.typicode.com/todos/')
    .then(response => response.json())
    .then(json => console.log(json));


    fetch(' https://jsonplaceholder.typicode.com/posts ',
        method: "POST",
        body: JSON.stringify({name:"Alex"}),
        headers: {
            'Content-type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(json => console.log(json));
