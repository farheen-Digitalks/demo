import express from 'express';
import { connectDb } from './config/connection.js';
const PORT = process.env.PORT || 3000;
import dotenv from 'dotenv';
const app = express();
dotenv.config();

app.use(express.json());

import userRoutes from './routes/index.js'; 
app.use('/admin', userRoutes);
connectDb();

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
});