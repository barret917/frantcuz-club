import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const navItems = [
  { path: '/', label: 'Главная' },
  { path: '/billiards', label: 'Бильярд' },
  { path: '/karaoke', label: 'Караоке' },
  { path: '/disco', label: 'Диско-бар' },
  { path: '/playstation', label: 'Playstation' },
  { path: '/lounge', label: 'Лаунж зона' },
  { path: '/games', label: 'Настольные игры' },
  { path: '/booking', label: 'Бронирование' },
  { path: '/menu', label: 'Меню' },
  { path: '/events', label: 'Афиша' },
  { path: '/cards', label: 'Клубные карты' },
  { path: '/contact', label: 'Контакты' },
];

const HeaderWrap = styled.header`
  background: #222;
  position: sticky;
  top: 0;
  z-index: 100;
`;

const LogoRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 0 0.2rem 0;
`;

const Logo = styled.div`
  font-family: 'Georgia', serif;
  font-size: 2rem;
  color: #fff;
  letter-spacing: 0.15em;
  font-weight: bold;
  text-align: center;
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const Nav = styled.nav`
  max-width: 1450px;
  margin: 0 auto;
  padding: 0.5rem 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  
  @media (max-width: 768px) {
    padding: 0.5rem 1rem;
    justify-content: space-between;
  }
`;

const NavList = styled.ul<{ open: boolean }>`
  display: flex;
  gap: 1rem;
  list-style: none;
  margin: 0;
  padding: 0;
  flex-wrap: wrap;
  justify-content: center;
  
  @media (max-width: 1024px) {
    gap: 0.5rem;
  }
  
  @media (max-width: 768px) {
    display: none;
    position: fixed;
    left: 0; 
    right: 0; 
    top: 80px;
    background: #222;
    flex-direction: column;
    align-items: center;
    gap: 0;
    padding: 1rem 0;
    transform: ${({ open }) => open ? 'translateY(0)' : 'translateY(-100%)'};
    transition: transform 0.3s ease;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    max-height: calc(100vh - 80px);
    overflow-y: auto;
    
    ${({ open }) => open && `
      display: flex;
    `}
  }
`;

const NavItem = styled.li`
  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
    border-bottom: 1px solid #333;
    
    &:last-child {
      border-bottom: none;
    }
  }
`;

const NavLink = styled(Link)<{ $active: boolean }>`
  color: ${({ $active }) => $active ? '#7b61ff' : '#fff'};
  text-decoration: none;
  font-weight: 500;
  padding: 0.5rem 0.75rem;
  border-radius: 4px;
  white-space: nowrap;
  display: block;
  font-size: 0.9rem;
  
  &:hover { 
    color: #7b61ff; 
    background: #333; 
  }
  
  ${({ $active }) => $active && 'font-weight: bold;'}
  
  @media (max-width: 768px) {
    padding: 1rem 2rem;
    border-radius: 0;
    font-size: 1rem;
    
    &:hover {
      background: #333;
    }
  }
`;

const Burger = styled.button`
  display: none;
  background: none;
  border: none;
  color: #fff;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;
  
  &:hover {
    color: #7b61ff;
  }
  
  @media (max-width: 768px) { 
    display: block; 
  }
`;

export const Header: React.FC = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <HeaderWrap>
      <LogoRow>
        <Logo>FRANTSUZ</Logo>
      </LogoRow>
      <Nav>
        <NavList open={open}>
          {navItems.map(item => (
            <NavItem key={item.path}>
              <NavLink
                to={item.path}
                $active={location.pathname === item.path}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </NavLink>
            </NavItem>
          ))}
        </NavList>
        <Burger onClick={() => setOpen(o => !o)}>
          {open ? '✕' : '☰'}
        </Burger>
      </Nav>
    </HeaderWrap>
  );
}; 