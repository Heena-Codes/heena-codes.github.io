import axios from "axios";
import { useEffect, useState } from "react";
import { StyledH2Header, StyledH3Header } from "./styled-components/toolbar";

const MediumBlog = () => {
    const [posts, setPosts] = useState([]);
    const getPostData = () => {
      axios
        .get("https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@heena_gupta_93")
        .then((res) => {
          setPosts(res.data.items);
        })
        .catch((error) => {
          console.error("Error fetching blog posts:", error);
        });
    };
    useEffect(() => {
      getPostData();
    }, []);

    return (
      <div style={{ display: 'flex'}}>
          {posts.map((post) => (
      <div key={post['guid']} style={{ marginRight: '20px' }}>
        <StyledH3Header>{post['title']}</StyledH3Header>
        <p dangerouslySetInnerHTML={{ __html: post['content'] }} />
        {/* <a href={post['link']} target="_blank" rel="noopener noreferrer">
          Read more
        </a> */}
      </div>
    ))}
      </div>
    );
  };
  export default MediumBlog;