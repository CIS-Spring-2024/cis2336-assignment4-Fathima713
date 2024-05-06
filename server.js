//server.js
const express = require('express');
const app = express();
const PORT = 3000; //the port i choose.

// Body parser middleware to handle form data
app.use(express.urlencoded({ extended: true}));

//server static files from the public folder
app.use(express.static('public'));

//Get request to serve the order form
app.get('/', (req, res)=>{
    res.sendFile(__dirname + 'public/orderpage.html');
});
//POST request to handle form submission
app.post('/submit',(req,res) => {
    //assuming form has fields
    const{card-number, expiration-date, cvv} = req.body;
    //calculate total 
    const total = parseInt(card-number)+parseInt(expiration-date)+parseInt(cvv);
    //send back the total in the response 
    res.send('Total:$${total}');

});
//server listening 
app.listen(PORT,()=>{
    console.log('Server running on http://localhost:${PORT}');
});