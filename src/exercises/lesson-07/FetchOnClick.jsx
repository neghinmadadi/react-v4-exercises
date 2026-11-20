import './Lesson07Styles.css';

import { getSinglePost } from './api.js';
import { useState } from 'react';

export default function FetchOnClick() {
  const [post, setPost] = useState({});
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
      <button type="button" onClick={handleGetData}>
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
