//const express = require('express');
//const mongoose = require('mongoose');
//require('dotenv').config();

//const app = express();
//app.use(express.json());

// Connect MongoDB
//mongoose.connect(process.env.MONGO_URI)
    //.then(() => console.log("Connected to MongoDB"))
    //.catch((err) => console.error("Mongo error", err));

// Routes
//const bookRoutes = require('./routes/bookRoutes');
//app.use('/api/books', bookRoutes);  // All routes now start with /api/books

// Start server
//const PORT = process.env.PORT || 3000;
//app.listen(PORT, () => console.log(`Server running on port ${PORT}`)); 

const session = require('express-session');
const passport = require('passport');
require('./auth/google'); // load passport config

app.use(session({
    secret: 'yourSecret',
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

// Auth Routes
app.get('/auth/google',
    passport.authenticate('google', { scope: ['profile', 'email'] })
);

app.get('/auth/google/callback',
    passport.authenticate('google', { failureRedirect: '/' }),
    (req, res) => {
        res.send('Login successful');
    }
);