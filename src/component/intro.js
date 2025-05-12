import React from "react";
import { Link } from "react-router-dom";

const Intro = () => {
  return (
    <section
      className="min-h-[550px] rounded-b-l overflow-hidden bg-cover bg-center relative"
      style={{
        backgroundImage: "url('/background.png')",
      }}
    >
      {/* Konten */}
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-15 px-10 text-white py-18">
        <div className="lg:w-1/2 flex justify-start items-end mt-37">
          <img
            src="/human.png"
            alt="Model Skincare"
            className="w-[75%] lg:w-[45%] mb-[-385px] lg:-ml-40 object-contain absolute"
          />
        </div>
        <div className="lg:w-full flex flex-col justify-center space-y-8 bg-[#e4ece0cc] p-8 rounded-xl backdrop-blur-sm py-30 px-15 mt-20">
          <h1 className="text-8xl md:text-6xl font-bold leading-[1.8] text-center lg:text-left break-words text-[#1A202C] drop-shadow-xl">
            Kulit Sehat, <br />
            Skincare Tepat! <br />
            Cek Kandungan Skincare-Mu Sekarang!
          </h1>
          <div className="text-center lg:text-left">
            <Link to="/ingredients-checker">
              <button className="bg-[#2F855A] text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:bg-[#276749] transition duration-300 ease-in-out">
                Cek Sekarang →
              </button>
            </Link>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Intro;
