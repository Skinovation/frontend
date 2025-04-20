import React, { useState } from 'react';
import Navbar from './navbar'; // Import Navbar component

function IngredientsChecker() {
  const [image, setImage] = useState(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = () => setImage(reader.result);
      reader.readAsDataURL(file);
    }
    setIsDragging(false);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = () => setImage(reader.result);
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Main Section */}
      <section className="bg-[#E9F0E5] min-h-[calc(100vh-64px)] flex items-center justify-center px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-8 text-[#294B29]">Ingredients Checker</h2>

          {/* Drag and Drop Area */}
          <div
            className={`border-2 border-dashed rounded-lg mx-auto w-full max-w-md h-72 flex items-center justify-center relative bg-white overflow-hidden
            ${isDragging ? 'border-[#1e2d1e] bg-[#f7f7f7]' : 'border-gray-400'}`}
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
          >
            {image ? (
              <img src={image} alt="Uploaded" className="w-full h-full object-cover" />
            ) : (
              <div className="text-center text-gray-500">
                <div className="text-3xl mb-2">📤</div>
                <p>Drag and Drop your image here</p>
              </div>
            )}
            {/* Input for choosing file */}
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
            />
          </div>

          <button className="mt-6 flex items-center gap-2 bg-[#294B29] hover:bg-[#1f3a1f] text-white py-2 px-6 rounded shadow-md mx-auto">
            Check Ingredients
          </button>
        </div>
      </section>
    </>
  );
}

export default IngredientsChecker;
