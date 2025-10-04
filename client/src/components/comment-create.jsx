import React, { useState } from 'react';
import axios from 'axios';

export default function CommentCreate({ postId }) {
  const [content, setContent] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post(`http://localhost:4001/posts/${postId}/comments`, {
      content,
    });
    setContent('');
  };

  return (
    <div className='bg-white p-6 rounded-lg shadow-md border border-gray-200'>
      <form className='space-y-4' onSubmit={handleSubmit}>
        <div className='space-y-2'>
          <label
            htmlFor='comment-input'
            className='block text-sm font-medium text-gray-700'
          >
            New Comment
          </label>
          <input
            id='comment-input'
            type='text'
            placeholder='コメントを入力してください...'
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className='w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors'
          />
        </div>
        <button
          type='submit'
          className='w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
        >
          Submit
        </button>
      </form>
    </div>
  );
}
