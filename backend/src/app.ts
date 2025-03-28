import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes';
import mongoSanitize from 'express-mongo-sanitize';

app.use(mongoSanitize());

app.use('/api/auth', authRoutes);
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

export default app;