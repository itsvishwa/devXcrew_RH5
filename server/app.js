const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const { MONGO_URI, PORT } = require('./config/config');
const app = express();

const authRoutes = require('./routes/auth.routes');
const userRoutes = require('./routes/user.routes');
const diagnoseRoutes = require('./routes/diagnose.routes');
const testRoutes = require('./routes/test.routes');

// Middleware
app.use(
    cors({
        credentials: true,
        origin: "http://localhost:5173",
    })
);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


// Connect to MongoDB
mongoose.connect(MONGO_URI)
    .then(() => {
        console.log('Connected to MongoDB');
        app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
    })
    .catch(err => {
        console.error('Error connecting to MongoDB:', err);
        process.exit(1); // Exiting the process if unable to connect to MongoDB
    });


// Routes
app.use('/auth', authRoutes);
app.use('/user', userRoutes);
app.use('/diagnose', diagnoseRoutes);
app.use('/test', testRoutes);


app.post('graph/:userid', (req, res) => {
    
})