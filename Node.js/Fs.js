//Asynchronously

const fs = require('fs');
const data = fs.readFileSync('ex.txt');
console.log(data.toString());
console.log("1234567890qwertyuiopsasdfghjkl asdfghjklzxcvbn sghjz");


//Synchronously
// const fs = require('fs');
// const data = fs.readFile('ex.txt',(err,data)=>{
//     console.log("1234567890");
//     console.log(data.toString());
// })


//Exists
// const fs = require('fs');
// fs.exists('C:\\DU notes\\WebTechnology(JS)\\Node\\Path.js', (exists)=>{
//     console.log(exists ? "Found" : "Not found");    
// });

//Stat
// const fs = require('fs');
// fs.stat('Path.js',(err,data) =>{
//     console.log(data);
// });

//Write File

// const fs = require('fs');

// fs.writeFile('ex1.txt', 'Hello World!', (err) => {
//     console.log('The file has been saved!');
// });

//Append FIle
// const fs = require('fs');
// fs.appendFile('ex.txt', '\nThis is appended text.', (err) => {
//     console.log('Appended!');
// });

//Rename File

// const fs = require('fs'); 

//     fs.rename('ex.txt', 'renamed.txt', (err) => {
//         console.log('File Renamed!');
//     });

// //Delete File

// fs.unlink('renamed.txt',(err)=>
// {
//     console.log('File Deleted!');
// })