import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [error, setError] = useState();

  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const savedUser = JSON.parse(localStorage.getItem("user"));

    if (
      savedUser &&
      savedUser.email === form.email &&
      savedUser.password === form.password
    ) {
      alert("Login berhasil!");
      localStorage.setItem("isLoggedIn", "true");
      navigate("/dashboard");
    } else {
      setError("Email atau password salah");
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-blue-50">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-3xl shadow-lg w-96"
      >
        <h2 className="text-gray-700 text-2xl font-bold text-center mb-6">
          Login
        </h2>

        {error && (
          <div className="bg-red-100 text-red-700 p-2 rouded mb-4 text-sm">
            {error}
          </div>
        )}
        <label className="block text-sm font-medium mb-1">Email</label>
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
          className="w-full p-2  mb-4 rounded-lg border border-gray-500 transition focus:outline-none focus:border-blue-500"
        />
        <label className="block text-sm font-medium mb-1">Password</label>
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          required
          className="w-full p-2  mb-4 rounded-lg border border-gray-500 transition focus:outline-none focus:border-blue-500"
        />

        <button
          type="submit"
          className="w-full bg-blue-300 text-white py-2 rounded-2xl hover:bg-blue-400 transition"
        >
          Login
        </button>
      </form>
    </section>
  );
};
