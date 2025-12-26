import React from 'react'
import styled from 'styled-components'

const AboutMeContainer = styled.div`
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
    color: #1a1a1a;
    line-height: 1.7;
`;

const BioText = styled.div`
    margin-bottom: 40px;
`;

const WhiteboardSection = styled.div`
    background-color: #f8f9fa;
    border: 2px solid #dee2e6;
    border-radius: 8px;
    padding: 32px;
    margin-top: 32px;
    position: relative;
    
    &::before {
        content: '📋 Open Source Projects & Code';
        position: absolute;
        top: -14px;
        left: 20px;
        background-color: #ffffff;
        padding: 0 12px;
        font-weight: 600;
        font-size: 1.1rem;
        color: #495057;
    }
    
    @media (max-width: 768px) {
        padding: 24px 16px;
        margin-top: 24px;
        
        &::before {
            font-size: 0.95rem;
            left: 12px;
        }
    }
    
    @media (max-width: 480px) {
        padding: 20px 12px;
        border-radius: 6px;
        
        &::before {
            font-size: 0.85rem;
            left: 8px;
        }
    }
`;

const DiagramContainer = styled.div`
    column-count: 1;
    column-gap: 32px;
    column-rule: 2px solid #dee2e6;
    margin-top: 20px;
    
    @media (min-width: 768px) {
        column-count: 2;
    }
    
    @media (min-width: 1200px) {
        column-count: 3;
    }
`;

const ProjectBox = styled.div`
    background-color: #ffffff;
    border: 2px solid #007bff;
    border-radius: 8px;
    padding: 20px;
    position: relative;
    box-shadow: 0 2px 8px rgba(0, 123, 255, 0.15);
    transition: all 0.3s ease;
    
    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(0, 123, 255, 0.25);
    }
    
    &::before {
        content: '◆';
        position: absolute;
        left: -12px;
        top: 50%;
        transform: translateY(-50%);
        font-size: 1.5rem;
        color: #007bff;
    }
    
    @media (max-width: 768px) {
        padding: 16px;
        
        &::before {
            font-size: 1.2rem;
            left: -10px;
        }
    }
    
    @media (max-width: 480px) {
        padding: 12px;
        border-radius: 6px;
        
        &::before {
            font-size: 1rem;
            left: -8px;
        }
    }
`;

const ReactCard = styled(ProjectBox)`
    border-color: #61dafb;
    background: linear-gradient(135deg, #ffffff 0%, #f0fcff 100%);
    
    &:hover {
        box-shadow: 0 4px 12px rgba(97, 218, 251, 0.3);
    }
    
    &::before {
        content: '⚛';
        color: #61dafb;
    }
    
    &::after {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        width: 60px;
        height: 60px;
        background: radial-gradient(circle at top right, rgba(97, 218, 251, 0.1) 0%, transparent 70%);
        border-radius: 0 8px 0 0;
        pointer-events: none;
    }
`;

const ProjectTitle = styled.h3`
    margin: 0 0 12px 0;
    color: #007bff;
    font-size: 1.2rem;
    font-weight: 700;
    display: flex;
    align-items: center;
    gap: 8px;
    
    @media (max-width: 768px) {
        font-size: 1.1rem;
        gap: 6px;
    }
    
    @media (max-width: 480px) {
        font-size: 1rem;
        flex-wrap: wrap;
    }
`;

const ReactTitle = styled(ProjectTitle)`
    color: #149eca;
`;

const ProjectDescription = styled.p`
    margin: 0 0 16px 0;
    color: #495057;
    font-size: 0.95rem;
    line-height: 1.6;
    
    @media (max-width: 768px) {
        font-size: 0.9rem;
        line-height: 1.5;
    }
    
    @media (max-width: 480px) {
        font-size: 0.85rem;
    }
`;

const LinksContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    margin-top: 12px;
    
    @media (max-width: 480px) {
        gap: 8px;
    }
`;

const ProjectLink = styled.a`
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 6px 12px;
    background-color: #e7f3ff;
    border: 1px solid #007bff;
    border-radius: 4px;
    color: #007bff;
    text-decoration: none;
    font-size: 0.85rem;
    font-weight: 500;
    transition: all 0.2s ease;
    
    &:hover {
        background-color: #007bff;
        color: #ffffff;
    }
    
    &::before {
        content: '→';
        font-weight: 700;
    }
    
    @media (max-width: 768px) {
        font-size: 0.8rem;
        padding: 5px 10px;
    }
    
    @media (max-width: 480px) {
        font-size: 0.75rem;
        padding: 4px 8px;
        gap: 4px;
    }
`;

const ReactLink = styled(ProjectLink)`
    background-color: #e6f7ff;
    border-color: #61dafb;
    color: #149eca;
    
    &:hover {
        background-color: #61dafb;
        color: #282c34;
    }
`;

const ConnectionLine = styled.div`
    display: none; // Hidden in column layout
`;

const ProjectWrapper = styled.div`
    break-inside: avoid;
    page-break-inside: avoid;
    margin-bottom: 24px;
`;

const TimelineLabel = styled.div`
    text-align: center;
    color: #6c757d;
    font-size: 0.85rem;
    font-weight: 600;
    margin: 0 0 12px 0;
    font-family: 'Courier New', monospace;
    background-color: #ffffff;
    padding: 8px 16px;
    border-radius: 20px;
    border: 2px solid #dee2e6;
    display: inline-block;
    width: 100%;
    box-sizing: border-box;
`;

const CertificationCard = styled(ProjectBox)`
    border-color: #28a745;
    background: linear-gradient(135deg, #ffffff 0%, #f0fff4 100%);
    
    &:hover {
        box-shadow: 0 4px 12px rgba(40, 167, 69, 0.3);
    }
    
    &::before {
        content: '🎓';
        color: #28a745;
    }
    
    &::after {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        width: 60px;
        height: 60px;
        background: radial-gradient(circle at top right, rgba(40, 167, 69, 0.1) 0%, transparent 70%);
        border-radius: 0 8px 0 0;
        pointer-events: none;
    }
`;

const CertificationTitle = styled(ProjectTitle)`
    color: #28a745;
`;

const CertificationLink = styled(ProjectLink)`
    background-color: #e6f9ed;
    border-color: #28a745;
    color: #28a745;
    
    &:hover {
        background-color: #28a745;
        color: #ffffff;
    }
`;

const CertificationMeta = styled.div`
    font-size: 0.85rem;
    color: #666;
    margin-bottom: 12px;
    font-family: 'Monaco', 'Menlo', 'Courier New', monospace;
    
    @media (max-width: 768px) {
        font-size: 0.8rem;
    }
    
    @media (max-width: 480px) {
        font-size: 0.75rem;
    }
`;

const CertificationBadge = styled.div`
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 4px 10px;
    background-color: #e6f9ed;
    border: 1px solid #28a745;
    border-radius: 12px;
    font-size: 0.8rem;
    color: #28a745;
    font-weight: 500;
    margin-top: 8px;
    
    @media (max-width: 768px) {
        font-size: 0.75rem;
        padding: 3px 8px;
    }
    
    @media (max-width: 480px) {
        font-size: 0.7rem;
        padding: 2px 6px;
        gap: 4px;
    }
`;

export const AboutMe = () => {
    return <AboutMeContainer>

        
        <WhiteboardSection>
            <DiagramContainer>
                <ProjectWrapper>
                    <TimelineLabel>[ 2013 - KDE GSoC ]</TimelineLabel>
                    <ProjectBox>
                        <ProjectTitle>🖥️ Porting Plasmoids to Plasma 2</ProjectTitle>
                        <ProjectDescription>
                            Ported KDE plasmoid applications from Plasma 1 to Plasma 2, reducing code maintenance effort 
                            for the KDE community. Rewrote plasmoids in QML for creating fluid UIs in a declarative way, 
                            with JavaScript/C++ handling backend implementation. Successfully completed: Trash, Window-list, 
                            Clock, and Calendar plasmoids for both Plasma 1 and Plasma 2.
                        </ProjectDescription>
                        <LinksContainer>
                            <ProjectLink href="https://community.kde.org/GSoC/2013/StatusReports#Heena" target="_blank" rel="noopener noreferrer">
                                KDE GSoC 2013 Status Report
                            </ProjectLink>
                        </LinksContainer>
                    </ProjectBox>
                </ProjectWrapper>
                
                <ProjectWrapper>
                    <TimelineLabel>[ 2015 - FOSSASIA GSoC ]</TimelineLabel>
                    <ProjectBox>
                        <ProjectTitle>🔐 Let's Chat with OTR Encryption</ProjectTitle>
                        <ProjectDescription>
                            Self-hosted online communities communication with Off-The-Record (OTR) encryption. 
                            Implemented secure messaging using Diffie-Hellman key exchange algorithm ensuring deniability 
                            and perfect forward secrecy with unique keys for each message.
                        </ProjectDescription>
                        <LinksContainer>
                            <ProjectLink href="https://github.com/fallacy321/GSoC-2015" target="_blank" rel="noopener noreferrer">
                                GSoC 2015 Project
                            </ProjectLink>
                            <ProjectLink href="https://github.com/fallacy321/lets-chat" target="_blank" rel="noopener noreferrer">
                                Let's Chat Fork
                            </ProjectLink>
                        </LinksContainer>
                    </ProjectBox>
                </ProjectWrapper>
                
                <ProjectWrapper>
                    <TimelineLabel>[ 2017 - HKOSCon ]</TimelineLabel>
                    <ProjectBox>
                        <ProjectTitle>🎤 KDE Conference Talks</ProjectTitle>
                        <ProjectDescription>
                            Presentation materials on KDE open source contributions, covering journey from Season of KDE 
                            student to Google Code-In co-administrator. Includes talks on Plasma development, plasmoid 
                            porting to Plasma 2, and data visualization in financial contexts.
                        </ProjectDescription>
                        <LinksContainer>
                            <ProjectLink href="https://github.com/fallacy321/Talks" target="_blank" rel="noopener noreferrer">
                                Conference Talks Repo
                            </ProjectLink>
                        </LinksContainer>
                    </ProjectBox>
                </ProjectWrapper>
                
                <ProjectWrapper>
                    <TimelineLabel>[ 2017 - NPM Package ]</TimelineLabel>
                    <ProjectBox>
                        <ProjectTitle>📊 crossfilterplus</ProjectTitle>
                        <ProjectDescription>
                            Config-driven wrapper over Crossfilter for simplified data manipulation. Eliminates boilerplate 
                            code by making dimension, grouping, and aggregation operations configurable. Supports standalone 
                            methods and JSON config-based approach for data filtering and transformation.
                        </ProjectDescription>
                        <LinksContainer>
                            <ProjectLink href="https://www.npmjs.com/package/crossfilterplus" target="_blank" rel="noopener noreferrer">
                                NPM Package
                            </ProjectLink>
                            <ProjectLink href="https://github.com/Crossfilterplus/crossfilterplus" target="_blank" rel="noopener noreferrer">
                                GitHub Repository
                            </ProjectLink>
                            <ProjectLink href="https://github.com/Crossfilterplus/crossfilterplus/wiki/API-reference" target="_blank" rel="noopener noreferrer">
                                API Reference
                            </ProjectLink>
                        </LinksContainer>
                    </ProjectBox>
                </ProjectWrapper>
                
                <ProjectWrapper>
                    <TimelineLabel>[ 2024 - Conference Talks ]</TimelineLabel>
                    <ReactCard>
                        <ReactTitle>⚡ Speed Search: Making Expedia Flights Faster</ReactTitle>
                        <ProjectDescription>
                            JSNation 2024 talk on optimizing flight search performance at Expedia. Covered GraphQL 
                            optimizations, micro frontends architecture, and achieving 52% reduction in page load times 
                            through horizontal/vertical query slicing and async execution strategies.
                        </ProjectDescription>
                        <LinksContainer>
                            <ReactLink href="https://gitnation.com/contents/speed-search-making-expedia-flights-faster" target="_blank" rel="noopener noreferrer">
                                JSNation Talk
                            </ReactLink>
                            <ReactLink href="https://gitnation.com/contents/search-speed-making-expedia-flights-faster" target="_blank" rel="noopener noreferrer">
                                React Summit US Talk
                            </ReactLink>
                        </LinksContainer>
                    </ReactCard>
                </ProjectWrapper>
                
                <ProjectWrapper>
                    <TimelineLabel>[ 2019 - ReactFoo Delhi ]</TimelineLabel>
                    <ReactCard>
                        <ReactTitle>⚛️ Keeping React Redux Healthy</ReactTitle>
                        <ProjectDescription>
                            Conference talk at ReactFoo Delhi 2019 covering best practices for maintaining healthy 
                            React Redux applications. Explored the what, why, and how of keeping large-scale React 
                            applications maintainable, performant, and scalable with proper Redux architecture patterns.
                        </ProjectDescription>
                        <LinksContainer>
                            <ReactLink href="https://hasgeek.com/reactfoo/2019-delhi/sub/keeping-react-redux-healthy-what-why-and-how-with-J9EvDunbDQufmJHZuLfNBX" target="_blank" rel="noopener noreferrer">
                                ReactFoo Delhi Talk
                            </ReactLink>
                        </LinksContainer>
                    </ReactCard>
                </ProjectWrapper>
                
                <ProjectWrapper>
                    <TimelineLabel>[ 2025 - Certifications ]</TimelineLabel>
                    <CertificationCard>
                        <CertificationTitle>🎓 Artificial Intelligence and Career Empowerment</CertificationTitle>
                        <CertificationMeta>University of Maryland Robert H. Smith School of Business • December 18, 2025</CertificationMeta>
                        <ProjectDescription>
                            Completed a non-credit course focused on AI applications in career development and professional 
                            empowerment. Explored how artificial intelligence is transforming career paths, skill development, 
                            and workplace dynamics in modern business environments.
                        </ProjectDescription>
                        <CertificationBadge>🏛️ University of Maryland</CertificationBadge>
                    </CertificationCard>
                </ProjectWrapper>
                
                <ProjectWrapper>
                    <TimelineLabel>[ 2025 - LinkedIn Learning ]</TimelineLabel>
                    <CertificationCard>
                        <CertificationTitle>📜 Learning the JavaScript Language</CertificationTitle>
                        <CertificationMeta>LinkedIn Learning • August 10, 2025 • 4h 7m</CertificationMeta>
                        <ProjectDescription>
                            Completed comprehensive JavaScript course covering fundamental programming concepts, syntax, 
                            and practical applications. Mastered core JavaScript topics from basic syntax to advanced 
                            technical aspects using GitHub Codespaces for hands-on practice.
                        </ProjectDescription>
                        <LinksContainer>
                            <CertificationLink href="https://www.linkedin.com/learning/certificates/d4c3c069e87dc44442723e7295a4049d33dd2ebd1c248bac02d9907203a89810" target="_blank" rel="noopener noreferrer">
                                View Certificate
                            </CertificationLink>
                        </LinksContainer>
                        <CertificationBadge>💼 LinkedIn Learning</CertificationBadge>
                    </CertificationCard>
                </ProjectWrapper>
                
                <ProjectWrapper>
                    <TimelineLabel>[ More Resources ]</TimelineLabel>
                    <ProjectBox>
                        <ProjectTitle>📝 Technical Blog</ProjectTitle>
                        <ProjectDescription>
                            Personal blog documenting open source contributions, GSoC experiences, KDE projects, 
                            conference presentations, and technical deep-dives on data visualization and encryption.
                        </ProjectDescription>
                        <LinksContainer>
                            <ProjectLink href="https://heenamahour.blogspot.com/" target="_blank" rel="noopener noreferrer">
                                Blog: To Infinity and Beyond
                            </ProjectLink>
                            <ProjectLink href="https://github.com/fallacy321" target="_blank" rel="noopener noreferrer">
                                GitHub Profile
                            </ProjectLink>
                        </LinksContainer>
                    </ProjectBox>
                </ProjectWrapper>
            </DiagramContainer>
        </WhiteboardSection>
    </AboutMeContainer>
}