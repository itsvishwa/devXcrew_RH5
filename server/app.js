const express = require('express');
//const authRoutes = require('./routes/authRoutes');
const mongoose = require('mongoose');
const {MONGO_URI, PORT} = require('./config/config')
const app = express();


// Middleware
app.use(express.json());

// Routes
// app.use('/api/auth', authRoutes);

app.get('/helloworld', (req, res) =>{
    res.send("hello world");
})


// Connect to MongoDB
mongoose.connect(MONGO_URI)
    .then(() => {
        console.log('Connected to MongoDB');
        app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
    })
    .catch(err => console.error('Error connecting to MongoDB:', err));
