import React from 'react'
import { StyledFooter, FooterText, FooterLinks, FooterLink } from './styled-components/footer'

export const CopyrightFooter = () => {
    const currentYear = new Date().getFullYear();
    
    return (
        <StyledFooter>
            <FooterText>
                © {currentYear} Heena Gupta • Still scrolling? Let's connect!
            </FooterText>
            <FooterLinks>
                <FooterLink href="https://www.linkedin.com/in/heena-gupta-a183ba99/" target="_blank" rel="noopener noreferrer">
                    LinkedIn
                </FooterLink>
                <FooterLink href="https://github.com/Heena-Codes" target="_blank" rel="noopener noreferrer">
                    GitHub
                </FooterLink>
                <FooterLink href="https://medium.com/@heena_gupta_93" target="_blank" rel="noopener noreferrer">
                    Medium
                </FooterLink>
                <FooterLink href="mailto:heenamahour984@gmail.com">
                    Contact
                </FooterLink>
            </FooterLinks>
        </StyledFooter>
    );
}