import React, { useState } from "react";
import { Link } from "react-router-dom";

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Password dan konfirmasi tidak cocok!");
      return;
    }

    fetch("https://maulidaa.my.id/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
        password_confirmation: confirmPassword,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Response dari register:", data);
        if (data.token) {
          alert("Registrasi berhasil!");
          // window.location.href = "/signin";
          
        } else {
          alert(data.message || "Registrasi gagal!");
        }
      })
      .catch((error) => {
        console.error("Error saat registrasi:", error);
        alert("Terjadi kesalahan saat registrasi.");
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-100 to-white">
      <div className="bg-white shadow-lg rounded-2xl flex overflow-hidden max-w-4xl w-full">
        {/* Left side - form */}
        <div className="w-full md:w-1/2 p-10 bg-green-50">
          <h2 className="text-2xl font-bold text-green-900 mb-1">Selamat datang</h2>
          <h3 className="text-xl font-semibold text-green-900 mb-2">Kulit Sehat, Skincare Tepat!</h3>
          <p className="text-sm text-gray-600 mb-6">
            Kulit Sehat, Skincare Tepat! <br />
            Cek Kandungan Skincare mu, Sekarang!
          </p>

          <form className="space-y-4" onSubmit={handleRegister}>
            <input
              type="text"
              placeholder="Your name"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Example@email.com"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="At least 8 characters"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              type="password"
              placeholder="Type your password again"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <div className="text-right text-sm text-green-800 hover:underline cursor-pointer">
              Forgot Password?
            </div>
            <button
              type="submit"
              className="w-full bg-green-800 text-white py-2 rounded-md hover:bg-green-900 transition"
            >
              Sign up
            </button>
          </form>

          <p className="text-center text-sm text-gray-600 mt-4">
            Do you have an account?{" "}
            <Link to="/signin" className="text-green-800 font-semibold hover:underline">
              Sign in
            </Link>
          </p>

          <p className="text-center text-xs text-gray-400 mt-8">© 2025 ALL RIGHTS RESERVED</p>
        </div>

        {/* Right side - image */}
        <div className="hidden md:block md:w-1/2">
          <img
            src="/bg-serum.jpg"
            alt="Background"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default SignUp;
