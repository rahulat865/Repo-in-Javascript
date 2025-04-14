//class in javascript
// class human{
//     //properties
//   name = "John wick"; //public variable
//   #age  = 69;      //private variable
//   passion = "Killing people";
//   pet = "Pussy cat";

//   //constructor

//   constructor(newname, newage , changepassion ){
//     this.name = newname;
//     this.#age = newage;
//     this.passion = changepassion;
//   }



//   //behaviour
//   series(){
//     console.log("John wick - 1");
//   }

//   movie(){
//     console.log("Ballerina");
//   }

//   get JohnAge(){
//     return this.#age;
//   }

// }

// let obj = new human("chintu" , 99, "cooking");
// console.log(obj.age);
// obj.movie();
// console.log(obj.JohnAge);

// default parameters in javascript

function some(value = "Rahul "){
    console.log("all are equal ->", value);
}

some();          // print "all are equal Rahul "
some("Babbar"); //overide default value
some(null);  //print "all are equal null"
some(undefined);  //print the original value "Rahul"

// we can use function in defalt parameters

function getnum(){
    return 9430585021;
}

function id(name , num = getnum()){
    console.log("Raju" , num);
}

id();