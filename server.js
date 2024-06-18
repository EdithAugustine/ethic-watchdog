const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();  // Load environment variables

const app = express();
app.use(express.json());
app.use(cors());

const reportRouter = require('./routes/report');
const userRouter = require('./routes/user');

app.use('/api/reports', reportRouter);
app.use('/api/users', userRouter);

const mongoUri = process.env.MONGODB_URI;

mongoose.connect(mongoUri)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log('MongoDB connection error:', err));

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
