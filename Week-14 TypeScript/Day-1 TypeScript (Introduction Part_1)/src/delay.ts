function deleaycall(fn : ()=> void){
    setTimeout(fn,3000);
}
deleaycall(function(){
    console.log("Hello")
})