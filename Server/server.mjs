import 'dotenv/config';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import authRoutes from './routes/authRoutes.mjs';
import taskRoutes from './routes/taskRoutes.mjs';  
import { authenticate } from './middleware/authMiddleware.mjs';

const app = express();


app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => {
    console.error('MongoDB Connection Error:', err);
    process.exit(1);
  });


app.use('/api/auth', authRoutes);
app.use('/api/tasks', authenticate, taskRoutes);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));