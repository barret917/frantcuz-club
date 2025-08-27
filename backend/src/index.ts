import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import zonesRouter from './routes/zones';
import hallsRouter from './routes/halls';
import menuRouter from './routes/menu';
import billiardsRouter from './routes/billiards';
import karaokeRouter from './routes/karaoke';
import banquetRequestsRouter from './routes/banquet-requests';
import tablesRouter from './routes/tables';
import eventsRouter from './routes/events';
import hookahRouter from './routes/hookah';
import boardGamesRouter from './routes/board-games';
import ticketRouter from './routes/ticket/ticket'
import paymentRouter from './routes/ticket/payment'
import orderRouter from './routes/ticket/order'
import CronService from './seed/cronService';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3002;

// Middleware
app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

// Routes
app.use('/api/halls', hallsRouter);
app.use('/api/zones', zonesRouter);
app.use('/api', menuRouter);
app.use('/api/billiards', billiardsRouter);
app.use('/api/karaoke', karaokeRouter);
app.use('/api/banquet-requests', banquetRequestsRouter);
app.use('/api', tablesRouter);
app.use('/api/events', eventsRouter);
app.use('/api/hookah', hookahRouter);
app.use('/api/board-games', boardGamesRouter);
app.use('/api/tickets', ticketRouter);
app.use('/api/orders', orderRouter);
app.use('/api/payments', paymentRouter);



// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'OK', message: 'Frantsuz Club API is running' });
});

app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
  console.log(`📊 Health check: http://localhost:${PORT}/health`);
  console.log(`🔗 API base URL: http://localhost:${PORT}/api`);

  CronService.init()
}); 