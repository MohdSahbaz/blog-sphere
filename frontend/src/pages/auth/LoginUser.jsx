import { useState } from "react";
import { Link } from "react-router-dom";

const LoginUser = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Add actual login API logic
    setError("🚧 Site under construction");
    console.log("Login data:", formData);
  };

  return (
    <div className="flex items-center justify-center px-4 text-white">
      <form
        onSubmit={handleSubmit}
        className="bg-white/10 backdrop-blur-md rounded-xl shadow-xl p-8 w-full max-w-md space-y-6"
      >
        <h2 className="text-2xl font-bold text-center bg-gradient-to-r from-[#00ffae] to-[#00d4ff] text-transparent bg-clip-text">
          Login
        </h2>

        {/* Error Message */}
        {error && (
          <div className="bg-red-500/20 text-red-300 text-sm text-center py-2 px-4 rounded shadow">
            {error}
          </div>
        )}

        <div className="flex flex-col space-y-2">
          <label htmlFor="username" className="text-sm text-gray-300">
            Username
          </label>
          <input
            type="text"
            name="username"
            id="username"
            value={formData.username}
            onChange={handleChange}
            className="px-4 py-2 rounded bg-white/20 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-[#00ffc8]"
            placeholder="Enter your username"
            required
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label htmlFor="password" className="text-sm text-gray-300">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            value={formData.password}
            onChange={handleChange}
            className="px-4 py-2 rounded bg-white/20 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-[#00ffc8]"
            placeholder="Enter your password"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-[#00ffae] text-black font-semibold py-2 rounded-full shadow hover:scale-105 transition"
        >
          Login
        </button>

        {/* Register Link */}
        <p className="text-center text-sm text-gray-300 pt-2">
          Don&apos;t have an account?{" "}
          <Link
            to="/register"
            className="text-[#00ffc8] hover:underline font-medium"
          >
            Register
          </Link>
        </p>
      </form>
    </div>
  );
};

export default LoginUser;
