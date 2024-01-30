// for(let i=0;i<5;i++){
//     console.log(i);
// }
// let count=0;
// while(count<5){
//     console.log(count);
//     count++;
// }
// let count=0;
// do{
//     console.log(count);
//     count++;
    
// }while(count<5);
let person={name:"John",age:30,ocuupation:"Developer"};
for(let key in person){
    console.log(key + ": "+person[key]);
    console.log(person.name);
}