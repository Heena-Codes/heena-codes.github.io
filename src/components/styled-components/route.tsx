import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(Link)`
    top: 8px;
    right: 6px;
    padding: 8px 12px;
    color: rgb(76, 106, 127);
    font-size: 13px;
    /* font-weight: bold; */
    line-height: 1.35;
    border-radius: 3px;
    text-decoration: none;
    transition: all 0.3s ease;
    :selected {
     font-weight: bold;
    }
`

export const StyledNavLink = styled(NavLink)`
    top: 8px;
    right: 6px;
    padding: 8px 16px 8px 12px;
    color: #1a1a1a;
    font-size: 15px;
    line-height: 1.5;
    border-radius: 3px;
    text-decoration: none;
    transition: all 0.3s ease;
    font-family: 'Georgia', 'Times New Roman', serif;
    font-weight: 500;
    opacity: 0.8;
    position: relative;
    display: inline-flex;
    align-items: center;
    gap: 6px;
    
    &:hover {
        opacity: 1;
    }
    
    &.active {
        opacity: 1;
        font-weight: 600;
        border-bottom: 2px solid #1a1a1a;
    }
    
    @media (max-width: 768px) {
        font-size: 14px;
        padding: 6px 14px 6px 10px;
    }
`

export const NewBadge = styled.span`
  background: #ff3333;
  color: #ffffff;
  font-size: 0.65rem;
  font-weight: 800;
  padding: 3px 6px;
  border-radius: 4px;
  text-transform: uppercase;
  letter-spacing: 0.8px;
  font-family: 'Arial', 'Helvetica', sans-serif;
  animation: pulse 2s ease-in-out infinite;
  box-shadow: 0 2px 4px rgba(255, 51, 51, 0.3);
  line-height: 1;
  white-space: nowrap;
  
  @keyframes pulse {
    0%, 100% {
      opacity: 1;
      transform: scale(1);
      box-shadow: 0 2px 4px rgba(255, 51, 51, 0.3);
    }
    50% {
      opacity: 0.9;
      transform: scale(1.08);
      box-shadow: 0 2px 6px rgba(255, 51, 51, 0.4);
    }
  }
  
  @media (max-width: 768px) {
    font-size: 0.6rem;
    padding: 2px 5px;
    letter-spacing: 0.6px;
  }
`

export const StyledImageLink = styled(Link)`
color: #FEED73;
    text-decoration: none;
`