const express = require('express');
const hotelRouter = require('./routes/hotelRoutes');
const userRoutes = require('./routes/userRoutes');
const reviewRoutes = require("./routes/reviewRoutes");

const app = express();
app.use(express.json());

// app.use((req,res,next)=>{
//     console.log('Hello from middleware');
//     next();
// })





//main route

app.use('/api/v1/hotels', hotelRouter);
app.use('/api/v1/users', userRoutes);
app.use('/api/v1/reviews', reviewRoutes);

module.exports = app;
//http://localhost:3000/api/v1/hotels