
//write an code top print setinterval 1,2,3,4,5 eveyt second
for(let i=1;i<5;i++){
    setTimeout(()=>console.log(i),1000*i);
}