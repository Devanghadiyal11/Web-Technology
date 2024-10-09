const mongoose = require('mongoose');
const express = require('express');
const bodyparser = require('body-parser');
const Student = require('./Student.js'); 
const port = 4000;
const hostname = '127.0.0.1';
const cors = require('cors');
// Connection string for MongoDB
const connectionString = "mongodb+srv://devanghadiyal:dev%40ng%7B8954%7D@cluster0.owtzs.mongodb.net/test";

mongoose.connect(connectionString).then(() => { 
    const app = express();
    console.log("Connected with Database");
    app.use(express.json());
    app.use(cors())
    // Route to get all students
    app.get('/faculty', async (req, res) => {
        const ans = await Student.find(); // Fetch all student records from the database
        res.send(ans); // Send the list of students as the response
    });

    // Route to get a specific student by ID
    app.get('/faculty/:id', async (req, res) => {
        const ans = await Student.findOne({ id: req.params.id }); // Fetch a single student record by ID
        res.send(ans); // Send the student record as the response
    });

    // Route to create a new student
    app.post('/faculty', async (req, res) => {
        const ans = new Student(req.body); // Create a new student instance with the request body data
        await ans.save(); // Save the new student to the database
        res.send(ans); // Send the created student record as the response
    });

    // Route to delete a student by ID
    app.delete('/faculty/:id', async (req, res) => {
        const ans = await Student.deleteOne({ id: req.params.id }); // Delete the student record with the specified ID
        res.send(ans); // Send the result of the delete operation as the response
    });
    
    // Route to update a student's entire record by ID
    app.put('/faculty/:id', async (req, res) => {
        const data = new Student({ ...req.body }); // Create a new student instance with the updated data
        const ans = await data.save(); // Save the updated student data to the database
        res.send(ans); // Send the updated student record as the response
    });

    // Route to partially update a student's record by ID
    app.patch('/faculty/:id', async (req, res) => {
        const data = await Student.findOne({ id: req.params.id }); // Find the student record by ID
        data.name = req.body.name; // Update the student's name
        data.age = req.body.age; // Update the student's age
        data.email = req.body.email; // Update the student's email
        const ans = await data.save(); // Save the changes to the database
        res.send(ans); // Send the updated student record as the response
    });

    // Start the server and listen on the specified port
    app.listen(port, () => {
        console.log(`Server running at http://${hostname}:${port}/`);
    });
});
