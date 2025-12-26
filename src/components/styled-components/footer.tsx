import styled from 'styled-components';

export const StyledFooter = styled.footer`
    color: #666;
    background-color: #ffffff;
    font-size: 11px;
    line-height: 1.4;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 16px 20px 12px 20px;
    margin-top: 24px;
    font-weight: 400;
    letter-spacing: 0.3px;
    border-top: 1px solid #e0e0e0;
    font-family: 'Monaco', 'Menlo', 'Courier New', monospace;
    opacity: 0.7;
    width: 100%;
    box-sizing: border-box;
    
    @media (max-width: 768px) {
        padding: 14px 16px 10px 16px;
        margin-top: 20px;
        font-size: 10px;
    }
    
    @media (max-width: 480px) {
        padding: 12px 12px 8px 12px;
        margin-top: 16px;
        font-size: 9px;
    }
`;

export const FooterText = styled.div`
    margin-bottom: 2px;
`;

export const FooterLinks = styled.div`
    display: flex;
    gap: 10px;
    margin-top: 2px;
    flex-wrap: wrap;
    justify-content: center;
    
    @media (max-width: 480px) {
        gap: 6px;
    }
`;

export const FooterLink = styled.a`
    color: #666;
    text-decoration: none;
    transition: all 0.2s ease;
    
    &:hover {
        color: #1a1a1a;
        text-decoration: underline;
    }
`;