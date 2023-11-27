//non global module
const fs=require('fs');
fs.writeFileSync("hello.txt","this is harry potter book");

//these are global module
console.log(__dirname);
console.log(__filename);


//or we can do like this
const fs1=require('fs').writeFileSync;
fs1("hello1.txt","this is harry potter 2 book");