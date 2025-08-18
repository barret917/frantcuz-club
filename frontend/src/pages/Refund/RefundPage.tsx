import React, { useState } from 'react'
import styled, { keyframes, css } from 'styled-components'
import { SectionContainer } from '../../shared/ui/Container'

// Анимации
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`

const slideIn = keyframes`
  from { transform: translateX(-20px); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
`

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%);
  color: #ffffff;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
`

const Main = styled.main`
  flex: 1;
  padding: 4rem 0;
  
  @media (max-width: 768px) {
    padding: 2rem 0;
  }
`

const Title = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 3rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
    margin-bottom: 2rem;
  }
`

const ReturnSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  
  @media (min-width: 1200px) {
    flex-direction: row;
    gap: 3rem;
  }
`

const FormBlock = styled.div`
  flex: 1;
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(20px);
  padding: 2.5rem;
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  animation: ${css`fadeIn`} 0.6s ease-out;
  
  @media (max-width: 768px) {
    padding: 2rem;
  }
`

const InfoBlock = styled.div`
  flex: 1;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(20px);
  padding: 2.5rem;
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  animation: ${css`slideIn`} 0.6s ease-out;
  
  @media (max-width: 768px) {
    padding: 2rem;
  }
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
`

const Label = styled.label`
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 0.5rem;
  font-size: 1rem;
`

const Input = styled.input`
  width: 100%;
  padding: 1rem;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  margin-bottom: 1.5rem;
  font-family: inherit;
  font-size: 1rem;
  box-sizing: border-box;
  background: rgba(255, 255, 255, 0.05);
  color: #ffffff;
  transition: all 0.3s ease;
  
  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
  
  &:focus {
    outline: none;
    border-color: #667eea;
    background: rgba(255, 255, 255, 0.08);
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }
`

const Textarea = styled.textarea`
  width: 100%;
  padding: 1rem;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  margin-bottom: 1.5rem;
  font-family: inherit;
  font-size: 1rem;
  box-sizing: border-box;
  background: rgba(255, 255, 255, 0.05);
  color: #ffffff;
  resize: vertical;
  min-height: 120px;
  transition: all 0.3s ease;
  
  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
  
  &:focus {
    outline: none;
    border-color: #667eea;
    background: rgba(255, 255, 255, 0.08);
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }
`

const FileInput = styled.div`
  position: relative;
  margin-bottom: 1.5rem;
  
  input[type="file"] {
    display: none;
  }
  
  label {
    display: block;
    padding: 1rem;
    border-radius: 12px;
    border: 2px dashed rgba(255, 255, 255, 0.3);
    background: rgba(255, 255, 255, 0.05);
    color: rgba(255, 255, 255, 0.7);
    text-align: center;
    cursor: pointer;
    transition: all 0.3s ease;
    
    &:hover {
      border-color: #667eea;
      background: rgba(255, 255, 255, 0.08);
      color: #ffffff;
    }
  }
`

const SubmitButton = styled.button`
  width: 100%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: #ffffff;
  padding: 1rem;
  font-size: 1.1rem;
  font-weight: 600;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 1rem;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(102, 126, 234, 0.3);
  }
  
  &:active {
    transform: translateY(0);
  }
`

const SuccessMessage = styled.div`
  color: #4CAF50;
  margin-top: 1.5rem;
  font-weight: 600;
  text-align: center;
  padding: 1rem;
  background: rgba(76, 175, 80, 0.1);
  border-radius: 12px;
  border: 1px solid rgba(76, 175, 80, 0.3);
  animation: ${css`fadeIn`} 0.5s ease-out;
`

const InfoTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: #667eea;
  margin: 0 0 1.5rem 0;
`

const InfoText = styled.p`
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
  margin-bottom: 1rem;
  font-size: 1rem;
`

const InfoList = styled.ul`
  padding-left: 1.5rem;
  margin: 1.5rem 0;
  
  li {
    color: rgba(255, 255, 255, 0.8);
    margin-bottom: 0.8rem;
    line-height: 1.5;
    font-size: 1rem;
  }
  
  ul {
    padding-left: 1.5rem;
    margin: 1rem 0;
    
    li {
      margin-bottom: 0.5rem;
      font-size: 0.95rem;
    }
  }
`

const Divider = styled.hr`
  margin: 2rem 0;
  border: none;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
`

export const RefundPage: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    
    // Сброс формы
    const form = e.target as HTMLFormElement
    form.reset()
    
    // Скрыть сообщение через 5 секунд
    setTimeout(() => {
      setIsSubmitted(false)
    }, 5000)
  }

  return (
    <PageContainer>
      <Main>
        <SectionContainer>
          <Title>Отказ от товаров и возврат средств</Title>
          
          <ReturnSection>
            {/* Форма */}
            <FormBlock>
              <Form onSubmit={handleSubmit}>
                <Label><strong>Дата заказа</strong></Label>
                <Input type="date" name="date" required />
                
                <Label><strong>Причина возврата</strong></Label>
                <Textarea 
                  name="reason" 
                  rows={4} 
                  required 
                  placeholder="Опишите, с чем связан возврат или отмена заказа"
                />
                
                <Label><strong>Номер карты для возврата</strong></Label>
                <Input 
                  type="text" 
                  name="card" 
                  required 
                  placeholder="4276••••••••5678" 
                  pattern="[0-9\s]{13,19}" 
                  inputMode="numeric"
                />
                
                <Label><strong>Прикрепите документ (чек или фото)</strong></Label>
                <FileInput>
                  <input type="file" name="file" id="fileInput" />
                  <label htmlFor="fileInput">
                    📎 Выберите файл
                  </label>
                </FileInput>
                
                <SubmitButton type="submit">Отправить</SubmitButton>
              </Form>
              
              {isSubmitted && (
                <SuccessMessage>
                  Форма успешно отправлена!
                </SuccessMessage>
              )}
            </FormBlock>

            {/* Правовая информация */}
            <InfoBlock>
              <InfoTitle>Возврат товара</InfoTitle>
              <InfoText>
                Осуществляется в соответствии со статьёй 26.1 Федерального закона «О защите прав потребителей»:
              </InfoText>
              <InfoList>
                <li>Потребитель вправе отказаться от товара до его получения, либо в течение 7 дней после передачи.</li>
                <li>Возврат возможен при сохранении товарного вида, упаковки и документа, подтверждающего покупку.</li>
                <li>Продавец обязан вернуть оплату за вычетом доставки в течение 10 календарных дней с момента получения запроса.</li>
                <li>Возврат индивидуальных товаров надлежащего качества не допускается.</li>
              </InfoList>

              <Divider />

              <InfoTitle>Отказ от услуги</InfoTitle>
              <InfoText>
                Согласно статье 32 ФЗ «О защите прав потребителей»:
              </InfoText>
              <InfoList>
                <li>Клиент вправе отказаться от услуги в любое время с компенсацией расходов, понесённых до отказа.</li>
                <li>При наличии недостатков услуги потребитель может потребовать:</li>
                <ul>
                  <li>безвозмездного устранения;</li>
                  <li>уменьшения стоимости;</li>
                  <li>возмещения расходов на устранение своими силами или через третьих лиц.</li>
                </ul>
                <li>Чек будет автоматически направлен на электронную почту после оплаты.</li>
              </InfoList>
            </InfoBlock>
          </ReturnSection>
        </SectionContainer>
      </Main>
    </PageContainer>
  )
} 