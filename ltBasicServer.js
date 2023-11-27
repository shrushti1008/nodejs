const http=require('http');

http.createServer((req,res)=>{
    res.write("this is creating simple server");
    res.end();
}).listen(7878);

//lets try using simple function
function show(req,res){
    res.write("this is server using function as parameter");
    res.end();
}
http.createServer(show).listen(8967);

//now leets try sending arrow function to server as parameter

const leapYear=(year)=>{
    if((year%4==0 && year%100!=0) || (year% 400==0)){
        console.log("leap Year");
    }
    else{
        console.log("Not a leap year");
    }
}
const result=leapYear(2024);
http.createServer((req,res)=>{
    res.write(result);
    res.end();
}).listen(5678);