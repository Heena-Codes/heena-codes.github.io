import React, { useState } from 'react';
import {
  ContributionsContainer,
  ContributionSection,
  SectionContent,
  SectionTitle,
  SectionTitleLink,
  ContributionCard,
  ContributionTitle,
  ContributionMeta,
  ContributionDescription,
  CompaniesList,
  CompanyTag,
  ImpactStatement,
  HorizontalTimelineContainer,
  TimelineEventWrapper,
  TimelineYearLabel,
  TimelineEventCard,
  TimelineEventTitle,
  TimelineEventMeta,
  TimelineEventDescription,
  TypeTag,
  TimelineYearGroup,
  SkillTag,
  SkillTagsContainer,
  CompanyLogo,
  CompanyLogoFallback,
  MediaContainer,
  MediaImage,
  MediaVideo,
  MediaIframe
} from './styled-components/contributions';

interface Contribution {
  title: string;
  year?: string;
  location?: string;
  description: string;
  type?: 'open-source' | 'speaking' | 'mentoring' | 'work';
  link?: string | string[];
  videoUrl?: string;
}

interface TimelineContribution extends Contribution {
  year: string;
}

export const Contributions = () => {
  const [imageErrors, setImageErrors] = useState<{[key: string]: boolean}>({});

  const handleImageError = (companyName: string) => {
    setImageErrors(prev => ({ ...prev, [companyName]: true }));
  };

  // Helper function to detect media type from URL
  const getMediaType = (url?: string): 'image' | 'video' | 'youtube' | 'vimeo' | null => {
    if (!url) return null;
    
    const urlLower = url.toLowerCase();
    
    // Check for YouTube
    if (urlLower.includes('youtube.com') || urlLower.includes('youtu.be')) {
      return 'youtube';
    }
    
    // Check for Vimeo
    if (urlLower.includes('vimeo.com')) {
      return 'vimeo';
    }
    
    // Check for image extensions
    if (/\.(jpg|jpeg|png|gif|webp|svg|bmp)(\?|$)/i.test(urlLower)) {
      return 'image';
    }
    
    // Check for video extensions
    if (/\.(mp4|webm|ogg|mov)(\?|$)/i.test(urlLower)) {
      return 'video';
    }
    
    return null;
  };

  // Helper function to get YouTube video ID
  const getYouTubeId = (url: string): string | null => {
    const match = url.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/);
    return match ? match[1] : null;
  };

  // Helper function to get Vimeo video ID
  const getVimeoId = (url: string): string | null => {
    const match = url.match(/vimeo\.com\/(?:channels\/(?:\w+\/)?|groups\/([^\/]*)\/videos\/|album\/(\d+)\/video\/|)(\d+)(?:$|\/|\?)/);
    return match ? match[3] : null;
  };

  // Helper function to group contributions by year
  const groupByYear = (contributions: TimelineContribution[]) => {
    const grouped: { [year: string]: TimelineContribution[] } = {};
    contributions.forEach(contribution => {
      if (!grouped[contribution.year]) {
        grouped[contribution.year] = [];
      }
      grouped[contribution.year].push(contribution);
    });
    return grouped;
  };

  // Helper function to get color for skills
  const getSkillColor = (skill: string): string => {
    const skillLower = skill.trim().toLowerCase();
    
    // Programming languages
    if (skillLower.includes('javascript') || skillLower.includes('js')) return '#f7df1e22';
    if (skillLower.includes('python')) return '#3776ab22';
    if (skillLower.includes('php')) return '#777bb422';
    
    // Frontend frameworks/libraries
    if (skillLower.includes('react')) return '#61dafb22';
    if (skillLower.includes('redux')) return '#764abc22';
    if (skillLower.includes('next')) return '#00000011';
    if (skillLower.includes('d3')) return '#f9a03c22';
    
    // Backend/Node
    if (skillLower.includes('node')) return '#68a06322';
    
    // Concepts/Skills
    if (skillLower.includes('architecture')) return '#e3f2fd';
    if (skillLower.includes('leadership')) return '#fce4ec';
    if (skillLower.includes('performance')) return '#fff3e0';
    if (skillLower.includes('pwa')) return '#f3e5f5';
    if (skillLower.includes('operational')) return '#e8f5e9';
    if (skillLower.includes('visualization')) return '#fce4ec';
    
    // Default
    return '#f5f5f5';
  };

  const openSourceContributions: TimelineContribution[] = [
    {
      title: "Season of KDE Student Developer",
      year: "2012",
      description: "Learned globally adopted engineering best practices through community collaboration with KDE, the open-source community behind K Desktop Environment related projects.",
      type: 'open-source',
      link: 'https://heenamahour.blogspot.com/search/label/pairs'
    },
    {
      title: "Google Summer of Code Student Developer",
      year: "2013",
      description: "Contributed to the KDE Plasma team and played a key role in revamping plasmoid applications.",
      type: 'open-source',
      link: 'https://heenamahour.blogspot.com/search/label/gsoc'
    },
    {
      title: "Google Code-In Mentor",
      year: "2013",
      description: "Mentored new contributors to strengthen the open-source community.",
      type: 'mentoring',
      link: 'https://heenamahour.blogspot.com/search/label/gci'
    },
    {
      title: "Co-Administrator & Mentor",
      year: "2014",
      description: "Served as co-administrator and mentor for Season of KDE and Google Code-In programs.",
      type: 'mentoring',
      link: 'https://heenamahour.blogspot.com/search/label/gci'
    },
    // {
    //   title: "FOSSASIA 2015 Presentation",
    //   year: "2015",
    //   location: "Singapore",
    //   description: "Presented KDE Plasma projects at FOSSASIA 2015.",
    //   type: 'speaking'
    // },
    {
      title: "Google Open Source Blog Feature",
      year: "2015",
      description: "Open-source contributions featured on the Google Open Source Blog.",
      type: 'open-source',
      link: 'https://opensource.googleblog.com/2015/05/google-code-in-2014-wrap-up-with-kde.html'
    },
    {
      title: "Learn IT, Girl",
      year: "2015",
      description: "Mentored aspiring female developers, encouraging contributions to open-source communities such as KDE.",
      type: 'mentoring'
    }
  ];

  const workExperience = [
    { name: "Indus Valley Partners", logoUrl: "https://t1.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://indusvalleypartners.com&size=128", fallbackIcon: "📊", color: "#6C5CE7", year: "2015-2018", description: "Worked on portfolio management and storytelling, hedge fund based dashboards on Web", skills: 'javascript, node.js, d3.js, python, data visualization' },
    { name: "Shipsy", logoUrl: "https://www.google.com/s2/favicons?domain=shipsy.io&sz=128", fallbackIcon: "🚚", color: "#FF6B35", year: "2018-2019", description: "Worked on Shipsy's core logistics platform, including order management, warehouse operations, and delivery tracking.", skills: 'javascript, react, next.js, redux' },
    { name: "Zomato", logoUrl: "https://www.google.com/s2/favicons?domain=zomato.com&sz=128", fallbackIcon: "🍽️", color: "#E23744", year: "2019-2020", description: "Worked on Zomato's catalog management and Lead frontend architecture of Catalogue projects: Menu tool, Meals for one, Grocery menu tool, Infinity dinning & Contactless dining menu.", skills: 'react, redux, php, architecture' },
    { name: "Expedia", logoUrl: "https://www.google.com/s2/favicons?domain=expedia.com&sz=128", fallbackIcon: "✈️", color: "#FFD900", year: "2020-present", description: "Leading Price tracking and predictions across web, iOS, and Android", skills: 'people leadership, architecture, performance optimization, PWA development, operational excellence, tech leadership'}
  ];

  const speakingEngagements: Contribution[] = [
    {
      title: "Search Speed: Making Expedia Flights Faster",
      year: "2024",
      location: "JSNation 2024 (Amsterdam) & React Summit US 2024",
      description: "Presented on optimizing flight search performance and participated in panel discussions on growth paths for frontend developers.",
      type: 'speaking'
      // link: 'https://player.vimeo.com/video/951551807'
    },
    {
      title: "Portfolio Management through Storytelling",
      year: "2017",
      location: "Hong Kong Open Source Conference",
      description: "Presented on narrative visualizations with advanced filtering for portfolio management.",
      type: 'speaking'
    },
    {
      title: "Poster Presentation",
      year: "2017",
      location: "Grace Hopper Conference India",
      description: "Shared related work on portfolio management through storytelling.",
      type: 'speaking'
      // link: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjCboEoyE-3BMDBsi2EgtT-aWGJpagUqx9DLI9TADGwNUXNYIlwOsFEt8TFelMMRmIVvFg-N4IXHGI5_eqnwESkLzZVvX90tfdRi-39k8FQm2iu0vislx2QKE7n9PxjzxPjsL51v9ciIPE/s320/IMAG0213.jpg'
    }
  ];

  const impactStatement = "Through her engineering leadership, open-source contributions, and consistent mentorship, Heena is creating meaningful impact in technology while actively supporting diversity, inclusion, and the growth of the next generation of engineers.";

  const groupedContributions = groupByYear(openSourceContributions);
  const years = Object.keys(groupedContributions).sort();

  return (
    <ContributionsContainer>
      <ContributionSection>
        <SectionTitle>
          Open Source & Community Contributions
          <SectionTitleLink href="/contributions" aria-label="View more contributions">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3m-2 16H5V5h7V3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7h-2v7z"/>
            </svg>
          </SectionTitleLink>
        </SectionTitle>
        <HorizontalTimelineContainer>
          {years.map((year) => (
            <TimelineYearGroup key={year}>
              <TimelineYearLabel>{year}</TimelineYearLabel>
              {groupedContributions[year].map((contribution, index) => {
                const contributionLink = Array.isArray(contribution.link) ? contribution.link[0] : contribution.link;
                return (
                  <TimelineEventCard 
                    key={index} 
                    $isClickable={!!contributionLink}
                    as={contributionLink ? 'a' : 'div'}
                    href={contributionLink}
                    target={contributionLink ? '_blank' : undefined}
                    rel={contributionLink ? 'noopener noreferrer' : undefined}
                  >
                    <TimelineEventTitle>{contribution.title}</TimelineEventTitle>
                    {contribution.location && (
                      <TimelineEventMeta>{contribution.location}</TimelineEventMeta>
                    )}
                    <TimelineEventDescription>{contribution.description}</TimelineEventDescription>
                    <TypeTag $type={contribution.type}>{contribution.type?.replace('-', ' ')}</TypeTag>
                  </TimelineEventCard>
                );
              })}
            </TimelineYearGroup>
          ))}
        </HorizontalTimelineContainer>
      </ContributionSection>
      <ContributionSection>
        <SectionTitle>
          Professional Experience
          <SectionTitleLink href="https://www.linkedin.com/in/heena-gupta-a183ba99/" target="_blank" rel="noopener noreferrer" aria-label="View LinkedIn profile">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </SectionTitleLink>
        </SectionTitle>
        <HorizontalTimelineContainer>
          {workExperience.map((company, index) => (
            <TimelineYearGroup key={index}>
              <TimelineYearLabel>{company.year}</TimelineYearLabel>
              <TimelineEventCard>
                <TimelineEventTitle>
                  {imageErrors[company.name] ? (
                    <CompanyLogoFallback>{(company as any).fallbackIcon}</CompanyLogoFallback>
                  ) : (
                    <CompanyLogo 
                      src={(company as any).logoUrl} 
                      alt={`${company.name} logo`}
                      onError={() => handleImageError(company.name)}
                    />
                  )}
                  {company.name}
                </TimelineEventTitle>
                <TimelineEventDescription>{company.description}</TimelineEventDescription>
                <SkillTagsContainer>
                  {((company as any).skills || (company as any).skill)?.split(',').map((skill: string, idx: number) => (
                    <SkillTag key={idx} $color={getSkillColor(skill)}>
                      {skill.trim()}
                    </SkillTag>
                  ))}
                </SkillTagsContainer>
              </TimelineEventCard>
            </TimelineYearGroup>
          ))}
        </HorizontalTimelineContainer>
      </ContributionSection>
      <ContributionSection>
        <SectionTitle>Featured Talks</SectionTitle>
        <SectionContent>
          {speakingEngagements.map((engagement, index) => {
            const linkUrl = Array.isArray(engagement.link) ? engagement.link[0] : engagement.link;
            const videoMediaType = getMediaType(engagement.videoUrl || linkUrl);
            const displayVideoUrl = engagement.videoUrl || linkUrl;
            
            return (
              <ContributionCard key={index}>
                <ContributionTitle>{engagement.title}</ContributionTitle>
                <ContributionMeta>
                  {engagement.year} {engagement.location && `• ${engagement.location}`}
                </ContributionMeta>
                <ContributionDescription>{engagement.description}</ContributionDescription>
                
                {/* Render video/image if videoUrl is provided or link contains media */}
                {videoMediaType === 'image' && displayVideoUrl && (
                  <MediaContainer>
                    <MediaImage src={displayVideoUrl} alt={engagement.title} loading="lazy" />
                  </MediaContainer>
                )}
                
                {videoMediaType === 'video' && displayVideoUrl && (
                  <MediaContainer>
                    <MediaVideo controls preload="metadata">
                      <source src={displayVideoUrl} type="video/mp4" />
                      Your browser does not support the video tag.
                    </MediaVideo>
                  </MediaContainer>
                )}
                
                {videoMediaType === 'youtube' && displayVideoUrl && (
                  <MediaContainer>
                    <MediaIframe
                      src={`https://www.youtube.com/embed/${getYouTubeId(displayVideoUrl)}`}
                      title={engagement.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </MediaContainer>
                )}
                
                {videoMediaType === 'vimeo' && displayVideoUrl && (
                  <MediaContainer>
                    <MediaIframe
                      src={`https://player.vimeo.com/video/${getVimeoId(displayVideoUrl)}`}
                      title={engagement.title}
                      allow="autoplay; fullscreen; picture-in-picture"
                      allowFullScreen
                    />
                  </MediaContainer>
                )}
              </ContributionCard>
            );
          })}
        </SectionContent>
      </ContributionSection>



{/* 

      <ContributionSection>
        <SectionTitle>Mentoring & Education</SectionTitle>
        <SectionContent>

        </SectionContent>
      </ContributionSection> */}

      <ImpactStatement>
        {impactStatement}
      </ImpactStatement>
    </ContributionsContainer>
  );
};

