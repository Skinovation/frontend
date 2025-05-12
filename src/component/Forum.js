import React, { useEffect, useState } from 'react';
import { MdImage, MdInsertEmoticon, MdVideoLibrary } from 'react-icons/md';
import Navbar from './navbar';

function ForumPost() {
  const [text, setText] = useState('');
  const [title, setTitle] = useState('');
  const [image, setImage] = useState(null);
  const [posts, setPosts] = useState([]);
  const [modalImage, setModalImage] = useState(null);
  const [username, setUsername] = useState('');

  useEffect(() => {
    fetch('https://maulidaa.my.id/api/sosial-media')
      .then((response) => response.json())
      .then((data) => setPosts(data.data.data || []))
      .catch((error) => console.error('Error fetching posts:', error));

    const savedUsername = localStorage.getItem('username');
    if (savedUsername) {
      setUsername(savedUsername);
    }
  }, []);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = () => setImage(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handlePost = () => {
    if (!title.trim() && !text.trim() && !image) {
      alert('Isi sesuatu dulu!');
      return;
    }

    const token = localStorage.getItem('authToken');
    if (!token) {
      alert('Token tidak ditemukan. Silakan login ulang.');
      return;
    }

    const postData = {
      user_id: 2,
      judul: title,
      isi: text,
      gambar: image, // base64
    };

    fetch('https://maulidaa.my.id/api/sosial-media', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(postData),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          // Ambil ulang data agar fresh
          fetch('https://maulidaa.my.id/api/sosial-media')
            .then((response) => response.json())
            .then((data) => setPosts(data.data.data || []));

          setTitle('');
          setText('');
          setImage(null);
          alert('Postingan berhasil!');
        } else {
          alert(data.message || 'Gagal menyimpan postingan!');
        }
      })
      .catch((error) => {
        console.error('Error posting:', error);
        alert('Terjadi kesalahan saat posting.');
      });
  };

  return (
    <>
      <Navbar />

      <div className="bg-[#E9F0E5] min-h-screen px-4 py-8">
        {/* Input Area */}
        <div className="bg-white rounded-xl p-4 mb-6 shadow">
          <div className="flex items-start gap-3">
            <img
              src="https://i.pravatar.cc/50"
              alt="avatar"
              className="w-10 h-10 rounded-full object-cover"
            />
            <div className="flex-1 relative">
              <input
                type="text"
                className="w-full border border-gray-300 rounded-xl p-3 pl-4 pr-10 bg-[#F4FBF5] focus:outline-none"
                placeholder="Judul Postingan"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <textarea
                className="w-full border border-gray-300 rounded-xl p-3 pl-4 pr-10 bg-[#F4FBF5] focus:outline-none resize-none mt-4"
                rows="2"
                placeholder="Tulis isi postinganmu di sini..."
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
              <MdInsertEmoticon className="absolute top-3 right-3 text-gray-400" size={22} />
            </div>
          </div>

          <div className="flex items-center justify-between mt-4 px-2 flex-wrap gap-2">
            <div className="flex gap-4">
              <label className="flex items-center gap-1 cursor-pointer text-sm text-gray-700 hover:text-green-700">
                <MdImage size={20} />
                Image
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleImageUpload}
                />
              </label>
              <div className="flex items-center gap-1 text-sm text-gray-400 cursor-not-allowed">
                <MdVideoLibrary size={20} />
                Video
              </div>
            </div>

            <button
              onClick={handlePost}
              className="text-white bg-green-600 p-2 rounded-full hover:bg-green-700"
              title="Post"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
              </svg>
            </button>
          </div>
        </div>

        {/* Post List */}
        {posts.map((post, idx) => (
          <div key={idx} className="bg-white rounded-xl p-4 mb-4 shadow">
            <div className="flex items-center gap-3 mb-2">
              <img
                src="https://i.pravatar.cc/50"
                alt="avatar"
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <p className="font-semibold">{post.user?.name || 'Anonim'}</p>
                <p className="text-sm text-gray-500">
                  {new Date(post.created_at).toLocaleString()}
                </p>
              </div>
            </div>
            <h3 className="font-semibold text-lg">{post.judul}</h3>
            <p className="mb-3">{post.isi}</p>
            {post.gambar && (
              <img
                src={post.gambar}
                alt="uploaded"
                className="w-48 h-48 object-cover rounded cursor-pointer hover:opacity-90 transition"
                onClick={() => setModalImage(post.gambar)}
              />
            )}
          </div>
        ))}

        {/* Modal Image Preview */}
        {modalImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
            onClick={() => setModalImage(null)}
          >
            <div className="bg-white p-2 rounded shadow-lg">
              <img
                src={modalImage}
                alt="Full Size"
                className="max-w-full max-h-[80vh] rounded"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default ForumPost;
