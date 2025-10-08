import express from 'express'
import { paymentController } from '../controllers/payment.controller'

const router = express.Router()

// Создание платежа для билета на мероприятие
router.post('/event-ticket', paymentController.createEventTicketPayment)

// Webhook для уведомлений от PayKeeper
router.post('/webhook', paymentController.handleWebhook)

// Проверка статуса платежа
router.get('/status/:paymentId', paymentController.checkPaymentStatus)

// Получение информации о платеже по ID билета
router.get('/ticket/:ticketId', paymentController.getPaymentByTicketId)

export default router


