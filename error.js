try{
    // code that may throw,an error
    throw new Error("an error");
}catch(error){
    // code to handle the error
    console.error(error.message);
}finally{
    // code that will run regardless of what there was an error
    console.log("cleanup code");
}

// project topics
// differnce between error handling and exception