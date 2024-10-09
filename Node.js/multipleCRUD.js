const express = require('express')
const app = express()
const hostname = '127.0.0.1';
const port = 4000;
app.use(express.json());

let laptop=[
    {
      "name": "Refined Metal Keyboard",
      "company": "Kertzmann, Koss and Gibson",
      "price": "499.00",
      "address": "Mueller Parks",
      "id": "1"
    },
    {
      "name": "Licensed Soft Sausages",
      "company": "Mann Inc",
      "price": "991.00",
      "address": "Stanton Rapid",
      "id": "2"
    },
    {
      "name": "Practical Concrete Ball",
      "company": "Emmerich, Okuneva and Kshlerin",
      "price": "249.00",
      "address": "Muller Valley",
      "id": "3"
    },
    {
      "name": "Electronic Wooden Chair",
      "company": "Predovic, Murphy and Cremin",
      "price": "927.00",
      "address": "Sauer Via",
      "id": "4"
    },
    {
      "name": "Elegant Cotton Chicken",
      "company": "Gislason Group",
      "price": "134.00",
      "address": "Stella Dam",
      "id": "5"
    },
    {
      "name": "Rustic Bronze Cheese",
      "company": "Mann - Wunsch",
      "price": "901.00",
      "address": "Nash Lights",
      "id": "6"
    },
    {
      "name": "Handcrafted Cotton Salad",
      "company": "Hilll - Ondricka",
      "price": "403.00",
      "address": "Nestor Valley",
      "id": "7"
    },
    {
      "name": "Tasty Cotton Ball",
      "company": "Sawayn LLC",
      "price": "323.00",
      "address": "Stiedemann Landing",
      "id": "8"
    },
    {
      "name": "Generic Frozen Gloves",
      "company": "Herman Group",
      "price": "923.00",
      "address": "Ward Walks",
      "id": "9"
    },
    {
      "name": "Small Wooden Bike",
      "company": "Wiegand, Wilkinson and D'Amore",
      "price": "354.00",
      "address": "Kling Loop",
      "id": "10"
    }
  ];
//read all
app.get('/laptop', (req, res) => {
  res.send(laptop);
 
});
//read by id
app.get('/laptop/:index',(req, res) =>{
	res.send(laptop[req.params.index]);
	res.send(laptop);
   
});

//Create
app.post('/laptop',(req,res)=>{
  laptop.push(req.body);
  res.send("Laptop added");
});
//Update
app.patch('/laptop/:id',(req,res)=>{
  const indexToEdit=laptop.findIndex((lap)=>{
    if(lap.id==req.params.id){
      return true;
    }
  });
    data=req.body;
    console.log("Laptop update");
    laptop[indexToEdit]={...laptop[indexToEdit],...data}
    //* array of object does not concet whith other
    res.send( laptop[indexToEdit]);
    
    
});

//Delete
app.delete('/laptop/:id',(req,res)=>{
  const indexToDelete=laptop.findIndex((lap)=>lap.id==req.params.id);
  laptop.splice(indexToDelete,1);
  res.send("Laptop Delete");

})

app.listen(port,()=>{
    console.log(`Server running at http://${hostname}:${port}/`);
  })