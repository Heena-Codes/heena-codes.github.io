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
    padding: 8px 12px;
    color: #1a1a1a;
    font-size: 13px;
    line-height: 1.35;
    border-radius: 3px;
    text-decoration: none;
    transition: all 0.3s ease;
    font-family: 'Georgia', 'Times New Roman', serif;
    font-weight: 400;
    opacity: 0.7;
    
    &:hover {
        opacity: 1;
    }
    
    &.active {
        opacity: 1;
        font-weight: 600;
        border-bottom: 2px solid #1a1a1a;
    }
`

export const StyledImageLink = styled(Link)`
color: #FEED73;
    text-decoration: none;
`