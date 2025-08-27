import express from 'express';
import PaymentService from '../../controllers/ticket/payment.controller';
import { PrismaClient, PaymentStatus } from '@prisma/client';

const router = express.Router();
const prisma = new PrismaClient();

/**
 * @route GET /api/payments/health
 * @desc Проверка статуса платежной системы
 * @access Public
 */
router.get('/health', async (req, res) => {
  try {
    const connected = await PaymentService.initialize();
    res.json({
      status: 'OK',
      paykeeper: connected ? 'connected' : 'disconnected',
      message: 'Payment service is running'
    });
  } catch (error: any) {
    res.status(500).json({
      status: 'ERROR',
      message: error.message
    });
  }
});

/**
 * @route POST /api/payments/create-invoice
 * @desc Создание счета для оплаты билетов
 * @access Public
 */
router.post('/create-invoice', async (req, res) => {
  try {
    const { orderId, ticketData, customer, totalAmount, eventTitle } = req.body;

    if (!orderId || !ticketData || !customer || !totalAmount || !eventTitle) {
      return res.status(400).json({
        success: false,
        error: 'orderId, ticketData, customer, totalAmount и eventTitle обязательны'
      });
    }

    // Создаем счет в PayKeeper
    const invoiceResult = await PaymentService.createInvoice({
      id: orderId,
      price: totalAmount,
      customer: {
        first_name: customer.first_name,
        last_name: customer.last_name,
        email: customer.email,
        phone: customer.phone
      },
      event: {
        title: eventTitle
      }
    });

    if (!invoiceResult.success) {
      return res.status(500).json(invoiceResult);
    }

    res.json({
      success: true,
      paymentUrl: invoiceResult.paymentUrl,
      paymentId: invoiceResult.paymentId
    });

  } catch (error: any) {
    console.error('Create invoice error:', error);
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

/**
 * @route GET /api/payments/status/:paymentId
 * @desc Проверка статуса платежа
 * @access Public
 */
router.get('/status/:paymentId', async (req, res) => {
  try {
    const { paymentId } = req.params;

    if (!paymentId) {
      return res.status(400).json({
        success: false,
        error: 'paymentId обязателен'
      });
    }

    const result = await PaymentService.checkPaymentStatus(paymentId);
    
    res.json(result);

  } catch (error: any) {
    console.error('Payment status error:', error);
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

/**
 * @route GET /api/payments/tickets/:paymentId
 * @desc Получение билетов по paymentId
 * @access Public
 */
router.get('/tickets/:paymentId', async (req, res) => {
  try {
    const { paymentId } = req.params;

    if (!paymentId) {
      return res.status(400).json({
        success: false,
        error: 'paymentId обязателен'
      });
    }

    // Используем Prisma напрямую, так как в сервисе нет этого метода
    const userTickets = await prisma.userTicket.findMany({
      where: { payment_id: paymentId },
      include: {
        ticket: {
          select: {
            id: true,
            title: true,
            short_description: true,
            event_date: true,
            event_location: true,
            price: true
          }
        }
      }
    });

    if (!userTickets || userTickets.length === 0) {
      return res.status(404).json({
        success: false,
        error: 'Билеты не найдены'
      });
    }

    res.json({
      success: true,
      tickets: userTickets
    });

  } catch (error: any) {
    console.error('Get tickets error:', error);
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

/**
 * @route POST /api/payments/webhook
 * @desc Webhook для обработки уведомлений от PayKeeper
 * @access Public
 */
router.post('/webhook', async (req, res) => {
  try {
    const { id, status } = req.body;

    if (!id) {
      return res.status(400).json({
        success: false,
        error: 'id обязателен'
      });
    }

    console.log('Webhook received:', { id, status });

    // Обрабатываем статус платежа
    const result = await PaymentService.checkPaymentStatus(id);

    res.json(result);

  } catch (error: any) {
    console.error('Webhook error:', error);
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

/**
 * @route POST /api/payments/cancel/:paymentId
 * @desc Отмена платежа
 * @access Public
 */
router.post('/cancel/:paymentId', async (req, res) => {
  try {
    const { paymentId } = req.params;

    if (!paymentId) {
      return res.status(400).json({
        success: false,
        error: 'paymentId обязателен'
      });
    }

    const result = await PaymentService.cancelPayment(paymentId);
    
    res.json(result);

  } catch (error: any) {
    console.error('Cancel payment error:', error);
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

/**
 * @route GET /api/payments/ticket/:ticketNumber
 * @desc Получение информации о билете по номеру
 * @access Public
 */
router.get('/ticket/:ticketNumber', async (req, res) => {
  try {
    const { ticketNumber } = req.params;

    if (!ticketNumber) {
      return res.status(400).json({
        success: false,
        error: 'ticketNumber обязателен'
      });
    }

    // Используем Prisma напрямую
    const userTicket = await prisma.userTicket.findUnique({
      where: { ticket_number: ticketNumber },
      include: {
        ticket: {
          select: {
            id: true,
            title: true,
            short_description: true,
            event_date: true,
            event_location: true,
            price: true
          }
        }
      }
    });

    if (!userTicket) {
      return res.status(404).json({
        success: false,
        error: 'Билет не найден'
      });
    }

    res.json({
      success: true,
      ticket: userTicket
    });

  } catch (error: any) {
    console.error('Get ticket error:', error);
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

/**
 * @route POST /api/payments/ticket/:ticketNumber/use
 * @desc Отметка билета как использованного
 * @access Public
 */
router.post('/ticket/:ticketNumber/use', async (req, res) => {
  try {
    const { ticketNumber } = req.params;

    if (!ticketNumber) {
      return res.status(400).json({
        success: false,
        error: 'ticketNumber обязателен'
      });
    }

    // Используем Prisma напрямую
    const userTicket = await prisma.userTicket.update({
      where: { ticket_number: ticketNumber },
      data: { is_used: true },
      include: {
        ticket: {
          select: {
            id: true,
            title: true,
            short_description: true,
            event_date: true,
            event_location: true,
            price: true
          }
        }
      }
    });

    res.json({
      success: true,
      message: 'Билет отмечен как использованный',
      userTicket
    });

  } catch (error: any) {
    console.error('Mark ticket as used error:', error);
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

/**
 * @route POST /api/payments/check-pending
 * @desc Проверка всех pending платежей (для админки/cron)
 * @access Private
 */
router.post('/check-pending', async (req, res) => {
  try {
    const result = await PaymentService.checkAllPendingPayments();
    
    res.json(result);

  } catch (error: any) {
    console.error('Check pending payments error:', error);
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

/**
 * @route POST /api/payments/cancel-expired
 * @desc Отмена просроченных платежей (для админки/cron)
 * @access Private
 */
router.post('/cancel-expired', async (req, res) => {
  try {
    const result = await PaymentService.cancelExpiredPayments();
    
    res.json(result);

  } catch (error: any) {
    console.error('Cancel expired payments error:', error);
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

export default router;