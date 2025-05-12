import React, { useState } from 'react';
import Navbar from './navbar';

function IngredientsChecker() {
  const [imageFile, setImageFile] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const [productName, setProductName] = useState('');
  const [productBrand, setProductBrand] = useState('');
  const [productCategory, setProductCategory] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!imageFile || !productName || !productBrand || !productCategory) {
      alert('Lengkapi semua data!');
      return;
    }

    const formData = new FormData();
    formData.append('image', imageFile);
    formData.append('product_name', productName);
    formData.append('product_brand', productBrand);
    formData.append('product_category', productCategory);

    setLoading(true);
    try {
      const res = await fetch('https://maulidaa.my.id/api/analyze/skincare', {
        method: 'POST',
        body: formData,
      });

      const data = await res.json();

      if (data.success) {
        const formattedResult = (
          <div className="text-left text-gray-800">
            <h3 className="text-2xl font-semibold text-[#294B29] mb-4">Hasil Analisis Produk:</h3>

            <div><strong>Nama Produk:</strong> {data.data.produk.nama}</div>
            <div><strong>Merek:</strong> {data.data.produk.brand}</div>
            <div><strong>Kategori:</strong> {data.data.produk.kategori}</div>
            <div><strong>Deskripsi:</strong> {data.data.produk.deskripsi}</div>
            <div><strong>Label:</strong> {data.data.produk.label.join(', ')}</div>
          </div>
        );
        setResult(formattedResult);
      } else {
        setResult(<p>Gagal menganalisis produk: {data.message || 'Unknown error'}</p>);
      }
    } catch (err) {
      setResult(<p>Terjadi kesalahan saat mengirim data.</p>);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />

      <section className="bg-[#E9F0E5] min-h-[calc(100vh-64px)] flex items-center justify-center px-4 py-16">
        <div className="max-w-2xl w-full text-center">
          <h2 className="text-3xl font-semibold mb-8 text-[#294B29]">Ingredients Checker</h2>

          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-md space-y-6">
            <input
              type="file"
              accept="image/*"
              onChange={(e) => {
                const file = e.target.files[0];
                setImageFile(file);
                if (file) {
                  setPreviewImage(URL.createObjectURL(file));
                } else {
                  setPreviewImage(null);
                }
              }}
              className="block w-full p-3 border border-gray-300 rounded-md"
              required
            />

            {previewImage && (
              <div className="mt-4">
                <p className="mb-2 font-medium text-left">Preview Gambar:</p>
                <img
                  src={previewImage}
                  alt="Preview"
                  className="w-full max-w-[300px] mx-auto rounded-lg shadow-md"
                />
              </div>
            )}

            <input
              type="text"
              placeholder="Product Name"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md"
              required
            />

            <input
              type="text"
              placeholder="Product Brand"
              value={productBrand}
              onChange={(e) => setProductBrand(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md"
              required
            />

            <input
              type="text"
              placeholder="Product Category"
              value={productCategory}
              onChange={(e) => setProductCategory(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md"
              required
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#294B29] hover:bg-[#1f3a1f] text-white py-3 rounded-md"
            >
              {loading ? 'Checking...' : 'Check Ingredients'}
            </button>
          </form>

          {result && (
            <div className="mt-6">
              <div className="bg-white p-6 rounded-xl shadow-md text-left">
                {result}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default IngredientsChecker;
