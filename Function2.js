function itemprice(...num1){             //... is rest operator in this function
    return num1

}

console.log(itemprice(199,299,1111,8889));

function sameprice(val1, val2, ...num1){       //here 'val1 and val2' is used to remove the first and second data from the array.
    return num1
}

console.log(sameprice(2000,500,1000,200000,100));


const user = {                 //declaring the object for the function.
    username: "rahul",
    price: 199,
    app: "Clash Of clan"
}

function intel(anyobject){                       // how to call the object in the function 
    console.log(`username is ${anyobject.username}and the price is ${anyobject.price}`);

}

intel(user)

//declaring the array for the function.
let marvel = [100, 200, 300, 400, 500]   

function getarray(anyarray){             // how to call an array in the function
    return marvel[0]
}

console.log(getarray(marvel));