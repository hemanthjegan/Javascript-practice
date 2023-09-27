const student={
    name : 'Krishna',
    age : 22,
    Location : 'Thoothukudi'
}

console.log(student);
console.log(student.name);   // Dot notation
console.log(student.Location);  // Bracket notation
console.log(student['age']);

const product = {           // object can accept function nested objects
    name : 'shirt',
    'delivery-time' : '1 day',
    rating : {
        stars : 4.5,
        count : 87
    },
    review : 'good',
    func : function fun1(){
        console.log('function inside object');
    }   
}

console.log(product);
console.log(product["delivery-time"]);   // It is right way to print If you use dot notation i produce an error

console.log(product.rating.count);
console.log(product.rating.stars);

product.func();    // call the func value inside the object



/* **** Important

JSON and local storage are buit in obect in JavaScript.

Javascript code only make sense on thier only
JSON code make sense of all programming languages 
It is called Universal languages
It supports only Double quotes and not support single quoutes
It does not support functions inside the object  

Built-in JSON object:
Javascript build in json object --> JSON
It is used to convert javascript object into JSON 

syntax:

JSON.stringify(obj name);
*/

console.log(JSON.stringify(product));  // It shows like json  

console.log(typeof JSON.stringify(product));  // It shows output string not object. It convert the object to stribg ***Important


//  convert JSON string  to javascript object
// syntax: JSON.parse(JSON.stringify(object name));

const jsonString = JSON.stringify(product);
console.log(JSON.parse(jsonString));

/* Local storage

It is also a buit in obect in JavaScript.

It is used to store the values more permanently eventhough you refresh the page

Syntax:

localStorage.grtItem('name', 'value');  It accept only string.

example

*/

localStorage.getItem('product', JSON.stringify(product)); // It convert the product obj to string

console.log(localStorage.getItem('score'));

let getProduct = JSON.parse(localStorage.getItem('product'));
console.log(getProduct);


console.log('hello'.length);       // Auto-Boxing
console.log('hello'.toUpperCase);

// Object Reference

const obj1 = {
    message : 'hello'
};
const obj2 = obj2;    // Copy by reference

Obj1.message = 'Good job';
console.log(obj1);     // o/p {message: 'Good job'}
console.log(obj);      // o/p {message: 'Good job'}

const obj3 = {
    message: 'Good job'
}

console.log(obj3 === obj1);        // false because  objects are references. It compares the references not the values.

console.log(obj2 === obj1);        // True because It has same reference


// Shortcuts for objects
//destructuring

const object4 = {
    userMessage: 'Good job'
}

// const message = object4.message;
const { userMessage } = object4;  // both are same . It is called destructuring
console.log(userMessage);

const object5 = {
    message: 'Good job',
    price: 699
}
const { message, price } = object4;  //destructuring
console.log(message);
console.log(price);


// Shorthand property

const object6 = {
    message: message  // this meaasge used in above object
};
console.log(object6);

const object7 = {
    message,          // If both key and value are same use single name
    name : 'Raja'  
};
console.log(object7); // Shows the same output of object6

// Shorthand method

const object8 = {
    message,      
    method: function fun(){
        console.log('It is method block');
    }
};
console.log(object8);
object8.method();  // It calls func(){}

const object9 = {
    message,      
    method(){    // both are same here no need to write func and func name
        console.log('It is method block');
    }
};
console.log(object9);
object8.method();  // It calls func(){}

