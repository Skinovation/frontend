import React, { useState } from 'react';

const Forum = () => {
  const [posts, setPosts] = useState([]); // Menyimpan daftar post
  const [newPost, setNewPost] = useState(''); // Menyimpan konten post baru
  const [showPostForm, setShowPostForm] = useState(false); // Menyembunyikan atau menampilkan form postingan

  // Menangani submit post baru
  const handlePostSubmit = (e) => {
    e.preventDefault();
    setPosts([
      ...posts,
      { id: posts.length + 1, content: newPost, likes: 0, comments: [] },
    ]);
    setNewPost('');
    setShowPostForm(false); // Menyembunyikan form setelah post dikirim
  };

  // Menangani like pada post
  const handleLike = (id) => {
    setPosts(posts.map(post => post.id === id ? { ...post, likes: post.likes + 1 } : post));
  };

  // Menangani komentar pada post
  const handleAddComment = (id, comment) => {
    setPosts(posts.map(post => post.id === id ? { ...post, comments: [...post.comments, comment] } : post));
  };

  return (
    <section
      className="min-h-[600px] rounded-b-3xl"
      style={{
        backgroundImage: 'linear-gradient(to bottom, rgba(26, 53, 36, 0.9) 10%, rgba(109, 140, 84, 0.9) 80%, rgba(242, 246, 239, 0.9) 100%)',
      }}
    >
      <div className="max-w-7xl mx-auto px-10 py-20 relative z-10">
        <h2 className="text-white text-3xl font-bold mb-6">Forum Komunitas</h2>

        {/* Tombol untuk membuat post baru */}
        <button
          onClick={() => setShowPostForm(true)}
          className="bg-green-600 text-white p-3 rounded-full mb-6"
        >
          +
        </button>

        {/* Form untuk membuat post baru */}
        {showPostForm && (
          <form onSubmit={handlePostSubmit} className="bg-white p-4 rounded-lg shadow-md mb-6">
            <textarea
              className="w-full h-32 p-4 border border-gray-300 rounded-lg"
              placeholder="Apa yang ingin kamu diskusikan?"
              value={newPost}
              onChange={(e) => setNewPost(e.target.value)}
            />
            <div className="flex justify-between items-center mt-4">
              <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-lg">Post</button>
            </div>
          </form>
        )}

        {/* Menampilkan daftar post */}
        {posts.map(post => (
          <div key={post.id} className="bg-white p-4 rounded-lg shadow-md mb-6">
            <p>{post.content}</p>
            <div className="flex justify-between items-center mt-4">
              <button onClick={() => handleLike(post.id)} className="text-blue-500">
                Like ({post.likes})
              </button>
              <div className="flex items-center">
                <input
                  type="text"
                  placeholder="Add a comment"
                  onBlur={(e) => handleAddComment(post.id, e.target.value)}
                  className="border border-gray-300 p-2 rounded-l-lg"
                />
                <button className="bg-blue-500 text-white p-2 rounded-r-lg">Comment</button>
              </div>
            </div>
            {/* Menampilkan komentar-komentar pada post */}
            <div className="mt-2">
              {post.comments.map((comment, index) => (
                <p key={index} className="text-gray-600 ml-4">{comment}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Forum;
