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
      setMessage("❌ Something went wrong! Make sure XAMPP is running.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#fbf9f6] flex items-center justify-center font-sans px-6 py-12">
      <div className="w-full max-w-md">
        {/* Brand Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="text-4xl font-serif tracking-tight">Aperture</span>
            <span className="text-4xl font-serif italic text-gray-400">Optic</span>
          </div>
          <p className="text-xs uppercase tracking-[0.25em] text-gray-500">ADMINISTRATOR ACCESS</p>
        </div>

        <div className="bg-white border border-gray-200 rounded-3xl shadow-sm p-10 md:p-12">
          <h2 className="text-3xl font-serif tracking-tight text-center mb-10">
            Create Account
          </h2>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div>
              <label className="block text-xs tracking-widest text-gray-500 mb-2">USERNAME</label>
              <input
                type="text"
                name="username"
                placeholder="admin_username"
                value={formData.username}
                onChange={handleChange}
                className="w-full px-6 py-4 border border-gray-200 rounded-2xl focus:outline-none focus:border-black transition-colors text-lg"
                required
              />
            </div>

            <div>
              <label className="block text-xs tracking-widest text-gray-500 mb-2">EMAIL ADDRESS</label>
              <input
                type="email"
                name="email"
                placeholder="admin@aperture.optic"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-6 py-4 border border-gray-200 rounded-2xl focus:outline-none focus:border-black transition-colors text-lg"
                required
              />
            </div>

            <div>
              <label className="block text-xs tracking-widest text-gray-500 mb-2">PASSWORD</label>
              <input
                type="password"
                name="password"
                placeholder="••••••••"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-6 py-4 border border-gray-200 rounded-2xl focus:outline-none focus:border-black transition-colors text-lg"
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#111111] hover:bg-black text-white py-4 rounded-2xl font-medium tracking-wider text-sm transition-all duration-200 disabled:opacity-70 mt-4"
            >
              {loading ? "CREATING ACCOUNT..." : "CREATE ACCOUNT"}
            </button>
          </form>

          {message && (
            <p className={`text-center mt-6 text-sm font-light ${message.includes("✅") ? "text-green-700" : "text-red-600"}`}>
              {message}
            </p>
          )}

          <div className="text-center mt-10">
            <p className="text-sm text-gray-600">
              Already have an account?{" "}
              <a href="/login" className="text-[#111111] hover:underline font-medium">
                Sign in
              </a>
            </p>
          </div>
        </div>

        {/* Footer Note */}
        <p className="text-center text-xs text-gray-400 mt-8">
          © {new Date().getFullYear()} Aperture Optic • Private Access
        </p>
      </div>
    </div>
  );
};

export default Signup;