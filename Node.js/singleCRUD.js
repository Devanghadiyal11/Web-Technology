const express = require('express')
const app = express()
const hostname = '127.0.0.1';
const port = 3000;
app.use(express.json());

let list=['abc','def','ghi'];
//Read
app.get('/list', (req, res) => {
  res.send(list);
});
app.get('/list/:index',(req, res) =>{
	res.send(list[req.params.index]);
	res.send(list);
})
// Create
app.post('/list', (req, res) => {
  const {name} = req.body;
  list.push(name);
  res.send(list);
});

// Delete
app.delete('/list/:index', (req, res) =>{
	const index = parseInt(req.params.index);
	list.splice(index,1);
	res.send(list);
});

//Update
// app.put('/list/:index/:newname', (req, res) =>{
// 		//const {name} = req.body;
// 		list[req.params.index]=req.params.name;
// 		res.send(list);
// });
app.patch('/list/:index/:newname', (req, res) =>{
		list[req.params.index]=req.params.newname;
		res.send(list);
});
app.listen(port,()=>{
  console.log(`Server running at http://${hostname}:${port}/`);
})


