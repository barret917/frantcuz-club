import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

class WebsiteApiService {
    constructor() {
        this.API_BASE = process.env.WEBSITE_API_URL || 'http://localhost:3002/api/bot';
        this.client = axios.create({
            baseURL: this.API_BASE,
            timeout: 10000,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }

    // Получение событий с сайта
    async getEvents() {
        try {
            const response = await this.client.get('/events');
            return response.data;
        } catch (error) {
            console.error('Ошибка получения событий с сайта:', error.message);
            throw new Error('Не удалось получить события с сайта');
        }
    }

    // Получение доступности мест в зоне
    async getZoneAvailability(eventId, zoneId) {
        try {
            const response = await this.client.get(`/events/${eventId}/zones/${zoneId}/availability`);
            return response.data;
        } catch (error) {
            console.error('Ошибка получения доступности зоны:', error.message);
            throw new Error('Не удалось получить доступность зоны');
        }
    }

    // Покупка билетов через сайт
    async purchaseTickets(ticketData) {
        try {
            const response = await this.client.post('/tickets', ticketData);
            return response.data;
        } catch (error) {
            console.error('Ошибка покупки билетов:', error.response?.data || error.message);
            throw new Error(error.response?.data?.error || 'Не удалось купить билеты');
        }
    }

    // Получение информации о покупке билетов
    async getTicketPurchase(ticketId) {
        try {
            const response = await this.client.get(`/tickets/${ticketId}`);
            return response.data;
        } catch (error) {
            console.error('Ошибка получения информации о билетах:', error.message);
            throw new Error('Не удалось получить информацию о билетах');
        }
    }

    // Обновление статуса покупки билетов
    async updateTicketStatus(ticketId, status) {
        try {
            const response = await this.client.patch(`/tickets/${ticketId}/status`, { status });
            return response.data;
        } catch (error) {
            console.error('Ошибка обновления статуса билетов:', error.message);
            throw new Error('Не удалось обновить статус билетов');
        }
    }

    // Получение списка залов
    async getHalls() {
        try {
            const response = await this.client.get('/halls');
            return response.data;
        } catch (error) {
            console.error('Ошибка получения залов:', error.message);
            throw new Error('Не удалось получить залы');
        }
    }

    // Получение статистики
    async getStats() {
        try {
            const response = await this.client.get('/stats');
            return response.data;
        } catch (error) {
            console.error('Ошибка получения статистики:', error.message);
            throw new Error('Не удалось получить статистику');
        }
    }

    // Получение билетов пользователя
    async getUserTickets(telegramUserId) {
        try {
            const response = await this.client.get(`/tickets/user/${telegramUserId}`);
            return response.data;
        } catch (error) {
            console.error('Ошибка получения билетов пользователя:', error.message);
            throw new Error('Не удалось получить билеты пользователя');
        }
    }

    // Получение QR-кода для билета
    async getTicketQR(ticketId) {
        try {
            const response = await this.client.get(`/tickets/${ticketId}/qr`);
            return response.data;
        } catch (error) {
            console.error('Ошибка получения QR-кода:', error.message);
            throw new Error('Не удалось получить QR-код');
        }
    }

    // Получение билета с QR-кодом
    async getTicketWithQR(ticketId) {
        try {
            const response = await this.client.get(`/tickets/${ticketId}/with-qr`);
            return response.data;
        } catch (error) {
            console.error('Ошибка получения билета с QR-кодом:', error.message);
            throw new Error('Не удалось получить билет с QR-кодом');
        }
    }

    // Проверка подключения к API
    async checkConnection() {
        try {
            const response = await this.client.get('/stats');
            return response.status === 200;
        } catch (error) {
            console.error('Ошибка подключения к API сайта:', error.message);
            return false;
        }
    }
}

export default WebsiteApiService; 