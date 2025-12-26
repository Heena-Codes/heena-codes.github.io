import styled from 'styled-components';
export const StyledHeader = styled.div`
  padding: 40px;
  color: #1a1a1a;
  font-family: 'Georgia', 'Times New Roman', serif;
  
  @media (max-width: 768px) {
    padding: 24px 20px;
  }
`;

export const StyledSpacingDiv = styled.div`
    padding: 40px;
    
    @media (max-width: 768px) {
      padding: 24px 20px;
    }
`

export const StyledH1Header = styled.h1`
font-size: 3.5rem;
letter-spacing: -1px;
line-height: 1.2;
color: #1a1a1a;
font-weight: 400;
font-family: 'Georgia', 'Times New Roman', serif;
margin-bottom: 8px;

@media (max-width: 768px) {
  font-size: 2.5rem;
}

@media (max-width: 480px) {
  font-size: 2rem;
  letter-spacing: -0.5px;
}
`
export const StyledH3Header = styled.h3`
font-size: 1.5rem;
letter-spacing: -0.51px;
margin-top: 4px;

@media (max-width: 768px) {
  font-size: 1.3rem;
}

@media (max-width: 480px) {
  font-size: 1.1rem;
}
`
export const StyledH2Header = styled.h2`
font-size: 1.2rem;
color: #1a1a1a;
letter-spacing: 0;
margin-top: 4px;
font-weight: 300;
font-family: 'Georgia', 'Times New Roman', serif;
opacity: 0.7;

@media (max-width: 768px) {
  font-size: 1.1rem;
}

@media (max-width: 480px) {
  font-size: 1rem;
}
`
export const StyledWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }
`;

export const StyledLinks = styled.div`
  display: flex;
  justify-content: end;
  font-size: 13px;
  color: #1a1a1a;
  font-family: 'Georgia', 'Times New Roman', serif;
  font-weight: 400;
  gap: 16px;
  flex-wrap: wrap;
  position: sticky;
  top: 0;
  background-color: #ffffff;
  z-index: 1000;
  padding: 16px 0;
  margin: -16px 0 16px 0;
  opacity: 0.7;
  
  :hover {
      opacity: 1;
    }
    
  @media (max-width: 768px) {
    justify-content: flex-start;
    gap: 12px;
    font-size: 12px;
    padding: 12px 0;
  }
`;

export const StyledAnchor = styled.a`
top: 8px;
right: 6px;
padding: 8px 12px;
color:rgb(76, 106, 127);
font-size: 13px;
line-height: 1.35;
border-radius: 3px;
text-decoration: none;
transition: all 0.3s ease;
`
//  background-color: #0f1113;

export const StyledImageSpan = styled.span`
    color: #1a1a1a;
    line-height: 120%;
    margin-top: 16px;`

