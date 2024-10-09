const http= require('http');
const fs = require('fs');
const path = require('path');

const hostname = '127.0.0.1';
const port = 4000;

const server=http.createServer((req,res)=>{
	console.log(req.url)
	
	 if(req.url === '/home'){
	 	fs.readFile('home.txt',(err,data)=>{
	 		try {

	 			const data = fs.readFileSync('home.txt')
				res.end(data.toString())
	 		}
	 		catch(e) {
				fs.writeFile('home.txt','Create File sucssesfully!',(err)=>{
					res.end('File Written!');
				})

	 		}
	 		// console.log(err)
	 	})
	 }
	 else if(req.url == '/contact'){

		 fs.readFile('contact.txt',(err,data)=>{
		 	try {

	 			const data = fs.readFileSync('contact.txt')
				res.end(data.toString())
	 		}
	 		catch(e) {
				fs.writeFile('contact.txt',' Create File sucssesfully!',(err)=>{
					res.end('File Written!');
				})

	 		}
		 	// console.log(err)
		 })
	}
	else if(req.url == '/about'){

		 fs.readFile('about.txt',(err,data)=>{
		 	try {

	 			const data = fs.readFileSync('about.txt')
				res.end(data.toString())
	 		}
	 		catch(e) {
				fs.writeFile('about.txt',' Create File sucssesfully!',(err)=>{
					res.end('File Written!');
				})

	 		}
		 	// console.log(err)
		 })
	}
	else {
	  res.end('Hello mummy');
	 }
});

server.listen(port,()=>{
	console.log(`Server running at http://${hostname}:${port}/`);
})