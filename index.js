const app =require('./app');
const fs=require('fs');
console.log(app);
console.log(app.z());
console.log("like");
var a=10;
var b=20;
console.warn(a+b);
console.error("this is error");

const arra=[2,33,4,5,66,7,66,32,66];
// for(let i=0;i<arra.length;i++){
//     console.log(arra[i]);

// }
let result=arra.filter((item)=>{
    return item>5;
})
console.log(result);

fs.writeFileSync("hello.txt","code step by step");