// // SETTIMEOUT
// const delayedFunction=()=>{
//     console.log('Delayed function executed!');
    
// };
// setTimeout(delayedFunction,2000);
// // Executed after 2 seconds
// // SETINTERVAL
// const repeatedFunction=()=>{
//     console.log('Repeated function executed!');
// };
// const intervalId=setInterval(repeatedFunction,1000);
// // Executes every 1 second


function repeatedFunction(){
    console.log('Executed repeated function....');
}
const intervalId=setInterval(repeatedFunction,1000);
setTimeout(()=>{
    clearInterval(intervalId);
    console.log('Interval stopped.');
},5000);

