import cron from 'node-cron';
import PaymentService from '../controllers/ticket/payment.controller';

class CronService {
  static init() {
    // Проверка pending платежей каждые 5 минут
    cron.schedule('*/5 * * * *', async () => {
      console.log('🔄 Checking pending payments...');
      try {
        const result = await PaymentService.checkAllPendingPayments();
        if (result.success) {
          console.log(`✅ Checked ${result.checked} pending payments`);
        } else {
          console.error('❌ Error checking pending payments:', result.errors);
        }
      } catch (error) {
        console.error('❌ Cron job error (pending payments):', error);
      }
    });

    // Отмена просроченных платежей каждый час
    cron.schedule('0 * * * *', async () => {
      console.log('🔄 Canceling expired payments...');
      try {
        const result = await PaymentService.cancelExpiredPayments();
        if (result.success) {
          console.log(`✅ Canceled ${result.canceled} expired payments`);
        } else {
          console.error('❌ Error canceling expired payments:', result.error);
        }
      } catch (error) {
        console.error('❌ Cron job error (expired payments):', error);
      }
    });

    console.log('✅ Cron jobs initialized');
  }
}

export default CronService;