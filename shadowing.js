var shadowedvar="I am global";
function exampleFunction(){
    var shadowedvar="I am local";
    console.log(shadowedvar);
}
exampleFunction();
console.log(shadowedvar);