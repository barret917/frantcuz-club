import nodemailer from 'nodemailer'

export interface TicketEmailData {
  ticket: {
    id: number
    ticketNumber: string
    customerName: string
    customerEmail: string
    customerPhone: string
    price: number | any  // Decimal из Prisma
    event: {
      title: string
      date: Date
      time: string
      location?: string | null
    }
    zone: {
      name: string
      price: number | any  // Decimal из Prisma
    }
    table: {
      name: string
      seats: number
    }
  }
  qrCodeDataUrl: string
}

export interface EmailConfig {
  host: string
  port: number
  secure: boolean
  auth: {
    user: string
    pass: string
  }
}

class EmailService {
  private transporter: nodemailer.Transporter
  private config: EmailConfig

  constructor(config: EmailConfig) {
    this.config = config
    this.transporter = nodemailer.createTransport(config)
  }

  /**
   * Отправляет билет на email клиенту
   */
  async sendTicketToCustomer(emailData: TicketEmailData): Promise<boolean> {
    try {
      const { ticket, qrCodeDataUrl } = emailData
      
      const mailOptions = {
        from: this.config.auth.user,
        to: ticket.customerEmail,
        subject: `Ваш билет на мероприятие "${ticket.event.title}"`,
        html: this.generateTicketHtml(ticket, qrCodeDataUrl),
        attachments: [
          {
            filename: `Билет_${ticket.ticketNumber}.png`,
            content: qrCodeDataUrl.split(',')[1], // Убираем data:image/png;base64,
            encoding: 'base64' as const
          }
        ]
      }

      await this.transporter.sendMail(mailOptions)
      console.log(`Email с билетом отправлен на ${ticket.customerEmail}`)
      return true
    } catch (error) {
      console.error('Ошибка отправки email клиенту:', error)
      return false
    }
  }

  /**
   * Генерирует HTML для билета
   */
  private generateTicketHtml(ticket: TicketEmailData['ticket'], qrCodeDataUrl: string): string {
    const formatDate = (date: Date) => {
      return new Intl.DateTimeFormat('ru-RU', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }).format(new Date(date))
    }

    const formatTime = (time: string) => {
      return time
    }

    return `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Ваш билет в развлекательный комплекс "Француз"</title>
    <style>
        body {
            font-family: 'Helvetica Neue', Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 650px;
            margin: 0 auto;
            padding: 20px;
            background-color: #f9f9f9;
        }
        .header {
            text-align: center;
            margin-bottom: 30px;
            padding-bottom: 20px;
            border-bottom: 2px solid #e1e1e1;
        }
        .logo {
            color: #d4af37;
            font-size: 24px;
            font-weight: bold;
            margin-bottom: 10px;
        }
        .ticket {
            background: white;
            padding: 30px;
            border-radius: 15px;
            margin-bottom: 25px;
            box-shadow: 0 4px 20px rgba(0,0,0,0.1);
            position: relative;
            overflow: hidden;
        }
        .ticket::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 5px;
            height: 100%;
            background: linear-gradient(to bottom, #d4af37, #f5d062);
        }
        .ticket-content {
            margin-left: 20px;
        }
        .ticket-header {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            margin-bottom: 20px;
        }
        .ticket-info {
            flex: 1;
        }
        .ticket-number {
            font-size: 24px;
            font-weight: bold;
            color: #2c3e50;
            margin-bottom: 10px;
        }
        .event-title {
            font-size: 20px;
            color: #34495e;
            margin-bottom: 15px;
        }
        .ticket-details {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 15px;
            margin-bottom: 20px;
        }
        .detail-item {
            display: flex;
            flex-direction: column;
        }
        .detail-label {
            font-size: 12px;
            color: #7f8c8d;
            text-transform: uppercase;
            margin-bottom: 5px;
        }
        .detail-value {
            font-size: 16px;
            font-weight: 600;
            color: #2c3e50;
        }
        .qr-section {
            text-align: center;
            flex: 0 0 150px;
        }
        .qr-code {
            width: 120px;
            height: 120px;
            border: 2px solid #e1e1e1;
            border-radius: 10px;
            margin-bottom: 10px;
        }
        .qr-text {
            font-size: 12px;
            color: #7f8c8d;
        }
        .customer-info {
            margin-top: 30px;
            padding: 20px;
            background: #f8f9fa;
            border-radius: 10px;
        }
        .footer {
            text-align: center;
            margin-top: 40px;
            color: #777;
            font-size: 14px;
            padding-top: 20px;
            border-top: 1px solid #eee;
        }
        .status-badge {
            display: inline-block;
            padding: 8px 16px;
            background-color: #27ae60;
            color: white;
            border-radius: 20px;
            font-size: 14px;
            font-weight: bold;
            margin-bottom: 20px;
        }
    </style>
</head>
<body>
    <div class="header">
        <div class="logo">Развлекательный комплекс "Француз"</div>
        <h1 style="margin: 0; font-size: 22px;">Ваш билет</h1>
        <p style="margin-top: 5px; color: #777;">Благодарим за покупку!</p>
    </div>
    
    <div class="ticket">
        <div class="ticket-content">
            <div class="status-badge">Оплачено</div>
            
            <div class="ticket-header">
                <div class="ticket-info">
                    <div class="ticket-number">Билет №${ticket.ticketNumber}</div>
                    <div class="event-title">${ticket.event.title}</div>
                </div>
                <div class="qr-section">
                    <img src="${qrCodeDataUrl}" 
                        alt="QR Code" 
                        class="qr-code">
                    <div class="qr-text">Предъявите QR-код на входе</div>
                </div>
            </div>
            
            <div class="ticket-details">
                <div class="detail-item">
                    <div class="detail-label">Дата</div>
                    <div class="detail-value">${formatDate(ticket.event.date)}</div>
                </div>
                <div class="detail-item">
                    <div class="detail-label">Время</div>
                    <div class="detail-value">${formatTime(ticket.event.time)}</div>
                </div>
                <div class="detail-item">
                    <div class="detail-label">Зона</div>
                    <div class="detail-value">${ticket.zone.name}</div>
                </div>
                <div class="detail-item">
                    <div class="detail-label">Стол</div>
                    <div class="detail-value">${ticket.table.name}</div>
                </div>
                <div class="detail-item">
                    <div class="detail-label">Мест</div>
                    <div class="detail-value">${ticket.table.seats}</div>
                </div>
                <div class="detail-item">
                    <div class="detail-label">Стоимость</div>
                    <div class="detail-value">${ticket.price} ₽</div>
                </div>
            </div>
        </div>
    </div>
    
    <div class="customer-info">
        <h3 style="margin-top: 0;">Данные покупателя</h3>
        <p><strong>Имя:</strong> ${ticket.customerName}</p>
        <p><strong>Телефон:</strong> ${ticket.customerPhone}</p>
        <p><strong>Email:</strong> ${ticket.customerEmail}</p>
    </div>
    
    <div class="footer">
        <p>Если у вас есть вопросы, ответьте на это письмо.</p>
        <p>Ждем вас в развлекательном комплексе "Француз"!</p>
        <p style="margin-top: 20px;">© ${new Date().getFullYear()} Развлекательный комплекс "Француз". Все права защищены.</p>
    </div>
</body>
</html>
    `
  }

  /**
   * Проверяет подключение к SMTP серверу
   */
  async verifyConnection(): Promise<boolean> {
    try {
      await this.transporter.verify()
      return true
    } catch (error) {
      console.error('SMTP connection verification failed:', error)
      return false
    }
  }
}

// Создаем экземпляр сервиса с конфигурацией из переменных окружения
const emailConfig: EmailConfig = {
  host: process.env.SMTP_HOST || 'smtp.beget.com',
  port: parseInt(process.env.SMTP_PORT || '465'),
  secure: process.env.SMTP_SECURE === 'true' || true,
  auth: {
    user: process.env.SMTP_USER || '',
    pass: process.env.SMTP_PASS || ''
  }
}

export const emailService = new EmailService(emailConfig)
export default emailService
