import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';

export default function CommentList({ postId }) {
  const [comments, setComments] = useState([]);

  const fetchComments = useCallback(async () => {
    const res = await axios.get(
      `http://localhost:4001/posts/${postId}/comments`
    );
    return res.data;
  }, [postId]);

  useEffect(() => {
    fetchComments().then((comments) => {
      setComments(comments);
    });
  }, [fetchComments]);

  return (
    <div>
      <h4>Comments</h4>
      {comments.map((comment) => (
        <div key={comment.id} className='border-b border-gray-200 py-2'>
          <p className='text-gray-700'>{comment.content}</p>
        </div>
      ))}
    </div>
  );
}
