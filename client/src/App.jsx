import PostCreate from './components/post-create';

function App() {
  return (
    <div className='min-h-screen bg-gray-50 py-8'>
      <div className='max-w-4xl mx-auto px-4'>
        <h1 className='text-4xl font-bold text-gray-900 text-center mb-8'>
          Blog App
        </h1>
        <PostCreate />
      </div>
    </div>
  );
}

export default App;
