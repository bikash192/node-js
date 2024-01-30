// Synchronous call backFunction
// function parentFunction(name,callback){
//     callback();
//     console.log("Hey "+name);
// }
// function randomFunction(){
//     console.log("Hey I am callbackfunction");
// }
// parentFunction("Random string",randomFunction);
// Asynchronous callbackfunction
// function parentFunction(name,callback){
//     setTimeout(callback,1000)
//     console.log("Hey "+name);
// }
// function randomFunction(){
//     console.log("Hey I am callbackfunction");
// }
// parentFunction("bikash",randomFunction);



function parentFunction(name,callback){
    setTimeout(callback,1000);
    console.log("Hey "+name);
}
parentFunction("Random String",function(){
    console.log("HEY IM A CALLBACK FUNCTION");
});