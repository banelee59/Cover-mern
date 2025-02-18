const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');

// Load env vars
dotenv.config();

// Connect to database
connectDB();

const app = express();

// Body parser
app.use(express.json());

// Enable CORS for all origins
app.use(cors({
  origin: '*',  // This allows requests from any origin
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],  // Optional: Specify allowed HTTP methods
  allowedHeaders: ['Content-Type', 'Authorization'],  // Optional: Specify allowed headers
}));

// Routes
app.use('/api', require('./routes/formRoutes'));

// Root path to return a message
app.get('/', (req, res) => {
  res.send('Hello, welcome to my server!');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
