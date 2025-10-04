import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CommentCreate from './comment-create';
import CommentList from './commnent-list';

export default function PostList() {
  const [posts, setPosts] = useState({});

  const fetchPosts = async () => {
    const res = await axios.get('http://localhost:4000/posts');
    setPosts(res.data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className='bg-white rounded-lg shadow-md p-6'>
      <h2 className='text-2xl font-semibold text-gray-800 mb-6'>Posts</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {Object.values(posts)
          .sort((a, b) => a.id - b.id)
          .map((post, index) => (
            <div key={post.id} className='bg-gray-50 p-4 rounded-md'>
              <div className='flex items-center justify-between mb-2'>
                <span className='text-sm font-medium text-blue-600 bg-blue-100 px-2 py-1 rounded-full'>
                  #{index + 1}
                </span>
                <span className='text-xs text-gray-500'>ID: {post.id}</span>
              </div>
              <h3 className='text-lg font-semibold text-gray-800'>
                {post.title}
              </h3>
              <CommentList postId={post.id} />
              <CommentCreate postId={post.id} />
            </div>
          ))}
      </div>
    </div>
  );
}
