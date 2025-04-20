import { Camera, Scan, Upload } from "lucide-react";
import React from "react";

const steps = [
  {
    icon: <Camera className="text-white" size={24} />,
    title: "Ambil foto",
    desc: "Foto bagian komposisi produk",
  },
  {
    icon: <Upload className="text-white" size={24} />,
    title: "Upload",
    desc: "Unggah foto yang telah diambil ke tempat yang telah disediakan",
  },
  {
    icon: <Scan className="text-white" size={24} />,
    title: "Tunggu hasil",
    desc: "Foto akan diidentifikasi menggunakan AI dan hasil akan ditampilkan setelahnya",
  },
];

const Steps = () => {
  return (
    <section className="bg-[#E4ECE0] shadow-xl px-8 py-16">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-10">
        <div className="flex-1 flex justify-center">
          <img
            src="/serum.png"
            alt="Serum"
            className="w-full max-w-sm"
          />
        </div>
        <div className="flex-1">
          <h2 className="text-2xl font-semibold mb-6 text-green-900 text-center lg:text-left">
            Cara Cek kandungan Skincare
          </h2>
          <div className="space-y-6">
            {steps.map((step, index) => (
              <div key={index} className="flex items-start gap-4 max-w-md mx-auto lg:mx-0">
                <div className="bg-green-600 p-3 rounded-full">
                  {step.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-green-800">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Steps;
