const express = require('express');
const cookieParser = require('cookie-parser');
const userRoutes = require('./routes/userRoutes');
const referralRoutes = require('./routes/referralRoutes');
const programRoutes = require('./routes/programRoutes')
const cors = require('cors')
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cookieParser());
app.use(cors())
app.use('/api/users', userRoutes);
app.use('/api', referralRoutes);
app.use('/api/program', programRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
