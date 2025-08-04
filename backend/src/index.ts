import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import zonesRouter from './routes/zones';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api', zonesRouter);

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'OK', message: 'Frantsuz Club API is running' });
});

app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
  console.log(`📊 Health check: http://localhost:${PORT}/health`);
  console.log(`🔗 API base URL: http://localhost:${PORT}/api`);
}); 