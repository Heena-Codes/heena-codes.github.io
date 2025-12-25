import axios from "axios";
import { Suspense, useEffect, useState } from "react";
import { StyledH2Header, StyledH3Header } from "./styled-components/toolbar";

function Loading() {
    return <h2>🌀 Thinking...</h2>;
  }

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

    // if (!posts) {
    //     return <Loading />
    // }

    return (
      <div style={{ display: 'flex'}}>
        {posts.map((post) => (
                    <Suspense fallback={<Loading />}>

             <div key={post['guid']} style={{ marginRight: '20px' }}>
                <StyledH3Header>{post['title']}</StyledH3Header>
             <p dangerouslySetInnerHTML={{ __html: post['content'] }} />
            </div>
            </Suspense>

         ))}

      </div>
    );
  };
  export default MediumBlog;