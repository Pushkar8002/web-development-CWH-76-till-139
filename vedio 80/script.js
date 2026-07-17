// let obj={
//     name:"harry",
//     age:20
// }
// console.log(obj.name);

// let animal={
//     eats: true
// }
// console.log(animal.eats);
// let rabbit={
//   jumps:true,   
// }
// console.log(rabbit.jumps
// );
// rabbit.__proto__=animal;

class Animal{
    constructor(name){
        this.name=name;
        console.log("object is created");
    }
    eats(){
        console.log("eating");
    }
    jumps(){
        console.log("jumping");
    }
}
class lion extends Animal{
    constructor(name){
        super(name);
        console.log("lion object is created");
    }
}
let a= new Animal("bunny");
console.log(a);

let l = new lion("king");
console.log(l)