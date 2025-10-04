import React, { useState } from 'react';
import axios from 'axios';

export default function PostCreate() {
  const [title, setTitle] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:4000/posts', { title });
    setTitle('');
  };

  return (
    <div className='bg-white rounded-lg shadow-md p-6'>
      <h2 className='text-2xl font-semibold text-gray-800 mb-6'>
        新しい投稿を作成
      </h2>
      <form className='space-y-4' onSubmit={handleSubmit}>
        <div className='form-group'>
          <label className='block text-sm font-medium text-gray-700 mb-2'>
            タイトル
          </label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className='w-96 px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
            placeholder='投稿のタイトルを入力してください'
          />
        </div>
        <button
          type='submit'
          className='bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200'
        >
          投稿する
        </button>
      </form>
    </div>
  );
}
