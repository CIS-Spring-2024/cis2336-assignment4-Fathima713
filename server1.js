const express = require('express');
const req = require('express/lib/request');
const app = express();
const port = 3000;
const path = require('path');
 
// Body parser middleware to handle form data
app.use(express.urlencoded({ extended:true }));
 
// Serve Static files from the 'public' folder
app.use(express.static(path.join(__dirname, '..')));
app.use('/Images',express.static(path.join(__dirname,'..','..','Frontend','Images')));
app.use('/CSS',express.static(path.join(__dirname,'..','..','Frontend','CSS')));
app.use('/Javascript',express.static(path.join(__dirname,'..','..','Frontend','Javascript')));
 
// GET request to serve the order form
app.get('/',(req,res)=> {
  res.sendFile(path.join(__dirname, '..', 'Assign4-5_Fathima_Afridi_19387', 'Frontend', 'HTML', 'homepage.html'));
});
 
app.get('/biopage.html',(req,res)=> {
  res.sendFile(path.join(__dirname, '..', '..', 'Frontend', 'HTML', 'biopage.html'));
});
 
app.get('/contactuspage.html',(req,res)=> {
  res.sendFile(path.join(__dirname, '..', '..', 'Frontend', 'HTML', 'contactuspage.html'));
});
 
app.get('/orderpage.html',(req,res)=> {
  res.sendFile(path.join(__dirname, '..', '..', 'Frontend', 'HTML', 'orderpage.html'));
});
 
app.get('/menupage.html',(req,res)=> {
  res.sendFile(path.join(__dirname, '..', '..', 'Frontend', 'HTML', 'menupage.html'));
});
 
app.get('/thisisuspage.html',(req,res)=> {
  res.sendFile(path.join(__dirname, '..', '..', 'Frontend', 'HTML', 'thisisuspage.html'));
});
 
app.get('/homepage.html',(req,res)=> {
  res.sendFile(path.join(__dirname, '..', '..', 'Frontend', 'HTML', 'homepage.html'));
});
 
app.get('/CSS/style.css',(req,res)=> {
  res.sendFile(path.join(__dirname, '..', '..', 'Frontend', 'CSS', 'style.css'));
});
 
app.get('/Images',(req, res) =>{
  res.sendFile(path.join(__dirname, '..', '..','Frontend', 'Images'));
});
 
// POST request to handle credit card information submission
// Endpoint to handle credit card submission
app.post('/api/submit-payment', (req, res) => {
    const cardNumber = req.body.cardNumber;
    const expirationDate = req.body.expirationDate;
    const cvv = req.body.cvv;
   
    // Send the response back to the client
    res.json({ cardNumber, expirationDate, cvv });
  });
  
  // Server listening
  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });