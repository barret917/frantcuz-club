import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { getAllEvents, Event } from '@/shared/api/events'
import { getHalls, Hall } from '@/shared/api/halls'
import { getZones, Zone } from '@/shared/api/halls'
import { createBooking, BookingType } from '@/shared/api/bookings'
import { CreateEventBookingData } from '../../events-management/types'

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 15px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
`

const StepContainer = styled.div`
  margin-bottom: 2rem;
`

const StepTitle = styled.h3`
  color: white;
  margin-bottom: 1rem;
  font-size: 1.5rem;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

const FormItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

const Label = styled.label`
  font-weight: 600;
  color: rgba(255, 255, 255, 0.9);
`

const Input = styled.input`
  padding: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.05);
  color: white;
  font-size: 1rem;
  
  &:focus {
    outline: none;
    border-color: #667eea;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }
  
  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
`

const Select = styled.select`
  padding: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.05);
  color: white;
  font-size: 1rem;
  
  &:focus {
    outline: none;
    border-color: #667eea;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }
  
  option {
    background: #1a1a1a;
    color: white;
  }
`

const Button = styled.button`
  padding: 1rem 2rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(102, 126, 234, 0.3);
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`

const ErrorMessage = styled.div`
  color: #ff6b6b;
  font-size: 0.9rem;
  margin-top: 0.5rem;
`

const SuccessMessage = styled.div`
  color: #51cf66;
  font-size: 0.9rem;
  margin-top: 0.5rem;
`

const ZoneCard = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 1rem;
  margin-bottom: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: #667eea;
  }
`

const ZoneName = styled.h4`
  color: white;
  margin: 0 0 0.5rem 0;
`

const ZoneInfo = styled.div`
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;
`

interface EventBookingFormProps {
  event: Event;
  onBookingComplete?: (booking: any) => void;
}

export const EventBookingForm: React.FC<EventBookingFormProps> = ({ event, onBookingComplete }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedZone, setSelectedZone] = useState<Zone | null>(null);
  const [selectedSeats, setSelectedSeats] = useState<number[]>([]);
  const [formData, setFormData] = useState({
    customerName: '',
    customerPhone: '',
    customerEmail: '',
    seatsCount: 1
  });
  const [zones, setZones] = useState<Zone[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    loadZones();
  }, [event.hallId]);

  const loadZones = async () => {
    try {
      const zonesData = await getZones(event.hallId);
      setZones(zonesData);
    } catch (error) {
      console.error('Ошибка загрузки зон:', error);
      setError('Ошибка загрузки зон');
    }
  };

  const handleZoneSelect = (zone: Zone) => {
    setSelectedZone(zone);
    setCurrentStep(2);
  };

  const handleSeatSelect = (seatId: number) => {
    setSelectedSeats(prev => {
      if (prev.includes(seatId)) {
        return prev.filter(id => id !== seatId);
      } else if (prev.length < formData.seatsCount) {
        return [...prev, seatId];
      }
      return prev;
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const validateForm = () => {
    if (!formData.customerName.trim()) {
      setError('Имя обязательно');
      return false;
    }
    if (!formData.customerPhone.trim()) {
      setError('Телефон обязателен');
      return false;
    }
    if (selectedSeats.length !== formData.seatsCount) {
      setError('Выберите нужное количество мест');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsLoading(true);
    setError(null);
    
    try {
      const bookingData: CreateEventBookingData = {
        type: BookingType.SEAT,
        hallId: event.hallId,
        zoneId: selectedZone!.id,
        date: event.date,
        time: event.time,
        guestsCount: selectedSeats.length,
        customerName: formData.customerName,
        customerPhone: formData.customerPhone,
        customerEmail: formData.customerEmail || undefined,
        selectedSeats: selectedSeats,
        totalAmount: formData.seatsCount * 1000 // Примерная цена
      };
      
      const booking = await createBooking(bookingData as any);
      setSuccess('Билеты успешно забронированы!');
      
      if (onBookingComplete) {
        onBookingComplete(booking);
      }
    } catch (error) {
      console.error('Ошибка бронирования:', error);
      setError('Ошибка бронирования');
    } finally {
      setIsLoading(false);
    }
  };

  const renderStep1 = () => (
    <StepContainer>
      <StepTitle>Выберите зону</StepTitle>
      {zones.map(zone => (
        <ZoneCard key={zone.id} onClick={() => handleZoneSelect(zone)}>
          <ZoneName>{zone.name}</ZoneName>
          <ZoneInfo>
            {zone.description && <div>{zone.description}</div>}
            <div>Время работы: {zone.openTime} - {zone.closeTime}</div>
          </ZoneInfo>
        </ZoneCard>
      ))}
    </StepContainer>
  );

  const renderStep2 = () => (
    <StepContainer>
      <StepTitle>Выберите места в зоне "{selectedZone?.name}"</StepTitle>
      <div style={{ marginBottom: '1rem' }}>
        <Label>Количество мест:</Label>
        <Input
          type="number"
          min="1"
          max="10"
          value={formData.seatsCount}
          onChange={(e) => handleInputChange('seatsCount', e.target.value)}
        />
      </div>
      <div style={{ marginBottom: '1rem' }}>
        <p style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
          Выбрано мест: {selectedSeats.length} из {formData.seatsCount}
        </p>
      </div>
      <Button onClick={() => setCurrentStep(3)} disabled={selectedSeats.length !== formData.seatsCount}>
        Продолжить
      </Button>
    </StepContainer>
  );

  const renderStep3 = () => (
    <StepContainer>
      <StepTitle>Введите данные покупателя</StepTitle>
      <Form onSubmit={handleSubmit}>
        <FormItem>
          <Label>Имя *</Label>
          <Input
            type="text"
            value={formData.customerName}
            onChange={(e) => handleInputChange('customerName', e.target.value)}
            placeholder="Введите имя"
            required
          />
        </FormItem>

        <FormItem>
          <Label>Телефон *</Label>
          <Input
            type="tel"
            value={formData.customerPhone}
            onChange={(e) => handleInputChange('customerPhone', e.target.value)}
            placeholder="+7 (999) 123-45-67"
            required
          />
        </FormItem>

        <FormItem>
          <Label>Email</Label>
          <Input
            type="email"
            value={formData.customerEmail}
            onChange={(e) => handleInputChange('customerEmail', e.target.value)}
            placeholder="email@example.com"
          />
        </FormItem>

        {error && <ErrorMessage>{error}</ErrorMessage>}
        {success && <SuccessMessage>{success}</SuccessMessage>}

        <div style={{ display: 'flex', gap: '1rem' }}>
          <Button type="button" onClick={() => setCurrentStep(2)}>
            Назад
          </Button>
          <Button type="submit" disabled={isLoading}>
            {isLoading ? 'Бронирование...' : 'Забронировать билеты'}
          </Button>
        </div>
      </Form>
    </StepContainer>
  );

  return (
    <Container>
      <h2 style={{ color: 'white', marginBottom: '2rem' }}>
        Бронирование билетов на "{event.name}"
      </h2>
      
      {currentStep === 1 && renderStep1()}
      {currentStep === 2 && renderStep2()}
      {currentStep === 3 && renderStep3()}
    </Container>
  );
};
