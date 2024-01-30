
// function exampleFunction(){
//     if (true){
//         var functionScopedVar="I am function scoped";
//         console.log(functionScopedVar);
//         functionScopedVar="New value";
//         console.log(functionScopedVar);
//     }
// }
// exampleFunction();
// console.log(functionScopedVar);

function exampleFunction(){
    if (true){
        let functionScopedVar="I am function scoped";
        console.log(functionScopedVar);
        functionScopedVar="New value";
        console.log(functionScopedVar);
    }
}
exampleFunction();
console.log(functionScopedVar);
