const express = require('express');
const cookieParser = require('cookie-parser');
const userRoutes = require('./routes/userRoutes');
const referralRoutes = require('./routes/referralRoutes');
const programRoutes = require('./routes/programRoutes');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

// Define CORS options
const corsOptions = {
  origin: ['http://localhost:5137', 'https://accredian-frontend-task-two-psi.vercel.app/'],
  credentials: true,  // <-- Required to pass cookies
};

app.use(express.json());
app.use(cookieParser());
app.use(cors(corsOptions)); // Apply CORS with options
app.use('/api/users', userRoutes);
app.use('/api', referralRoutes);
app.use('/api/program', programRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
