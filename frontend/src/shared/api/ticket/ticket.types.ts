export interface Ticket {
  id: number;
  title: string;
  short_description: string | null;
  description: string | null;
  image_url: string | null;
  event_date: string;
  event_location: string;
  price: string;
  is_used: boolean;
  qr_code: string | null;
  ticket_number: string;
  user_id: number | null;
  created_at: string;
  updated_at: string;
}

export interface UserTicket {
  id: number;
  user_id: number | null;
  ticket_id: number;
  ticket_number: string;
  qr_code: string | null;
  purchase_date: Date | null;
  is_used: boolean;
  used_at: Date | null;
  payment_status: 'pending' | 'paid' | 'failed' | 'canceled';
  payment_id: string | null;
  expires_at: Date | null;
  first_name: string | null;
  last_name: string | null;
  email: string | null;
  phone: string | null;
  table_number: string;
  created_at: Date;
  updated_at: Date;
  ticket?: Ticket;
  user?: User;
}

export interface User {
  id: number;
  telegram_id: string | null;
  username: string | null;
  first_name: string;
  last_name: string | null;
  is_admin: boolean;
  language_code: string | null;
  is_bot: boolean;
  phone: string | null;
  email: string | null;
  created_at: string;
  updated_at: string;
}

export interface UserData {
  first_name: string;
  last_name?: string;
  email?: string;
  phone?: string;
  user_id?: number;
}

export interface PaymentData {
  id: string;
  method: string;
}

export interface Order {
  id: number;
  user_id: number | null;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  status: 'pending' | 'paid' | 'completed' | 'canceled';
  total_amount: string;
  payment_id: string | null;
  payment_method: string | null;
  created_at: string;
  updated_at: string;
  items: OrderItem[];
  tickets?: UserTicket[];
}

export interface OrderItem {
  id: number;
  order_id: number;
  user_ticket_id: number;
  price: string;
  quantity: number;
  ticket?: UserTicket;
}

export interface CreateOrderRequest {
  userData: {
    first_name: string;
    last_name?: string;
    email?: string;
    phone?: string;
    user_id?: number;
  };
  tickets: Array<{
    id: number;
    price: string;
    quantity: number;
  }>;
  paymentData: {
    id: string;
    method: string;
  };
}

export interface CreateInvoiceRequest {
  orderId: string;
  ticketData: Array<{
    ticket_id: number;
    price: number;
    first_name: string;
    last_name: string;
    email?: string;
    phone?: string;
    event_title: string;
    user_id?: number;
  }>;
  // Добавьте эти поля
  customer: {
    first_name: string;
    last_name: string;
    email?: string;
    phone?: string;
  };
  totalAmount: number;
  eventTitle: string;
}

export interface CreateInvoiceResponse {
  success: boolean;
  paymentUrl: string;
  paymentId: string;
  tickets: UserTicket[];
  error?: string;
}

export interface PaymentStatusResponse {
  success: boolean;
  status: 'paid' | 'pending' | 'canceled' | 'unknown';
  userTickets?: UserTicket[];
  message?: string;
  error?: string;
}

export interface CreatePendingTicketRequest {
  ticketId: number;
  userData?: {
    first_name?: string;
    last_name?: string;
    email?: string;
    phone?: string;
    user_id?: number | null;
  };
}

export interface UpdatePaymentIdRequest {
  ticketId: number;
  paymentId: string;
}

export interface UpdateOrderPaymentIdRequest {
  orderId: number;
  paymentId: string;
}

export interface ConfirmPaymentRequest {
  paymentId: string;
}

export interface MarkTicketUsedRequest {
  ticketNumber: string;
}

export interface TicketsStatistics {
  total: number;
  used: number;
  active: number;
  pending: number;
  canceled: number;
  usedPercentage: number;
}