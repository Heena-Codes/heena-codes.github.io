import styled from 'styled-components';

// Common newspaper-themed column layout
export const NewspaperColumnLayout = styled.div`
  column-count: 1;
  column-gap: 32px;
  column-rule: 2px solid #d0d0d0;
  width: 100%;
  
  @media (min-width: 768px) {
    column-count: 2;
  }
  
  @media (min-width: 1024px) {
    column-count: 3;
  }
  
  @media (min-width: 1440px) {
    column-count: 4;
  }
`;

// Common newspaper-themed card
export const NewspaperCard = styled.div`
  break-inside: avoid;
  page-break-inside: avoid;
  background-color: #fefefe;
  border: none;
  border-bottom: 2px solid #000;
  border-radius: 0;
  padding: 24px 0;
  margin-bottom: 32px;
  transition: all 0.2s ease;
  position: relative;
  background-color: #ffffff;
  
  &:hover {
    background-color: #fafafa;
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: -16px;
    left: 0;
    right: 0;
    height: 1px;
    background: repeating-linear-gradient(
      to right,
      #000 0px,
      #000 8px,
      transparent 8px,
      transparent 16px
    );
  }
`;

// Common newspaper-themed date
export const NewspaperDate = styled.div`
  font-size: 0.7rem;
  color: #666;
  font-weight: 400;
  letter-spacing: 1px;
  margin-bottom: 12px;
  font-family: 'Courier New', monospace;
  text-transform: uppercase;
  border-bottom: 1px solid #ccc;
  padding-bottom: 8px;
  display: inline-block;
`;

// Common newspaper-themed title
export const NewspaperTitle = styled.h3`
  font-size: 1.4rem;
  color: #000;
  margin-bottom: 16px;
  font-weight: 700;
  letter-spacing: -0.5px;
  font-family: 'Georgia', 'Times New Roman', serif;
  line-height: 1.3;
  text-transform: uppercase;
  border-top: 3px double #000;
  padding-top: 12px;
  margin-top: 0;
`;

// Base content styles for newspaper theme
export const NewspaperContent = styled.div`
  color: #1a1a1a;
  font-size: 0.9rem;
  line-height: 1.7;
  font-weight: 400;
  font-family: 'Georgia', 'Times New Roman', serif;
  text-align: justify;
  hyphens: auto;
  
  a {
    color: #000;
    font-weight: 600;
    text-decoration: underline;
    
    &:hover {
      text-decoration: none;
      background-color: #ffff00;
    }
  }
  
  code {
    background-color: #f0f0f0;
    padding: 2px 4px;
    border: 1px solid #ccc;
    font-family: 'Courier New', monospace;
    font-size: 0.85em;
    color: #000;
  }
  
  h1, h2, h3, h4, h5, h6 {
    font-family: 'Georgia', 'Times New Roman', serif;
    font-weight: 700;
    margin: 16px 0 8px 0;
    color: #000;
  }
  
  img {
    max-width: 100%;
    height: auto;
    border: 2px solid #000;
    margin: 16px 0;
    display: block;
    box-shadow: none;
  }
`;

// Content variant for blog posts with paragraph styling
export const NewspaperBlogContent = styled(NewspaperContent)`
  p {
    margin-bottom: 12px;
    text-indent: 1.5em;
    
    &:first-child {
      text-indent: 0;
      font-weight: 600;
      
      &::first-letter {
        font-size: 3em;
        line-height: 1;
        float: left;
        padding-right: 4px;
        padding-top: 4px;
        font-family: 'Georgia', serif;
      }
    }
  }
`;

// Content variant for simple descriptions with drop cap
export const NewspaperDescription = styled(NewspaperContent)`
  margin-bottom: 16px;
  
  &::first-letter {
    font-size: 3em;
    line-height: 1;
    float: left;
    padding-right: 4px;
    padding-top: 4px;
    font-family: 'Georgia', serif;
    font-weight: 600;
  }
`;

// Common loading component for newspaper theme
export const NewspaperLoading = () => {
  return (
    <div style={{ 
      padding: '60px 0', 
      textAlign: 'center',
      color: '#1a1a1a',
      fontFamily: "'Georgia', 'Times New Roman', serif",
      fontSize: '16px'
    }}>
      <div style={{ 
        marginBottom: '20px', 
        fontSize: '2.5rem'
      }}>
        📰
      </div>
      <div style={{ 
        color: '#000',
        fontWeight: '600',
        letterSpacing: '1px',
        textTransform: 'uppercase',
        borderTop: '3px double #000',
        borderBottom: '3px double #000',
        padding: '12px 0',
        display: 'inline-block'
      }}>
        Loading Articles...
      </div>
    </div>
  );
};

// Common newspaper link style
export const NewspaperLink = styled.a`
  color: #000;
  font-weight: 600;
  text-decoration: underline;
  font-family: 'Georgia', 'Times New Roman', serif;
  font-size: 0.85rem;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  
  &:hover {
    text-decoration: none;
    background-color: #ffff00;
  }
  
  &::after {
    content: ' →';
    font-weight: 700;
  }
`;

// Source/publication tag
export const NewspaperSource = styled.div`
  font-size: 0.7rem;
  color: #c00;
  font-weight: 700;
  letter-spacing: 1.5px;
  margin-bottom: 8px;
  font-family: 'Courier New', monospace;
  text-transform: uppercase;
`;

