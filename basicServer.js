const http=require('http');
//http module handles servers request and response
//createServer takes function as parameter
http.createServer((req,res)=>{
    console.log("server is running");
    res.write("<h1>hello this is shrushti chougule<h1>");
    res.end();
}).listen(8888);


////////// or this can be done also like this
//////here function is passed as argument/parameter

function dataControl(req,res){
    res.write("<h1>hello this is shrushti ,hdkas chougule<h1>");
    res.end();
}
http.createServer(dataControl).listen(8889);
//this can be done using arraow function also

const display=(req,res)=>{res.write("This is using arrow function");
res.end();}
http.createServer(display).listen(8890);

//lets try another arrow function

const add=(a)=>a*100;
http.createServer((req,res)=>{
res.write(`${add(5)}`);
res.end();
}).listen(6676);