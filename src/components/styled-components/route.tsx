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
    color: #666;
    font-size: 13px;
    line-height: 1.35;
    border-radius: 3px;
    text-decoration: none;
    transition: all 0.3s ease;
    font-family: 'Monaco', 'Menlo', 'Courier New', monospace;
    font-weight: 400;
    
    &:hover {
        color: #1a1a1a;
    }
    
    &.active {
        color: #1a1a1a;
        font-weight: 600;
        border-bottom: 2px solid #0077B5;
    }
`

export const StyledImageLink = styled(Link)`
color: #FEED73;
    text-decoration: none;
`