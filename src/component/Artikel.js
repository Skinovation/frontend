import React from 'react';
import { Link } from 'react-router-dom';

const Artikel = () => {
  return (
    <section className="bg-[#E4ECE0] shadow-xl px-8 py-16">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-10">Artikel</h2>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-4">
          {/* Card 1 */}
          <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition overflow-hidden">
            <img
              src="/ar-kbs.jpg"
              alt="Kenali Bahan Skincare"
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">Kenali Bahan Skincare</h3>
              <Link
                to="/artikel/kenali-bahan-skincare"
                className="text-blue-600 hover:underline text-sm"
              >
                Baca selengkapnya →
              </Link>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition overflow-hidden">
            <img
              src="/ar-bb.jpg"
              alt="Bahan Berbahaya vs Aman"
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">Bahan Berbahaya vs Aman</h3>
              <Link
                to="/artikel/bahan-berbahaya-vs-aman"
                className="text-blue-600 hover:underline text-sm"
              >
                Baca selengkapnya →
              </Link>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition overflow-hidden">
            <img
              src="/ar-tjk.jpg"
              alt="Tips Skincare Sesuai Jenis Kulit"
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">Tips Skincare Sesuai Jenis Kulit</h3>
              <Link
                to="/artikel/tips-skincare-jenis-kulit"
                className="text-blue-600 hover:underline text-sm"
              >
                Baca selengkapnya →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Artikel;
