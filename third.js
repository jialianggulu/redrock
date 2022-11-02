// lv0(看着课件搞得，做得有些简陋，还请学长学姐手下留情)
let obj = new Object();
obj.name = "Conan"//(柯南);
obj.age = "18";
obj. height = "104cm";
console.log(obj); //{name:"Conan", age:"18" height:"104cm"}

let obj = {
    name: "Conan",
    age:"18",
    height:"104cm"
}
console.log(obj); //{name:"Conan", age:"18" height:"104cm"}

function Person(name, age, height){
    this.name = name
    this.age = age
    this.height = height
    this.sayname = ()=>{
        console.log(this.name);
    }
}
const p1 = new Person("Conan", "18", "104cm") 
// lv1 后面的两行字有点没看懂
function myPush(name, age, height ){
let obj = new Object() ;
obj.name = "Conan";
obj.age = "18";
obj. height = "104cm";
}
let arr2 = [1,2,3];
