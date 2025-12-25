import axios from "axios";
import { Suspense, useEffect, useState } from "react";
import { StyledH2Header, StyledH3Header } from "./styled-components/toolbar";
import styled from 'styled-components';

const BlogListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  width: 100%;
`;

const BlogPostCard = styled.div`
  height: 300px;
  background-color: #ffffff;
  border: 1px solid #e0e0e0;
  border-left: 4px solid #00bcd4;
  border-radius: 4px;
  padding: 28px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  position: relative;
  background-image: 
    repeating-linear-gradient(
      transparent,
      transparent 31px,
      #e3f2fd 31px,
      #e3f2fd 32px
    );
  background-size: 100% 32px;
  background-position: 0 0;
  background-repeat: repeat-y;
  
  &:hover {
    box-shadow: 0 4px 16px rgba(0, 188, 212, 0.15);
    border-left-color: #0097a7;
    transform: translateX(4px);
  }
  
  &::before {
    content: '⚗️';
    position: absolute;
    top: 24px;
    left: -16px;
    font-size: 1.5rem;
    background: #ffffff;
    padding: 4px;
    border: 2px solid #00bcd4;
    border-radius: 50%;
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const BlogPostTitle = styled.h3`
  font-size: 1.5rem;
  color: #0277bd;
  margin-bottom: 16px;
  font-weight: 600;
  letter-spacing: 0.5px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
  line-height: 1.4;
  position: relative;
  padding-left: 20px;
  
  &::before {
    content: '🧪';
    position: absolute;
    left: 0;
    font-size: 1.2rem;
  }
`;

const BlogPostContent = styled.div`
  color: #424242;
  font-size: 0.95rem;
  line-height: 1.8;
  font-weight: 400;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
  padding-left: 20px;
  
  p {
    margin-bottom: 16px;
  }
  
  img {
    max-width: 100%;
    height: 100px;
    border: 1px solid #e0e0e0;
    border-radius: 4px;
    margin: 20px 0;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  a {
    color: #00bcd4;
    font-weight: 500;
    text-decoration: none;
    border-bottom: 1px solid #00bcd4;
    
    &:hover {
      color: #0097a7;
      border-bottom-color: #0097a7;
    }
  }
  
  code {
    background-color: #f5f5f5;
    padding: 2px 6px;
    border-radius: 3px;
    font-family: 'Monaco', 'Menlo', 'Courier New', monospace;
    font-size: 0.9em;
    color: #d32f2f;
  }
`;

const BlogPostDate = styled.div`
  font-size: 0.75rem;
  color: #616161;
  font-weight: 500;
  letter-spacing: 0.5px;
  margin-bottom: 16px;
  font-family: 'Monaco', 'Menlo', 'Courier New', monospace;
  text-transform: uppercase;
  padding-left: 20px;
  display: flex;
  align-items: center;
  gap: 8px;
  
  &::before {
    content: '📅';
    font-size: 0.9rem;
  }
`;

function Loading() {
    return (
      <div style={{ 
        padding: '60px 0', 
        textAlign: 'center',
        color: '#616161',
        fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif",
        fontSize: '14px'
      }}>
        <div style={{ 
          marginBottom: '20px', 
          fontSize: '3rem',
          animation: 'spin 2s linear infinite'
        }}>
          ⚗️
        </div>
        <div style={{ 
          color: '#0277bd',
          fontWeight: '500',
          letterSpacing: '0.5px'
        }}>
          Analyzing blog posts...
        </div>
        <style>{`
          @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    );
  }

const MediumBlog = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    
    const getPostData = () => {
      setLoading(true);
      axios
        .get("https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@heena_gupta_93")
        .then((res) => {
          setPosts(res.data.items);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching blog posts:", error);
          setLoading(false);
        });
    };
    
    useEffect(() => {
        getPostData();
    }, []);

    if (loading) {
        return <Loading />
    }

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        });
    };

    return (
      <BlogListContainer>
        {posts.map((post) => (
            <BlogPostCard key={post['guid']}>
                {post['pubDate'] && (
                    <BlogPostDate>
                        {formatDate(post['pubDate'])}
                    </BlogPostDate>
                )}
                <BlogPostTitle>
                    {post['title']}
                </BlogPostTitle>
                <BlogPostContent 
                    dangerouslySetInnerHTML={{ 
                        __html: (post['content'] as string) || ''
                    }}
                />
                {/* {post['link'] && (
                    <a 
                        href={post['link']} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '8px',
                            marginTop: '20px',
                            marginLeft: '20px',
                            padding: '10px 20px',
                            backgroundColor: '#00bcd4',
                            color: '#ffffff',
                            border: 'none',
                            borderRadius: '4px',
                            fontWeight: '500',
                            letterSpacing: '0.5px',
                            textDecoration: 'none',
                            boxShadow: '0 2px 4px rgba(0, 188, 212, 0.3)',
                            transition: 'all 0.3s ease',
                            cursor: 'pointer',
                            fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif",
                            fontSize: '0.9rem'
                        }}
                        onMouseOver={(e) => {
                            e.currentTarget.style.backgroundColor = '#0097a7';
                            e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 188, 212, 0.4)';
                            e.currentTarget.style.transform = 'translateY(-2px)';
                        }}
                        onMouseOut={(e) => {
                            e.currentTarget.style.backgroundColor = '#00bcd4';
                            e.currentTarget.style.boxShadow = '0 2px 4px rgba(0, 188, 212, 0.3)';
                            e.currentTarget.style.transform = 'translateY(0)';
                        }}
                    >
                        <span>🔬</span>
                        Read Full Article
                        <span>→</span>
                    </a>
                )} */}
            </BlogPostCard>
        ))}
      </BlogListContainer>
    );
  };
  export default MediumBlog;