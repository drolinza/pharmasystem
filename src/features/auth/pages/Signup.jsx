import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Signup = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify(form));
    alert("Signup berhasil! Silakan login.");
    navigate("/login");
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-blue-50">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-3xl shadow-lg w-96"
      >
        <h2 className="text-2xl text-center font-bold mb-6">Sign Up</h2>
        <label className="block text-sm font-medium mb-1">Your Name</label>
        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={handleChange}
          className="w-full p-2  mb-4 rounded-lg border border-gray-500 transition focus:outline-none focus:border-blue-500"
        />
        <label className="block text-sm font-medium mb-1">Email</label>
        <input
          type="email"
          name="email"
          placeholder="example@email.com"
          onChange={handleChange}
          className="w-full p-2  mb-4 rounded-lg border border-gray-500 transition focus:outline-none focus:border-blue-500"
        />
        <label className="block text-sm font-medium mb-1">Password</label>
        <input
          type="password"
          name="password"
          placeholder="••••••••"
          onChange={handleChange}
          className="w-full p-2  mb-4 rounded-lg border border-gray-500 transition focus:outline-none focus:border-blue-500"
        />

        <button
          type="submit"
          className="bg-blue-300 text-white w-full py-2 rounded-2xl hover:bg-blue-400"
        >
          Sign Up
        </button>
      </form>
    </section>
  );
};
