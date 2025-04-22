import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './src/routes/auth.ts'; // Added .ts extension
import donationRoutes from './src/routes/donation.ts'; // Added .ts extension
import { errorHandler } from './src/middleware/errorHandler.ts'; // Added .ts extension

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/donations', donationRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));