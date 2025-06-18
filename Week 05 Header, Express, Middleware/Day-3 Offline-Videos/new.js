/*Create a map functions that takes an array and a transform function as input and returns the transformed array as output */
function mymaps(arr,callback){
    const result = [];
    for (let i=0;i<arr.length;i++){
        result[i]=callback(arr[i]);
    }
    return result;
}
function square(n) {
    return n * n;
}

console.log(mymaps([1, 2, 3, 4], square));