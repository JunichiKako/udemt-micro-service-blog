import PostCreate from './components/post-create';
import PostList from './components/post-list';

function App() {
  return (
    <div className='min-h-screen bg-gray-50 py-8'>
      <div className='max-w-4xl mx-auto px-4'>
        <h1 className='text-4xl font-bold text-gray-900 text-center mb-8'>
          Blog App
        </h1>
        <PostCreate />
        <br />
        <h2 className='text-2xl font-bold text-gray-900 text-center mb-8'>
          Posts
        </h2>
        <PostList />
      </div>
    </div>
  );
}

export default App;
