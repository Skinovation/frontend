import React from "react";
import { Link } from "react-router-dom";

const Intro = () => {
  return (
    <section
      className="min-h-[600px] rounded-b-3xl overflow-hidden relative"
      style={{
        backgroundImage:
          'linear-gradient(to bottom, rgba(26, 53, 36, 0.9) 5%, rgba(109, 140, 84, 0.9) 70%, rgba(242, 246, 239, 0.9) 100%)',
      }}
    >
      {/* Background Image */}
      <div className="absolute top-[-5%] right-[-6%] 0 z-0">
        <img
          src="/bcg-intro.png"
          alt="Background"
          className="w-[90%] h-auto object-cover opacity-60"
        />
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-15 px-10 py-20 relative z-10">
        <div className="lg:w-1/2 flex justify-start items-end mt-10 lg:mt-0">
          <img
            src="/human.png"
            alt="Model Skincare"
            className="w-[80%] lg:w-[45%] mb-[-350px] lg:-ml-40 object-contain absolute"
          />
        </div>

        <div className="lg:w-full text-white flex flex-col justify-center space-y-6">
          <h1 className="text-4xl md:text-7xl font-bold leading-relaxed text-center lg:text-left break-words">
            Kulit Sehat, Skincare Tepat! <br />
            Cek Kandungan Skincare-Mu Sekarang!
          </h1>
          <div className="text-center lg:text-left">
            <Link to="/ingredients-checker">
              <button className="bg-white text-green-800 px-6 py-4 rounded-full font-medium shadow hover:bg-green-200 hover:scale-100 transition duration-300 ease-in-out">
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
