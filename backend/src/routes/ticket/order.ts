import express from 'express'
import OrderController from '../../controllers/ticket/order.controller'

const router = express.Router()

// Заказы
router.post('/', OrderController.createOrder)
router.get('/:orderId', OrderController.getOrderById)
router.put('/payment-id', OrderController.updateOrderPaymentId)
router.get('/payment/:paymentId', OrderController.getOrderByPaymentId)
router.get('/email/:email', OrderController.getOrdersByEmail)
router.get('/phone/:phone', OrderController.getOrdersByPhone)

export default router