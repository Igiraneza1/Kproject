import React, { useState } from 'react';

const Content = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const postData = { title, content, image };

    try {
      setLoading(true); 
      setError(null);

      const response = await fetch('/api/admin/submit-post', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData),
      });

      if (response.ok) {
        alert('Post submitted successfully!');
        setTitle('');
        setContent('');
        setImage('');
      } else {
        setError('Error submitting post');
        alert('Error submitting post');
      }
    } catch (error) {
      console.error('Error:', error);
      setError('Error submitting post');
      alert('Error submitting post');
    } finally {
      setLoading(false); 
    }
  };

  return (
    <div
      className="absolute top-20 max-w-4xl mx-auto p-6 w-150 bg-white shadow-lg rounded-lg"
      style={{
        left: '50%',
        transform: 'translateX(-50%)',
      }}
    >
      <h1 className="text-2xl font-bold mb-4 text-center">Create a New Post</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="title" className="block text-2xl font-medium text-gray-700">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label htmlFor="content" className="block text-2xl font-medium text-gray-700">
            Content
          </label>
          <textarea
            id="content"
            name="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
            rows="4"
            className="w-full p-2 border border-gray-300 rounded-md"
          ></textarea>
        </div>
        <div>
          
        </div>
        <button
          type="submit"
          className={`w-full py-2 bg-red-500 text-white font-semibold rounded-md hover:bg-red-900 cursor-pointer ${
            loading ? 'bg-gray-500 cursor-not-allowed' : ''
          }`}
          disabled={loading}
        >
          {'Post'}
        </button>
      </form>

      {error && (
        <div className="mt-4 text-red-500 text-center">
          <p>{error}</p>
        </div>
      )}

    </div>
  );
};

export default Content;
