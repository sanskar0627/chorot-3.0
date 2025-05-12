const fs=require("fs");
const contents=fs.readFileSync("a.txt","utf-8");
const data=fs.readFileSync("b.txt","utf-8")
console.log(contents);
console.log(data);      