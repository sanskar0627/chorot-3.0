async function greet(): Promise<void>{
    console.log("Hello ")
    await new Promise(resolve => {
     setTimeout(()=>{
        console.log("hello after 3 sec");
         resolve(undefined);
        
    },1000*3)
});

}

greet(); 