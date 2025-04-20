import React from "react";
import { Link } from "react-router-dom";

const Join = () => {
  return (
    <>
      <section className="bg-[#E4ECE0] shadow-xl px-8 py-16">
        <div className="max-w-5xl mx-auto space-y-6">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start space-y-4 md:space-y-0">
            <div className="text-2xl font-bold">Skinovation</div>
            <div className="md:w-3/4 text-sm md:text-base">
              <p className="mb-2">
                Website berbasis AI yang membantu pengguna menganalisis kandungan skincare, mendeteksi risiko, merekomendasikan produk alternatif, serta menyediakan edukasi dan komunitas review skincare.
              </p>
              <p className="font-semibold mt-4 mb-1">Fitur Utama:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Cek Kandungan Skincare</li>
                <li>Analisis Risiko Produk</li>
                <li>Rekomendasi Produk Alternatif</li>
                <li>Edukasi Bahan Skincare</li>
                <li>Review & Komunitas</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#7D9254] text-white py-10 px-6">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <h2 className="text-lg md:text-2xl font-medium">Let's Join With Us</h2>
          <Link to="/signin" className="text-2xl hover:text-gray-200 transition">
            →
          </Link>
        </div>
      </section>
    </>
  );
};

export default Join;
