function waitfor3s(resolve){
    setTimeout(resolve,3000);
}
function main(){
    console.log("Main is called after 3 sec")
}
waitfor3s(main);