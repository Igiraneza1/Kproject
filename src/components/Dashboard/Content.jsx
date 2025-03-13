import React, { useState } from 'react';

const Content = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const postData = { title, content, image };

    try {
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
        alert('Error submitting post');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error submitting post');
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold mb-4 text-center">Create a New Post</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
          <input
            type="date"
            id="title"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label htmlFor="content" className="block text-sm font-medium text-gray-700">Content</label>
          <textarea
            id="content"
            name="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
            rows="2"
            className="w-full p-2 border border-gray-300 rounded-md"
          ></textarea>
        </div>
        <div>

        </div>
        <button type="submit" className="w-full py-2 bg-red-500 text-white font-semibold rounded-md hover:bg-red-900 cursor-pointer">
          Post
        </button>
      </form>
    </div>
  );
};

export default Content;
