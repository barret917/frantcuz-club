import React from 'react'
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
  font-size: 4rem;
  font-weight: 800;
  text-align: center;
  margin-bottom: 3rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: ${css`fadeIn`} 0.8s ease-out;
  
  @media (max-width: 768px) {
    font-size: 3rem;
    margin-bottom: 2rem;
  }
`

const Subtitle = styled.p`
  text-align: center;
  font-size: 1.3rem;
  margin-bottom: 4rem;
  color: rgba(255, 255, 255, 0.7);
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
  animation: ${css`fadeIn`} 0.8s ease-out 0.2s both;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 3rem;
  }
`

const RulesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2.5rem;
  margin-bottom: 4rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    margin-bottom: 3rem;
  }
`

const RuleCard = styled.div`
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(20px);
  border-radius: 20px;
  padding: 2.5rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  animation: ${css`fadeIn`} 0.6s ease-out;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.4);
    border-color: #667eea;
    background: rgba(255, 255, 255, 0.05);
  }
  
  @media (max-width: 768px) {
    padding: 2rem;
  }
`

const CardTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: 600;
  color: #667eea;
  margin: 0 0 1.5rem 0;
  display: flex;
  align-items: center;
  gap: 1rem;
  
  @media (max-width: 768px) {
    font-size: 1.6rem;
    margin-bottom: 1rem;
  }
`

const CardContent = styled.div`
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
  
  p {
    margin: 0 0 1rem 0;
    font-size: 1.1rem;
    
    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }
  
  ul {
    margin: 1rem 0;
    padding-left: 1.5rem;
    
    li {
      margin-bottom: 0.8rem;
      font-size: 1.1rem;
      
      @media (max-width: 768px) {
        font-size: 1rem;
      }
    }
  }
`

const ScheduleGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
`

const ScheduleItem = styled.div`
  background: rgba(255, 255, 255, 0.05);
  padding: 1.5rem;
  border-radius: 15px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  
  h4 {
    color: #667eea;
    margin: 0 0 1rem 0;
    font-size: 1.2rem;
  }
  
  p {
    color: rgba(255, 255, 255, 0.8);
    margin: 0;
    font-size: 1rem;
  }
`

const DepositGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
`

const DepositItem = styled.div`
  background: rgba(255, 255, 255, 0.05);
  padding: 1.5rem;
  border-radius: 15px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  text-align: center;
  
  h4 {
    color: #667eea;
    margin: 0 0 1rem 0;
    font-size: 1.1rem;
  }
  
  .price {
    font-size: 1.3rem;
    font-weight: 600;
    color: #4CAF50;
    margin-bottom: 0.5rem;
  }
  
  .description {
    color: rgba(255, 255, 255, 0.7);
    font-size: 0.9rem;
  }
`

const DamageTable = styled.div`
  background: rgba(255, 255, 255, 0.03);
  border-radius: 15px;
  padding: 2rem;
  margin: 2rem 0;
  border: 1px solid rgba(255, 255, 255, 0.1);
`

const DamageItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  
  &:last-child {
    border-bottom: none;
  }
  
  .item {
    color: rgba(255, 255, 255, 0.8);
    font-size: 1rem;
    flex: 1;
  }
  
  .price {
    color: #ff6b6b;
    font-weight: 600;
    font-size: 1.1rem;
    text-align: right;
    min-width: 120px;
  }
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
    
    .price {
      text-align: left;
      min-width: auto;
    }
  }
`

const Icon = styled.span`
  font-size: 1.5rem;
  
  &.schedule {
    color: #4CAF50;
  }
  
  &.deposit {
    color: #ff9800;
  }
  
  &.rules {
    color: #ff6b6b;
  }
  
  &.damage {
    color: #9c27b0;
  }
`

export const ClubRulesPage: React.FC = () => {
  return (
    <PageContainer>
      <Main>
        <SectionContainer>
          <Title>Правила посещения РК «Frantsuz»</Title>
          <Subtitle>
            Ознакомьтесь с правилами посещения клуба для комфортного отдыха всех гостей
          </Subtitle>
          
          <RulesGrid>
            {/* График работы */}
            <RuleCard>
              <CardTitle>
                <Icon className="schedule">🕒</Icon>
                График работы
              </CardTitle>
              <CardContent>
                <ScheduleGrid>
                  <ScheduleItem>
                    <h4>Караоке</h4>
                    <p>Вс-Чт: с 20:00 до 05:00</p>
                    <p>Пт и Сб: с 18:00 до 06:00</p>
                  </ScheduleItem>
                  <ScheduleItem>
                    <h4>Бильярд</h4>
                    <p>Вс-Чт: с 14:00 до 05:00</p>
                    <p>Пт и Сб: с 14:00 до 06:00</p>
                  </ScheduleItem>
                </ScheduleGrid>
              </CardContent>
            </RuleCard>

            {/* Входные депозиты */}
            <RuleCard>
              <CardTitle>
                <Icon className="deposit">💰</Icon>
                Входные депозиты
              </CardTitle>
              <CardContent>
                <DepositGrid>
                  <DepositItem>
                    <h4>Обычные дни</h4>
                    <div className="price">1500 ₽</div>
                    <div className="description">Пн-Чт, Вс</div>
                  </DepositItem>
                  <DepositItem>
                    <h4>Выходные и праздники</h4>
                    <div className="price">2000 ₽</div>
                    <div className="description">Пт, Сб, праздники</div>
                  </DepositItem>
                </DepositGrid>
                <p><strong>⚠️ В случае неиспользования суммы депозита, денежные средства не возвращаются!</strong></p>
              </CardContent>
            </RuleCard>

            {/* Правила поведения */}
            <RuleCard>
              <CardTitle>
                <Icon className="rules">📋</Icon>
                Правила поведения
              </CardTitle>
              <CardContent>
                <p><strong>На территории караоке-клуба запрещается:</strong></p>
                <ul>
                  <li>Приносить и распивать напитки, продукты питания, приобретённые за пределами клуба</li>
                  <li>Приносить огнестрельное, холодное, травматическое, газовое оружие, а также колющие и режущие предметы</li>
                  <li>Приносить наркотические и сильнодействующие вещества, а также приспособления для их употребления</li>
                  <li>Посещать клуб с домашними животными</li>
                  <li>Курить табачные изделия (разрешается только в строго отведённых местах)</li>
                  <li>Спать (строго запрещается)</li>
                  <li>Находиться в клубе в верхней одежде</li>
                  <li>Нарушать общественный порядок, вести себя некорректно</li>
                  <li>Самостоятельно производить настройку аппаратуры</li>
                  <li>Провоцировать конфликты, хамить персоналу и гостям клуба</li>
                  <li>Приходить в клуб в спортивной и грязной одежде, и совсем без неё</li>
                </ul>
                <p><strong>Сотрудники администрации имеют право отказать в посещении клуба без объяснения причин.</strong></p>
              </CardContent>
            </RuleCard>

            {/* Возмещение убытков */}
            <RuleCard>
              <CardTitle>
                <Icon className="damage">🔧</Icon>
                Возмещение убытков
              </CardTitle>
              <CardContent>
                <DamageTable>
                  <DamageItem>
                    <div className="item">Падение микрофона</div>
                    <div className="price">1500 ₽</div>
                  </DamageItem>
                  <DamageItem>
                    <div className="item">Падение микрофона с нарушением работоспособности</div>
                    <div className="price">10000 ₽</div>
                  </DamageItem>
                  <DamageItem>
                    <div className="item">Порча телевизора 86 дюймов</div>
                    <div className="price">300000 ₽</div>
                  </DamageItem>
                  <DamageItem>
                    <div className="item">Порча телевизора 32/40 дюймов</div>
                    <div className="price">20000 ₽</div>
                  </DamageItem>
                  <DamageItem>
                    <div className="item">Порча, утеря пульта телевизора</div>
                    <div className="price">3000 ₽</div>
                  </DamageItem>
                  <DamageItem>
                    <div className="item">Порча кондиционера</div>
                    <div className="price">50000 ₽</div>
                  </DamageItem>
                  <DamageItem>
                    <div className="item">Порча пульта от кондиционера</div>
                    <div className="price">3000 ₽</div>
                  </DamageItem>
                  <DamageItem>
                    <div className="item">Порча дверного полотна</div>
                    <div className="price">10000 ₽/м²</div>
                  </DamageItem>
                  <DamageItem>
                    <div className="item">Порча дверной коробки</div>
                    <div className="price">30000 ₽</div>
                  </DamageItem>
                  <DamageItem>
                    <div className="item">Порча дверной ручки</div>
                    <div className="price">2000 ₽</div>
                  </DamageItem>
                  <DamageItem>
                    <div className="item">Порча светильника</div>
                    <div className="price">5000 ₽</div>
                  </DamageItem>
                  <DamageItem>
                    <div className="item">Порча деревянного стола</div>
                    <div className="price">10000 ₽</div>
                  </DamageItem>
                  <DamageItem>
                    <div className="item">Порча стеклянного стола</div>
                    <div className="price">40000 ₽</div>
                  </DamageItem>
                  <DamageItem>
                    <div className="item">Порча мягкой мебели (кресло)</div>
                    <div className="price">15000 ₽</div>
                  </DamageItem>
                  <DamageItem>
                    <div className="item">Порча мягкой мебели (диван)</div>
                    <div className="price">35000 ₽</div>
                  </DamageItem>
                  <DamageItem>
                    <div className="item">Порча покрытия дивана (1 место)</div>
                    <div className="price">10000 ₽</div>
                  </DamageItem>
                  <DamageItem>
                    <div className="item">Нанесение повреждений оклеенной стены</div>
                    <div className="price">10000 ₽</div>
                  </DamageItem>
                  <DamageItem>
                    <div className="item">Нанесение повреждений окрашенной стены</div>
                    <div className="price">10000 ₽</div>
                  </DamageItem>
                  <DamageItem>
                    <div className="item">Нанесение повреждений зеркального полотна большого</div>
                    <div className="price">25000 ₽</div>
                  </DamageItem>
                  <DamageItem>
                    <div className="item">Нанесение повреждений зеркального полотна малого</div>
                    <div className="price">7000 ₽</div>
                  </DamageItem>
                  <DamageItem>
                    <div className="item">Нанесение повреждений раковин</div>
                    <div className="price">12000 ₽</div>
                  </DamageItem>
                  <DamageItem>
                    <div className="item">Нанесение повреждений унитаза</div>
                    <div className="price">11000 ₽</div>
                  </DamageItem>
                  <DamageItem>
                    <div className="item">Чрезмерное загрязнение (1 место)</div>
                    <div className="price">1000 ₽</div>
                  </DamageItem>
                  <DamageItem>
                    <div className="item">Порча вешалки для одежды</div>
                    <div className="price">4000 ₽</div>
                  </DamageItem>
                  <DamageItem>
                    <div className="item">Порча отопительной батареи</div>
                    <div className="price">8000 ₽</div>
                  </DamageItem>
                  <DamageItem>
                    <div className="item">Порча скатерти</div>
                    <div className="price">2000 ₽</div>
                  </DamageItem>
                  <DamageItem>
                    <div className="item">Порча шкафчиков</div>
                    <div className="price">18000 ₽</div>
                  </DamageItem>
                  <DamageItem>
                    <div className="item">Порча проекторов</div>
                    <div className="price">50000 ₽</div>
                  </DamageItem>
                  <DamageItem>
                    <div className="item">Порча пульта управления караоке-системы</div>
                    <div className="price">20000 ₽</div>
                  </DamageItem>
                  <DamageItem>
                    <div className="item">Порча караоке системы АСТ-100</div>
                    <div className="price">200000 ₽</div>
                  </DamageItem>
                  <DamageItem>
                    <div className="item">Порча светового оборудования</div>
                    <div className="price">30000 ₽</div>
                  </DamageItem>
                  <DamageItem>
                    <div className="item">Порча звуковых колонок</div>
                    <div className="price">45000 ₽</div>
                  </DamageItem>
                  <DamageItem>
                    <div className="item">Порча гитары</div>
                    <div className="price">10000 ₽</div>
                  </DamageItem>
                  <DamageItem>
                    <div className="item">Порча рояля</div>
                    <div className="price">70000 ₽</div>
                  </DamageItem>
                  <DamageItem>
                    <div className="item">Порча стойки для микрофона</div>
                    <div className="price">5000 ₽</div>
                  </DamageItem>
                  <DamageItem>
                    <div className="item">Порча мягких подушек</div>
                    <div className="price">2000 ₽</div>
                  </DamageItem>
                  <DamageItem>
                    <div className="item">Порча микшерного пульта</div>
                    <div className="price">50000 ₽</div>
                  </DamageItem>
                </DamageTable>
              </CardContent>
            </RuleCard>
          </RulesGrid>
        </SectionContainer>
      </Main>
    </PageContainer>
  )
} 