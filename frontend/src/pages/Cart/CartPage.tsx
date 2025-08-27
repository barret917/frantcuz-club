import React, { useState, useEffect } from 'react';
import styled, { keyframes, css } from 'styled-components';
import { Event } from '@/shared/api/events';
import { 
  UserData, 
  CreateOrderRequest,
  CreateInvoiceRequest, 
  CreateInvoiceResponse,
  UserTicket
} from '@/shared/api/ticket/ticket.types';
import { orderApi, paymentApi, ticketApi } from '@/shared/api/ticket/ticket';

const modalFadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const modalSlideIn = keyframes`
  from {
    transform: translateY(-50px) scale(0.95);
    opacity: 0;
  }
  to {
    transform: translateY(0) scale(1);
    opacity: 1;
  }
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.9);
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 1rem;
  animation: ${css`${modalFadeIn} 0.3s ease-out`};
  
  @media (max-width: 768px) {
    padding: 0.5rem;
  }
`;

const ModalContent = styled.div`
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  border-radius: 20px;
  border: 1px solid rgba(102, 126, 234, 0.3);
  max-width: 900px;
  width: 100%;
  max-height: 95vh;
  overflow-y: auto;
  animation: ${css`${modalSlideIn} 0.4s ease-out`};
  position: relative;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: rgba(239, 68, 68, 0.3);
  border: 1px solid rgba(239, 68, 68, 0.4);
  color: #ef4444;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 10;

  &:hover {
    background: rgba(239, 68, 68, 0.5);
    transform: scale(1.1);
  }
`;

const ModalBody = styled.div`
  padding: 2rem;
  
  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const ModalTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  color: white;
  margin: 0 0 2rem 0;
  text-align: center;
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const CartItem = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 15px;
  padding: 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

const EventHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
  gap: 1rem;
  
  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

const EventTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
  color: white;
  margin: 0;
  flex: 1;
`;

const EventDate = styled.div`
  background: linear-gradient(135deg, #667eea 0%, #8b5cf6 100%);
  extreme: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  extreme-weight: 600;
  white-space: nowrap;
`;

const EventDescription = styled.p`
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 1rem;
  line-height: 1.5;
`;

const QuantityControls = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
  extreme: 1rem;
  
  @media (max-width: 480px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

const QuantityButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const QuantityButton = styled.button`
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: white;
  width: 40px;
  height: 40px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const QuantityDisplay = styled.span`
  font-size: 1.2rem;
  font-weight: 600;
  color: white;
  min-width: 40px;
  text-align: center;
`;

const PriceInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.5rem;
  
  @media (max-width: 480px) {
    align-items: center;
  }
`;

const PricePerTicket = styled.span`
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;
`;

const TotalPrice = styled.span`
  color: #ffd700;
  font-size: 1.2rem;
  font-weight: 700;
`;

const RemoveButton = styled.button`
  background: rgba(239, 68, 68, 0.2);
  color: #ef4444;
  border: 1px solid rgba(239, 68, 68, 0.3);
  padding: 0.5rem 1rem;
  border-radius: 10px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(239, 68, 68, 0.3);
  }
`;

const CartSummary = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 15px;
  padding: 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  margin-top: 1rem;
`;

const SummaryRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  
  &:last-child {
    margin-bottom: 0;
    padding-top: 1rem;
    border-top: 1px extreme rgba(255, 255, 255, 0.1);
  }
`;

const SummaryLabel = styled.span`
  color: rgba(255, 255, 255, 0.8);
  font-size: 1rem;
`;

const SummaryValue = styled.span`
  color: white;
  font-size: 1.1rem;
  font-weight: 600;
`;

const GrandTotal = styled(SummaryValue)`
  color: #ffd700;
  font-size: 1.3rem;
  font-weight: 700;
`;

const OrderForm = styled.form`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const FormTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
  color: white;
  margin: 0 0 1rem 0;
`;

const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.9rem;
  font-weight: 500;
`;

const Input = styled.input`
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  padding: 0.8rem 1rem;
  color: white;
  font-size: 1rem;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #667eea;
    background: rgba(255, 255, 255, 0.15);
  }

  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
`;

const FormActions = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: flex-end;
  margin-top: 1.5rem;
  
  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

const SubmitButton = styled.button`
  background: linear-gradient(135deg, #22c55e 0%, #16a34a 100%);
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 15px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  min-width: 180px;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(34, 197, 94, 0.4);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`;

const CancelButton = styled.button`
  background: transparent;
  color: rgba(255, 255, 255, 0.8);
  border: 2px solid rgba(255, 255, 255, 0.3);
  padding: 1rem 2rem;
  border-radius: 15px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  min-width: 180px;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.5);
  }
`;

const EmptyCart = styled.div`
  text-align: center;
  padding: 3rem;
  color: rgba(255, 255, 255, 0.7);
`;

const ErrorMessage = styled.div`
  background: rgba(239, 68, 68, 0.2);
  border: 1px solid rgba(239, 68, 68, 0.3);
  color: #ef4444;
  padding: 1rem;
  border-radius: 10px;
  margin-bottom: 1rem;
`;

const SuccessMessage = styled.div`
  background: rgba(34, 197, 94, 0.2);
  border: 1px solid rgba(34, 197, 94, 0.3);
  color: #22c55e;
  padding: 1rem;
  border-radius: 10px;
  margin-bottom: 1rem;
`;

const LoadingOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  z-index: 100;
  flex-direction: column;
  gap: 1rem;
`;

const LoadingSpinner = styled.div`
  width: 50px;
  height: 50px;
  border: 3px solid rgba(255, 255, 255, 0.3);
  border-top: 3px solid #667eea;
  border-radius: 50%;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

const LoadingText = styled.div`
  color: white;
  font-size: 1.1rem;
  text-align: center;
`;

const PaymentRedirect = styled.div`
  text-align: center;
  padding: 2rem;
`;

const RedirectTitle = styled.h3`
  color: white;
  margin-bottom: 1rem;
  font-size: 1.3rem;
`;

const RedirectDescription = styled.p`
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 1.5rem;
  line-height: 1.5;
`;

const RedirectButton = styled.a`
  background: linear-gradient(135deg, #667eea 0%, #8b5cf6 100%);
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 15px;
  font-size: 1.1rem;
  font-weight: 600;
  text-decoration: none;
  display: inline-block;
  margin-top: 1rem;
  transition: all 0.3s ease;
  min-width: 200px;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(102, 126, 234, 0.4);
  }
`;

const ContinueButton = styled.button`
  background: transparent;
  color: rgba(255, 255, 255, 0.8);
  border: 2px solid rgba(255, 255, 255, 0.3);
  padding: 1rem 2rem;
  border-radius: 15px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 1rem;
  width: 200px;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.5);
  }
`;

const StepIndicator = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
  gap: 0.5rem;
`;

const Step = styled.div<{ active: boolean }>`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${props => props.active ? '#667eea' : 'rgba(255, 255, 255, 0.3)'};
  transition: all 0.3s ease;
`;

interface CartItem {
  event: Event;
  quantity: number;
}

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (eventId: number, quantity: number) => void;
  onRemoveItem: (eventId: number) => void;
  onCheckoutSuccess?: (orderId: number, paymentUrl: string) => void;
  onCheckoutComplete?: () => void;
}

type PaymentStep = 'form' | 'processing' | 'redirect';

export const CartModal: React.FC<CartModalProps> = ({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onCheckoutSuccess,
  onCheckoutComplete
}) => {
  const [userData, setUserData] = useState<UserData>({
    first_name: '',
    last_name: '',
    email: '',
    phone: ''
  });
  const [currentStep, setCurrentStep] = useState<PaymentStep>('form');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string>('');
  const [success, setSuccess] = useState<string>('');
  const [paymentUrl, setPaymentUrl] = useState<string>('');
  const [currentOrderId, setCurrentOrderId] = useState<number | null>(null);
  const [processingStep, setProcessingStep] = useState<string>('');
  const [hasRedirected, setHasRedirected] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      setHasRedirected(false);
      setCurrentStep('form');
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const formatDateTime = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleString('ru-RU', {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    });
  };

  const parsePrice = (price: string): number => {
    if (price === 'Бесплатно' || !price) return 0;
    const numericPrice = price.replace(/[^\d,]/g, '').replace(',', '.');
    return parseFloat(numericPrice) || 0;
  };

  const getEventTotal = (item: CartItem): number => {
    const price = parsePrice(item.event.price);
    return price * item.quantity;
  };

  const getGrandTotal = (): number => {
    return cartItems.reduce((total, item) => total + getEventTotal(item), 0);
  };

  const getTotalTickets = (): number => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const handleQuantityChange = (eventId: number, change: number): void => {
    const item = cartItems.find(item => item.event.id === eventId);
    if (item) {
      const newQuantity = item.quantity + change;
      if (newQuantity > 0) {
        onUpdateQuantity(eventId, newQuantity);
      } else {
        onRemoveItem(eventId);
      }
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setUserData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const createPendingTickets = async (): Promise<UserTicket[]> => {
    setProcessingStep('Создание временных билетов...');
    const tickets: UserTicket[] = [];
    
    for (const item of cartItems) {
      for (let i = 0; i < item.quantity; i++) {
        try {
          const ticketRequest = {
            ticketId: item.event.id,
            userData: {
              first_name: userData.first_name.trim() || '',
              last_name: userData.last_name?.trim() || '',
              email: userData.email?.trim() || '',
              phone: userData.phone?.trim() || '',
              user_id: userData?.user_id ?? null
            },
          };

          const ticket = await ticketApi.createPendingTicket(ticketRequest);
          tickets.push(ticket);
        } catch (error: any) {
          console.error('Ошибка при создании временного билета:', error);
          throw new Error('Не удалось создать билеты: ' + (error.message || 'Ошибка сервера'));
        }
      }
    }
    
    return tickets;
  };

  const createOrder = async (): Promise<number> => {
    setProcessingStep('Создание заказа...');
    
    const phone = userData.phone?.trim();
    if (!phone) {
      throw new Error('Номер телефона обязателен для заполнения');
    }

    const orderRequest: CreateOrderRequest = {
      userData: {
        first_name: userData.first_name.trim(),
        last_name: userData.last_name?.trim(),
        extreme: userData.email?.trim(),
        phone: phone,
        user_id: undefined
      },
      tickets: cartItems.map(item => ({
        id: item.event.id,
        price: item.event.price,
        quantity: item.quantity
      })),
      paymentData: {
        id: `pay_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
        method: 'paykeeper'
      }
    };

    try {
      const order = await orderApi.createOrder(orderRequest);
      return order.id;
    } catch (error: any) {
      console.error('Ошибка при создании заказа:', error);
      throw new Error('Не удалось создать заказ: ' + (error.message || 'Ошибка сервера'));
    }
  };

  const createPaymentInvoice = async (orderId: number, tickets: UserTicket[]): Promise<CreateInvoiceResponse> => {
    setProcessingStep('Создание счета оплаты...');
    
    const phone = userData.phone?.trim();
    if (!phone) {
      throw new Error('Номер телефона обязателен для заполнения');
    }

    const customer = {
      first_name: userData.first_name.trim(),
      last_name: userData.last_name?.trim() || '',
      email: userData.email?.trim() || '',
      phone: phone
    };

    const totalAmount = getGrandTotal();

    const eventTitle = cartItems.length === 1 
      ? cartItems[0].event.title 
      : `Заказ на ${cartItems.length} мероприятий`;

    const invoiceRequest: CreateInvoiceRequest = {
      orderId: orderId.toString(),
      ticketData: tickets.map(ticket => ({
        ticket_id: ticket.ticket_id,
        price: parsePrice(ticket.ticket?.price || '0'),
        first_name: userData.first_name.trim(),
        last_name: userData.last_name?.trim() || '',
        email: userData.email?.trim() || '',
        phone: phone,
        event_title: ticket.ticket?.title || 'Мероприятие',
        user_id: undefined
      })),
      customer: customer,
      totalAmount: totalAmount,
      eventTitle: eventTitle
    };

    try {
      const invoiceResponse = await paymentApi.createInvoice(invoiceRequest);
      
      if (!invoiceResponse.success) {
        throw new Error(invoiceResponse.error || 'Ошибка при создании счета оплаты');
      }

      return invoiceResponse;
    } catch (error: any) {
      console.error('Ошибка при создании счета:', error);
      throw new Error('Не удалось создать счет: ' + (error.message || 'Ошибка сервера'));
    }
  };

  const updateTicketsPaymentId = async (tickets: UserTicket[], paymentId: string): Promise<void> => {
    setProcessingStep('Обновление информации о платеже...');
    
    for (const ticket of tickets) {
      try {
        await ticketApi.updatePaymentId({
          ticketId: ticket.id,
          paymentId: paymentId
        });
      } catch (error: any) {
        console.error('Ошибка при обновлении payment_id:', error);
      }
    }
  };

  const updateOrderPaymentId = async (orderId: extreme, paymentId: string): Promise<void> => {
    setProcessingStep('Обновление информации о платеже заказа...');
    
    try {
      await orderApi.updateOrderPaymentId({
        orderId: orderId,
        paymentId: paymentId
      });
    } catch (error: any) {
      console.error('Ошибка при обновлении payment_id заказа:', error);
    }
  };

  const handleSubmit = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setPaymentUrl('');

    if (!userData.first_name.trim()) {
      setError('Пожалуйста, введите имя');
      return;
    }

    if (!userData.last_name?.trim()) {
      setError('Пожалуйста, введите фамилию');
      return;
    }

    if (!userData.phone?.trim()) {
      setError('Пожалуйста, введите номер телефона');
      return;
    }

    if (!userData.email?.trim()) {
      setError('Пожалуйста, введите email');
      return;
    }

    if (getGrandTotal() <= 0) {
      setError('Нельзя оформить заказ с нулевой стоимостью');
      return;
    }

    setIsSubmitting(true);
    setCurrentStep('processing');

    try {
      const pendingTickets = await createPendingTickets();
      const orderId = await createOrder();
      setCurrentOrderId(orderId);

      const invoiceResponse = await createPaymentInvoice(orderId, pendingTickets);
      await updateTicketsPaymentId(pendingTickets, invoiceResponse.paymentId);
      await updateOrderPaymentId(orderId, invoiceResponse.paymentId);

      setPaymentUrl(invoiceResponse.paymentUrl);
      setCurrentStep('redirect');
      setSuccess('Заказ успешно создан! Перенаправляем на оплату...');

      if (onCheckoutSuccess) {
        onCheckoutSuccess(orderId, invoiceResponse.paymentUrl);
      }

    } catch (err: any) {
      console.error('Ошибка при оформлении заказа:', err);
      setError(err.message || 'Произошла ошибка при оформлении заказа');
      setCurrentStep('form');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleOverlayClick = (e: React.MouseEvent): void => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleClose = (): void => {
    if (currentStep !== 'redirect') {
      setCurrentStep('form');
      setError('');
      setSuccess('');
      setPaymentUrl('');
      setCurrentOrderId(null);
    }
    onClose();
  };

  const handleRedirectClick = (): void => {
    setHasRedirected(true);
    setTimeout(handleClose, 1000);
  };

  const handleContinueShopping = (): void => {
    if (onCheckoutComplete) {
      onCheckoutComplete();
    }
    setCurrentStep('form');
    setError('');
    setSuccess('');
    setPaymentUrl('');
    setCurrentOrderId(null);
    setHasRedirected(false);
    onClose();
  };

  const renderContent = (): JSX.Element => {
    if (currentStep === 'processing') {
      return (
        <LoadingOverlay>
          <LoadingSpinner />
          <LoadingText>{processingStep}</LoadingText>
          <StepIndicator>
            <Step active={processingStep.includes('билет')} />
            <Step active={processingStep.includes('заказ')} />
            <Step active={processingStep.includes('счет')} />
            <Step active={processingStep.includes('платеж')} />
          </StepIndicator>
        </LoadingOverlay>
      );
    }

    if (currentStep === 'redirect' && paymentUrl) {
      return (
        <PaymentRedirect>
          <RedirectTitle>🎉 Заказ успешно создан!</RedirectTitle>
          <RedirectDescription>
            {hasRedirected 
              ? 'Вы были перенаправлены на страницу оплаты. После успешной оплаты билеты будут отправлены на вашу почту.'
              : 'Вы будете перенаправлены на страницу оплаты PayKeeper. После успешной оплаты билеты будут отправлены на вашу почту.'}
          </RedirectDescription>
          
          {!hasRedirected && (
            <div>
              <RedirectButton 
                href={paymentUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={handleRedirectClick}
              >
                Перейти к оплате
              </RedirectButton>
            </div>
          )}
          
          <div>
            <ContinueButton onClick={handleContinueShopping}>
              {hasRedirected ? 'Вернуться к мероприятиям' : 'Продолжить покупки'}
            </ContinueButton>
          </div>
        </PaymentRedirect>
      );
    }

    return (
      <>
        <ModalTitle>🛒 Корзина билетов</ModalTitle>
        
        {error && <ErrorMessage>{error}</ErrorMessage>}
        {success && <SuccessMessage>{success}</SuccessMessage>}
        
        {cartItems.length === 0 ? (
          <EmptyCart>
            <p>Ваша корзина пуста</p>
          </EmptyCart>
        ) : (
          <>
            <CartContainer>
              {cartItems.map((item) => (
                <CartItem key={item.event.id}>
                  <EventHeader>
                    <EventTitle>{item.event.title}</EventTitle>
                    <EventDate>{formatDateTime(item.event.event_date)}</EventDate>
                  </EventHeader>
                  
                  <EventDescription>
                    {item.event.description || 'Описание мероприятия'}
                  </EventDescription>
                  
                  <QuantityControls>
                    <QuantityButtons>
                      <QuantityButton
                        onClick={() => handleQuantityChange(item.event.id, -1)}
                        disabled={isSubmitting}
                      >
                        -
                      </QuantityButton>
                      <QuantityDisplay>{item.quantity}</QuantityDisplay>
                      <QuantityButton
                        onClick={() => handleQuantityChange(item.event.id, 1)}
                        disabled={isSubmitting}
                      >
                        +
                      </QuantityButton>
                    </QuantityButtons>
                    
                    <PriceInfo>
                      <PricePerTicket>
                        {item.event.price === 'Бесплатно' || !item.event.price 
                          ? 'Бесплатно' 
                          : `${parsePrice(item.event.price).toLocaleString('ru-RU')} ₽ за билет`}
                      </PricePerTicket>
                      <TotalPrice>
                        {getEventTotal(item).toLocaleString('ru-RU')} ₽
                      </TotalPrice>
                    </PriceInfo>
                    
                    <RemoveButton
                      onClick={() => onRemoveItem(item.event.id)}
                      disabled={isSubmitting}
                    >
                      Удалить
                    </RemoveButton>
                  </QuantityControls>
                </CartItem>
              ))}
            </CartContainer>
            
            <CartSummary>
              <SummaryRow>
                <SummaryLabel>Общее количество билетов:</SummaryLabel>
                <SummaryValue>{getTotalTickets()} шт.</SummaryValue>
              </SummaryRow>
              <SummaryRow>
                <SummaryLabel>Общая сумма:</SummaryLabel>
                <GrandTotal>{getGrandTotal().toLocaleString('ru-RU')} ₽</GrandTotal>
              </SummaryRow>
            </CartSummary>
            
            <OrderForm onSubmit={handleSubmit}>
              <FormTitle>Данные для заказа</FormTitle>
              
              <FormRow>
                <FormGroup>
                  <Label htmlFor="first_name">Имя *</Label>
                  <Input
                    type="text"
                    id="first_name"
                    name="first_name"
                    value={userData.first_name}
                    onChange={handleInputChange}
                    required
                    disabled={isSubmitting}
                    placeholder="Введите ваше имя"
                  />
                </FormGroup>
                
                <FormGroup>
                  <Label htmlFor="last_name">Фамилия *</Label>
                  <Input
                    type="text"
                    id="last_name"
                    name="last_name"
                    value={userData.last_name || ''}
                    onChange={handleInputChange}
                    required
                    disabled={isSubmitting}
                    placeholder="Введите вашу фамилию"
                  />
                </FormGroup>
              </FormRow>
              
              <FormRow>
                <FormGroup>
                  <Label htmlFor="phone">Номер телефона *</Label>
                  <Input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={userData.phone || ''}
                    onChange={handleInputChange}
                    required
                    disabled={isSubmitting}
                    placeholder="+7 (999) 999-99-99"
                  />
                </FormGroup>
                
                <FormGroup>
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={userData.email || ''}
                    onChange={handleInputChange}
                    required
                    disabled={isSubmitting}
                    placeholder="your@email.com"
                  />
                </FormGroup>
              </FormRow>
              
              <FormActions>
                <CancelButton 
                  type="button" 
                  onClick={handleClose}
                  disabled={isSubmitting}
                >
                  Отмена
                </CancelButton>
                <SubmitButton 
                  type="submit" 
                  disabled={isSubmitting || getGrandTotal() <= 0}
                >
                  {isSubmitting ? 'Обработка...' : `Оформить заказ - ${getGrandTotal().toLocaleString('ru-RU')} ₽`}
                </SubmitButton>
              </FormActions>
            </OrderForm>
          </>
        )}
      </>
    );
  };

  return (
    <ModalOverlay onClick={handleOverlayClick}>
      <ModalContent>
        <CloseButton onClick={handleClose} disabled={isSubmitting}>×</CloseButton>
        <ModalBody>
          {renderContent()}
        </ModalBody>
      </ModalContent>
    </ModalOverlay>
  );
};