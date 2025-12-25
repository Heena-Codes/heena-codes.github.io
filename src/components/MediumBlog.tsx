import axios from "axios";
import { useEffect, useState } from "react";
import { 
  NewspaperColumnLayout,
  NewspaperCard,
  NewspaperTitle,
  NewspaperBlogContent,
  NewspaperDate,
  NewspaperLoading
} from "./styled-components/newspaper";

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
        return <NewspaperLoading />
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
      <NewspaperColumnLayout>
        {posts.map((post) => (
            <NewspaperCard key={post['guid']}>
                {post['pubDate'] && (
                    <NewspaperDate>
                        {formatDate(post['pubDate'])}
                    </NewspaperDate>
                )}
                <NewspaperTitle>
                    {post['title']}
                </NewspaperTitle>
                <NewspaperBlogContent 
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
            </NewspaperCard>
        ))}
      </NewspaperColumnLayout>
    );
  };
  export default MediumBlog;