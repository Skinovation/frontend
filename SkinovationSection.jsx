import React from "react";

const SkinovationSection = () => {
  return (
    <section className="bg-gradient-to-b from-[#f3f7f2] to-[#e6ede3] py-16 px-6 md:px-20 text-[#263a29]">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl font-semibold mb-4">Skinovation</h2>
          <p className="text-base leading-relaxed mb-6">
            Website berbasis AI yang membantu pengguna menganalisis kandungan skincare, mendeteksi risiko, merekomendasikan produk alternatif, serta menyediakan edukasi dan komunitas review skincare.
          </p>
          <div>
            <h3 className="text-xl font-bold mb-2">Fitur Utama</h3>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Analisis Kandungan Skincare</li>
              <li>Deteksi Risiko Bahan</li>
              <li>Rekomendasi Produk Alternatif</li>
              <li>Komunitas dan Review</li>
            </ul>
          </div>
        </div>
        <div>
          <img src="/skinovation.png" alt="Skinovation Preview" className="rounded-lg shadow-md" />
        </div>
      </div>
    </section>
  );
};

export default SkinovationSection;
