const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const app = express();

dotenv.config();
connectDB();
// middlewares
app.use(express.json());
app.use(morgan('dev'));
app.use(cors({
    origin: '*', // Allow all origins
}))
app.use(express.urlencoded({extended:true}));


// PORT 
const PORT = process.env.PORT || 8000;
// Routes
app.use('/api/v1/user',require('./routes/userRoute'));
app.use('/api/v1/test',require('./routes/testRoute'));

// Listen to the server
app.listen(PORT, () => {
  console.log(`Server is running on ${process.env.MODE} mode on port ${PORT}`);
});