import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import menuRouter from './routes/menu';
import billiardsRouter from './routes/billiards';
import karaokeRouter from './routes/karaoke';
import banquetRequestsRouter from './routes/banquet-requests';
import eventsRouter from './routes/events';
import hookahRouter from './routes/hookah';
import bookingRouter from './routes/booking';
import boardGamesRouter from './routes/board-games';
import carouselPhotosRouter from './routes/carousel-photos';
import eventTicketsRouter from './routes/event-tickets';
import eventZonesRouter from './routes/event-zones';
import eventTablesRouter from './routes/event-tables';
import paymentRouter from './routes/payment';
import botRouter from './routes/bot';
import pageZoneBindingsRouter from './routes/page-zone-bindings';

dotenv.config();

export const app = express();
const PORT = process.env.PORT || 3002;

// Middleware
const allowedOrigins = process.env.CORS_ORIGIN 
  ? process.env.CORS_ORIGIN.split(',').map(origin => origin.trim())
  : ['http://localhost:3000', 'http://localhost:3001', 'http://localhost:3003', 'http://localhost:5173'];

app.use(cors({
  origin: allowedOrigins,
  credentials: true
}));
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

// Routes
app.use('/api', menuRouter);
app.use('/api/billiards', billiardsRouter);
app.use('/api/karaoke', karaokeRouter);
app.use('/api/booking', bookingRouter);
app.use('/api/banquet-requests', banquetRequestsRouter);
app.use('/api/events', eventsRouter);
app.use('/api/hookah', hookahRouter);
app.use('/api/board-games', boardGamesRouter);
app.use('/api/carousel-photos', carouselPhotosRouter);
app.use('/api/event-tickets', eventTicketsRouter);
app.use('/api', eventZonesRouter);
app.use('/api', eventTablesRouter);
app.use('/api/payment', paymentRouter);
app.use('/api/bot', botRouter); // Роутер для Telegram бота
app.use('/api/admin/page-zone-bindings', pageZoneBindingsRouter);

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'OK', message: 'Frantsuz Club API is running' });
});

// Only start server if not in test environment
if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => {
    console.log(`🚀 Server is running on port ${PORT}`);
    console.log(`📊 Health check: http://localhost:${PORT}/health`);
    console.log(`🔗 API base URL: http://localhost:${PORT}/api`);
  });
} 