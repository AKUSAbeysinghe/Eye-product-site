import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await fetch("http://localhost/Eye-products-DB/api/signup.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        setMessage("✅ Account created successfully! Redirecting to Login...");
        setTimeout(() => navigate("/login"), 1800);
      } else {
        setMessage("❌ " + (data.message || "Signup failed"));
      }
    } catch (err) {
      setMessage("❌ Something went wrong! Make sure the server is running.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#fbf9f6] flex items-center justify-center p-6 font-sans">
      <div className="w-full max-w-md">
        {/* Brand Logo */}
        <div className="text-center mb-12">
          <a href="/" className="inline-block">
            <span className="font-serif text-5xl tracking-tight text-[#222222]">
              Aperture 
            </span>
            <span className="font-serif italic text-5xl tracking-tight text-[#222222]">
              Optic
            </span>
          </a>
          <p className="text-[#444444] mt-3 text-sm tracking-[0.125em]">EST. 2018</p>
        </div>

        <div className="bg-white border border-gray-200 rounded-3xl shadow-sm p-10">
          <h2 className="text-3xl font-serif tracking-tight text-center mb-10 text-[#222222]">
            Create Admin Account
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-xs tracking-widest text-[#444444] mb-2 font-medium">
                USERNAME
              </label>
              <input
                type="text"
                name="username"
                placeholder="admin"
                value={formData.username}
                onChange={handleChange}
                className="w-full p-4 border border-gray-300 rounded-2xl focus:outline-none focus:border-black transition-all text-[#222222]"
                required
              />
            </div>

            <div>
              <label className="block text-xs tracking-widest text-[#444444] mb-2 font-medium">
                EMAIL ADDRESS
              </label>
              <input
                type="email"
                name="email"
                placeholder="admin@apertureoptic.com"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-4 border border-gray-300 rounded-2xl focus:outline-none focus:border-black transition-all text-[#222222]"
                required
              />
            </div>

            <div>
              <label className="block text-xs tracking-widest text-[#444444] mb-2 font-medium">
                PASSWORD
              </label>
              <input
                type="password"
                name="password"
                placeholder="••••••••"
                value={formData.password}
                onChange={handleChange}
                className="w-full p-4 border border-gray-300 rounded-2xl focus:outline-none focus:border-black transition-all text-[#222222]"
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full border border-black bg-black text-white py-4 rounded-2xl font-medium tracking-widest text-sm hover:bg-white hover:text-black transition-all duration-300 disabled:opacity-70 mt-4"
            >
              {loading ? "CREATING ACCOUNT..." : "CREATE ACCOUNT"}
            </button>
          </form>

          {message && (
            <p className={`text-center mt-6 text-sm font-medium ${message.includes("✅") ? "text-green-700" : "text-red-600"}`}>
              {message}
            </p>
          )}

          <p className="text-center mt-8 text-sm text-[#666666]">
            Already have an account?{" "}
            <a href="/login" className="text-black hover:underline font-medium">
              Log in
            </a>
          </p>
        </div>

        {/* Footer */}
        <p className="text-center text-xs text-[#888888] mt-10 tracking-widest">
          © APERTURE OPTIC — EYEWEAR & EYE CARE
        </p>
      </div>
    </div>
  );
};

export default Signup;