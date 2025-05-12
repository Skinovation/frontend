import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Request API untuk login
    fetch("https://maulidaa.my.id/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Response dari login:", data);
        if (data.success && data.data?.token?.access_token) {
          localStorage.setItem("authToken", data.data.token.access_token); // Simpan token di localStorage
          alert("Login berhasil!");
          navigate("/"); // Redirect ke halaman utama setelah login berhasil
        } else {
          alert("Login gagal!");
        }
      })
      .catch((error) => {
        console.error("Error saat login:", error);
        alert("Terjadi kesalahan saat login.");
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-100 to-white">
      <div className="bg-white shadow-lg rounded-2xl flex overflow-hidden max-w-4xl w-full">
        {/* Left side - form */}
        <div className="w-full md:w-1/2 p-10 bg-green-50">
          <h2 className="text-2xl font-bold text-green-900 mb-2">
            Selamat Datang di Skinovation!
          </h2>
          <p className="text-sm text-gray-600 mb-6">
            Pastikan produkmu aman dan cocok untuk kulitmu. Masuk sekarang!
          </p>

          <form onSubmit={handleLogin} className="space-y-4">
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
            <div className="text-right text-sm text-green-800 hover:underline cursor-pointer">
              Forgot Password?
            </div>
            <button
              type="submit"
              className="w-full bg-green-800 text-white py-2 rounded-md hover:bg-green-900 transition"
            >
              Sign In
            </button>
          </form>

          <div className="my-4 flex items-center gap-2">
            <hr className="flex-grow border-gray-300" />
            <span className="text-gray-500 text-sm">Or</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          <button className="w-full flex items-center justify-center gap-2 border py-2 rounded-md hover:bg-gray-100">
            <img
              src="https://www.svgrepo.com/show/355037/google.svg"
              alt="Google"
              className="w-5 h-5"
            />
            Sign in with Google
          </button>

          <p className="text-center text-sm text-gray-600 mt-4">
            Don’t you have an account?{" "}
            <Link
              to="/signup"
              className="text-green-800 font-semibold hover:underline"
            >
              Sign up
            </Link>
          </p>

          <p className="text-center text-xs text-gray-400 mt-8">
            © 2025 ALL RIGHTS RESERVED
          </p>
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

export default SignIn;
