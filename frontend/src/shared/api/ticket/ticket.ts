import { apiClient } from '../client';
import {
  UserTicket,
  CreatePendingTicketRequest,
  UpdatePaymentIdRequest,
  ConfirmPaymentRequest,
  MarkTicketUsedRequest,
  TicketsStatistics,
  CreateOrderRequest,
  Order,
  CreateInvoiceRequest,
  CreateInvoiceResponse,
  PaymentStatusResponse,
  UpdateOrderPaymentIdRequest
} from './ticket.types'

export const ticketApi = {
  /**
   * Создает временный билет (до оплаты)
   */
  async createPendingTicket(request: CreatePendingTicketRequest): Promise<UserTicket> {
    try {

      const requestData = {
        ...request,
        userData: {
          ...request.userData,
          user_id: request.userData?.user_id ?? null
        }
      }

      const response = await apiClient.post('/tickets/pending', requestData);
      return response.data;
    } catch (error: any) {
      console.error('Ошибка при создании временного билета:', error);
      throw new Error(error.response?.data?.error || 'Не удалось создать временный билет');
    }
  },

  /**
   * Обновляет payment_id билета
   */
  async updatePaymentId(request: UpdatePaymentIdRequest): Promise<UserTicket> {
    try {
      const response = await apiClient.put('/tickets/payment-id', request);
      return response.data;
    } catch (error: any) {
      console.error('Ошибка при обновлении payment_id:', error);
      throw new Error(error.response?.data?.error || 'Ошибка при обновлении payment_id');
    }
  },

  /**
   * Подтверждает оплату билета
   */
  async confirmPayment(request: ConfirmPaymentRequest): Promise<UserTicket> {
    try {
      const response = await apiClient.post('/tickets/confirm-payment', request);
      return response.data;
    } catch (error: any) {
      console.error('Ошибка при подтверждении оплаты:', error);
      throw new Error(error.response?.data?.error || 'Ошибка при подтверждении оплаты');
    }
  },

  /**
   * Получает билет по номеру
   */
  async getTicketByNumber(ticketNumber: string): Promise<UserTicket> {
    try {
      const response = await apiClient.get(`/tickets/number/${ticketNumber}`);
      return response.data;
    } catch (error: any) {
      console.error('Ошибка при получении билета:', error);
      throw new Error(error.response?.data?.error || 'Не удалось получить билет');
    }
  },

  /**
   * Отмечает билет как использованный
   */
  async markTicketAsUsed(request: MarkTicketUsedRequest): Promise<UserTicket> {
    try {
      const response = await apiClient.put('/tickets/mark-used', request);
      return response.data;
    } catch (error: any) {
      console.error('Ошибка при отметке билета:', error);
      throw new Error(error.response?.data?.error || 'Ошибка при отметке билета');
    }
  },

  /**
   * Получает статистику по билетам
   */
  async getTicketsStatistics(): Promise<TicketsStatistics> {
    try {
      const response = await apiClient.get('/tickets/statistics');
      return response.data;
    } catch (error: any) {
      console.error('Ошибка при получении статистики:', error);
      throw new Error(error.response?.data?.error || 'Не удалось получить статистику');
    }
  },

  /**
   * Получает все билеты пользователя по ID
   */
  async getUserTickets(userId: number): Promise<UserTicket[]> {
    try {
      const response = await apiClient.get(`/tickets/user/${userId}`);
      return response.data;
    } catch (error: any) {
      console.error('Ошибка при получении билетов пользователя:', error);
      throw new Error(error.response?.data?.error || 'Не удалось получить билеты пользователя');
    }
  },

  /**
   * Получает все билеты пользователя по email (для работы без регистрации)
   */
  async getUserTicketsByEmail(email: string): Promise<UserTicket[]> {
    try {
      const response = await apiClient.get(`/tickets/email/${email}`);
      return response.data;
    } catch (error: any) {
      console.error('Ошибка при получении билетов по email:', error);
      throw new Error(error.response?.data?.error || 'Не удалось получить билеты по email');
    }
  },

  /**
   * Получает все билеты пользователя по телефону (для работы без регистрации)
   */
  async getUserTicketsByPhone(phone: string): Promise<UserTicket[]> {
    try {
      const response = await apiClient.get(`/tickets/phone/${phone}`);
      return response.data;
    } catch (error: any) {
      console.error('Ошибка при получении билетов по телефону:', error);
      throw new Error(error.response?.data?.error || 'Не удалось получить билеты по телефону');
    }
  },

  /**
   * Удаляет билет
   */
  async deleteTicket(ticketId: number): Promise<{ message: string }> {
    try {
      const response = await apiClient.delete(`/tickets/${ticketId}`);
      return response.data;
    } catch (error: any) {
      console.error('Ошибка при удалении билета:', error);
      throw new Error(error.response?.data?.error || 'Не удалось удалить билет');
    }
  },

  /**
   * Получает билеты по paymentId
   */
  async getTicketsByPaymentId(paymentId: string): Promise<UserTicket[]> {
    try {
      const response = await apiClient.get(`/tickets/payment/${paymentId}`);
      return response.data;
    } catch (error: any) {
      console.error('Ошибка при получении билетов по paymentId:', error);
      throw new Error(error.response?.data?.error || 'Не удалось получить билеты');
    }
  }
};

export const orderApi = {
  /**
   * Создает заказ
   */
  async createOrder(request: CreateOrderRequest): Promise<Order> {
    try {
      const response = await apiClient.post('/orders', request);
      return response.data;
    } catch (error: any) {
      console.error('Ошибка при создании заказа:', error);
      throw new Error(error.response?.data?.error || 'Не удалось создать заказ');
    }
  },

  async updateOrderPaymentId(request: UpdateOrderPaymentIdRequest): Promise<Order> {
    try {
      const response = await apiClient.put('/orders/payment-id', request);
      return response.data;
    } catch (error: any) {
      console.error('Ошибка при обновлении payment_id:', error);
      throw new Error(error.response?.data?.error || 'Ошибка при обновлении payment_id');
    }
  },

  /**
   * Получает заказ по ID
   */
  async getOrderById(orderId: number): Promise<Order> {
    try {
      const response = await apiClient.get(`/orders/${orderId}`);
      return response.data;
    } catch (error: any) {
      console.error('Ошибка при получении заказа:', error);
      throw new Error(error.response?.data?.error || 'Не удалось получить заказ');
    }
  },

  /**
   * Получает заказ по payment_id
   */
  async getOrderByPaymentId(paymentId: string): Promise<Order> {
    try {
      const response = await apiClient.get(`/orders/payment/${paymentId}`);
      return response.data;
    } catch (error: any) {
      console.error('Ошибка при получении заказа:', error);
      throw new Error(error.response?.data?.error || 'Не удалось получить заказ');
    }
  },

  /**
   * Получает заказы по email
   */
  async getOrdersByEmail(email: string): Promise<Order[]> {
    try {
      const response = await apiClient.get(`/orders/email/${email}`);
      return response.data;
    } catch (error: any) {
      console.error('Ошибка при получении заказов:', error);
      throw new Error(error.response?.data?.error || 'Не удалось получить заказы');
    }
  },

  /**
   * Получает заказы по телефону
   */
  async getOrdersByPhone(phone: string): Promise<Order[]> {
    try {
      const response = await apiClient.get(`/orders/phone/${phone}`);
      return response.data;
    } catch (error: any) {
      console.error('Ошибка при получении заказов:', error);
      throw new Error(error.response?.data?.error || 'Не удалось получить заказы');
    }
  }
};

export const paymentApi = {
  /**
   * Проверяет статус платежной системы
   */
  async checkHealth(): Promise<{ status: string; paykeeper: string; message: string }> {
    try {
      const response = await apiClient.get('/payments/health');
      return response.data;
    } catch (error: any) {
      console.error('Ошибка при проверке платежной системы:', error);
      throw new Error(error.response?.data?.error || 'Ошибка при проверке платежной системы');
    }
  },

  /**
   * Создает счет для оплаты
   */
  async createInvoice(request: CreateInvoiceRequest): Promise<CreateInvoiceResponse> {
    try {
      const response = await apiClient.post('/payments/create-invoice', request);
      return response.data;
    } catch (error: any) {
      console.error('Ошибка при создании счета:', error);
      throw new Error(error.response?.data?.error || 'Ошибка при создании счета');
    }
  },

  /**
   * Проверяет статус платежа
   */
  async checkPaymentStatus(paymentId: string): Promise<PaymentStatusResponse> {
    try {
      const response = await apiClient.get(`/payments/status/${paymentId}`);
      return response.data;
    } catch (error: any) {
      console.error('Ошибка при проверке статус платежа:', error);
      throw new Error(error.response?.data?.error || 'Ошибка при проверке статус платежа');
    }
  },

  /**
   * Получает билеты по paymentId
   */
  async getTicketsByPaymentId(paymentId: string): Promise<{ success: boolean; userTickets: UserTicket[] }> {
    try {
      const response = await apiClient.get(`/payments/tickets/${paymentId}`);
      return response.data;
    } catch (error: any) {
      console.error('Ошибка при получении билетов:', error);
      throw new Error(error.response?.data?.error || 'Ошибка при получении билетов');
    }
  },

  /**
   * Обрабатывает вебхук от PayKeeper
   */
  async handleWebhook(paymentId: string, status: string): Promise<{ success: boolean; status: string }> {
    try {
      const response = await apiClient.post('/payments/webhook', { id: paymentId, status });
      return response.data;
    } catch (error: any) {
      console.error('Ошибка при обработке вебхука:', error);
      throw new Error(error.response?.data?.error || 'Ошибка при обработке вебхука');
    }
  },

  /**
   * Отменяет платеж
   */
  async cancelPayment(paymentId: string): Promise<{ success: boolean; message: string }> {
    try {
      const response = await apiClient.post(`/payments/cancel/${paymentId}`);
      return response.data;
    } catch (error: any) {
      console.error('Ошибка при отмене платежа:', error);
      throw new Error(error.response?.data?.error || 'Ошибка при отмене платежа');
    }
  },

  /**
   * Получает информацию о билете по номеру
   */
  async getTicketByNumber(ticketNumber: string): Promise<{ success: boolean; userTicket?: UserTicket; error?: string }> {
    try {
      const response = await apiClient.get(`/payments/ticket/${ticketNumber}`);
      return response.data;
    } catch (error: any) {
      console.error('Ошибка при получении билета:', error);
      throw new Error(error.response?.data?.error || 'Ошибка при получении билета');
    }
  },

  /**
   * Отмечает билет как использованный
   */
  async markTicketAsUsed(ticketNumber: string): Promise<{ success: boolean; message: string; userTicket?: UserTicket }> {
    try {
      const response = await apiClient.post(`/payments/ticket/${ticketNumber}/use`);
      return response.data;
    } catch (error: any) {
      console.error('Ошибка при отметке билета:', error);
      throw new Error(error.response?.data?.error || 'Ошибка при отметке билета');
    }
  },

  /**
   * Проверяет все pending платежи
   */
  async checkAllPendingPayments(): Promise<{ success: boolean; checked?: number; results?: any[]; error?: string }> {
    try {
      const response = await apiClient.post('/payments/check-pending');
      return response.data;
    } catch (error: any) {
      console.error('Ошибка при проверке pending платежей:', error);
      throw new Error(error.response?.data?.error || 'Ошибка при проверке pending платежей');
    }
  },

  /**
   * Отменяет просроченные платежи
   */
  async cancelExpiredPayments(): Promise<{ success: boolean; canceled?: number; error?: string }> {
    try {
      const response = await apiClient.post('/payments/cancel-expired');
      return response.data;
    } catch (error: any) {
      console.error('Ошибка при отмене просроченных платежей:', error);
      throw new Error(error.response?.data?.error || 'Ошибка при отмене просроченных платежей');
    }
  }
};

// Вспомогательные функции
export const generateTicketNumber = (): string => {
  const randomNumbers = Math.floor(Math.random() * 10000000)
    .toString()
    .padStart(7, '0');
  return `Француз-${randomNumbers}`;
};

export const formatPrice = (price: string): string => {
  return `${parseFloat(price).toLocaleString('ru-RU')} руб.`;
};

export const getTicketStatus = (ticket: UserTicket): string => {
  switch (ticket.payment_status) {
    case 'paid':
      return ticket.is_used ? 'Использован' : 'Активен';
    case 'pending':
      return 'Ожидает оплаты';
    case 'failed':
      return 'Ошибка оплаты';
    case 'canceled':
      return 'Отменен';
    default:
      return 'Неизвестно';
  }
};

export const isTicketValid = (ticket: UserTicket): boolean => {
  return ticket.payment_status === 'paid' && !ticket.is_used;
};

export default {
  ticketApi,
  orderApi,
  paymentApi,
  generateTicketNumber,
  formatPrice,
  getTicketStatus,
  isTicketValid
};