const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

// Body parser middleware to handle form data
app.use(express.urlencoded({ extended: true }));

// Serve Static files from the 'HTML' folder
app.use(express.static(path.join(__dirname, 'Frontend', 'HTML')));

// Serve order confirmation page
app.get('/order-confirmation', (req, res) => {
    res.sendFile(path.join(__dirname, 'Frontend', 'HTML', 'order-confirm.html'));
});

// POST request to handle order form submission
app.post('/process-order', (req, res) => {
    // Parse form data
    const orderItems = req.body.orderItems;

    // Calculate total amount
    let totalPrice = 0;
    orderItems.forEach(item => {
        const itemPrice = parseFloat(item.price);
        const quantity = parseInt(item.quantity);
        totalPrice += itemPrice * quantity;
    });

    // Serve order confirmation page with total amount
    res.sendFile(path.join(__dirname, 'Frontend', 'HTML', 'order-confirm.html'));
});

// Server listening
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});


// Server listening
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
