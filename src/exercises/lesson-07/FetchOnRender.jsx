import { useState, useEffect } from 'react';
import './Lesson07Styles.css';

import { getPosts } from './api.js';

export default function FetchOnRender() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState('');
  const [isDataLoading, setIsDataLoading] = useState(true);

  useEffect(() => {
    // flag to control the effect of double mount (Strict mode)
    // each run sets it to false
    // when cleanup runs (a dependency changes or strict's mode test), it sets ignore to true so it prevents out-of-date data updating state
    let ignore = false;
    (async function fetchData() {
      try {
        const data = await getPosts();
        if (!ignore) {
          setPosts(data);
        }
      } catch (error) {
        if (!ignore) {
          setError("Couldn't load the posts. Please try again later.");
        }
        console.error(error);
      } finally {
        if (!ignore) {
          setIsDataLoading(false);
        }
      }
    })();

    return () => {
      console.log('Cleanup Performed');
      ignore = true;
    };
  }, []);

  return (
    <div className="root">
      <h1 className="heading">Fetch list of posts on render</h1>
      {isDataLoading && <p>Loading posts...</p>}
      {error && <div role="alert">{error}</div>}
      <div className="content">
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
