/*Create a map functions that takes 2 inputs an array and a transformation callback/function and transform the array into a new one using transformation function */
function mymap(arr,callback){
    const result = [];
    for(let i=0;i<arr.length;i++){
        const transformed=callback(arr[i]);
        result.push(transformed);
    }
    return result;
}               
function double(x) {
    return x * 2;
}

console.log(mymap([1, 2, 3], double));
