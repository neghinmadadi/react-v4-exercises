import './Lesson07Styles.css';

import { getSinglePost } from './api.js';
import { useState } from 'react';

export default function FetchOnClick() {
  const [post, setPost] = useState(null);
  const [error, setError] = useState('');
  const [isDataLoading, setIsDataLoading] = useState(false);

  async function handleGetData() {
    setError('');
    setIsDataLoading(true);

    try {
      const data = await getSinglePost(1);
      // console.log("try data: ", data);
      setPost(data);
    } catch (error) {
      setError("Couldn't load the post. Please try again later.");
      console.error(error);
    } finally {
      setIsDataLoading(false);
    }
  }

  return (
    <div className="root">
      <h1 className="heading">Fetch single post on click</h1>
      {isDataLoading && <p>Loading post...</p>}
      {error && <div role="alert">{error}</div>}
      <button type="button" onClick={handleGetData} disabled={isDataLoading}>
        Get post
      </button>
      <div className="content">
        {post && (
          <>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </>
        )}
      </div>
    </div>
  );
}
