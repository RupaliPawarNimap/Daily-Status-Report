try{
    throw new Error('my error');
}
catch(err){
     console.log("Err: ",err);
    
}
finally{
    console.log("This will always execute");
}