import React, { useRef, useState } from "react";

export default function Registration() {
  const emailRef = useRef();
  const nameRef = useRef();
  const usernameRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    const email = emailRef.current.value.trim();
    const name = nameRef.current.value.trim();
    const username = usernameRef.current.value.trim();
    const password = passwordRef.current.value;
    const confirmPassword = confirmPasswordRef.current.value;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;

    if (!email || !emailRegex.test(email)) {
      return setError("Please enter a valid email.");
    }

    if (!name) return setError("Name is required.");

    if (!username || /\s/.test(username)) {
      return setError("Username is required and must contain no spaces.");
    }

    if (!passwordRegex.test(password)) {
      return setError(
        "Password must be at least 8 characters, include uppercase, lowercase, digit, and special character."
      );
    }

    if (password !== confirmPassword) {
      return setError("Passwords do not match.");
    }

    setSuccess("Registration successful!");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-800 to-blue-900 text-white px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white text-black rounded-2xl shadow-2xl p-8 w-full max-w-md space-y-6"
      >
        <h1 className="text-3xl font-bold text-center text-gray-800">
          Registration
        </h1>

        {error && (
          <p className="text-red-600 text-sm text-center font-semibold">
            {error}
          </p>
        )}
        {success && (
          <p className="text-green-600 text-sm text-center font-semibold">
            {success}
          </p>
        )}

        <div className="space-y-2">
          <label className="block font-medium">Email Address</label>
          <input
            ref={emailRef}
            type="email"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="example@mail.com"
          />
        </div>

        <div className="space-y-2">
          <label className="block font-medium">Name</label>
          <input
            ref={nameRef}
            type="text"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="John Doe"
          />
        </div>

        <div className="space-y-2">
          <label className="block font-medium">Username</label>
          <input
            ref={usernameRef}
            type="text"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="username123"
          />
        </div>

        <div className="space-y-2">
          <label className="block font-medium">Password</label>
          <input
            ref={passwordRef}
            type="password"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="P@ssword1234"
          />
          <p className="text-xs text-gray-500">
            Min 8 chars, 1 uppercase, 1 lowercase, 1 digit, 1 special.
          </p>
        </div>

        <div className="space-y-2">
          <label className="block font-medium">Confirm Password</label>
          <input
            ref={confirmPasswordRef}
            type="password"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Confirm password"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition"
        >
          Register
        </button>
      </form>
    </div>
  );
}
