import express from 'express'
import TicketController from '../../controllers/ticket/ticket.controller'

const router = express.Router()

router.post('/pending', TicketController.createPendingTicket)
router.put('/payment-id', TicketController.updatePaymentId)
router.post('/confirm-payment', TicketController.confirmPayment)
router.get('/number/:ticketNumber', TicketController.getTicketByNumber)
router.put('/mark-used', TicketController.markTicketAsUsed)
router.get('/statistics', TicketController.getTicketsStatistics)
router.get('/user/:userId', TicketController.getUserTickets)
router.delete('/:ticketId', TicketController.deleteTicket)

export default router