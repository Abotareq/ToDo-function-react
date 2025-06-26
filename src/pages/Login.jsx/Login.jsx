import React from "react";
import { useForm } from "react-hook-form";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-2xl w-full max-w-md space-y-6 border border-white/10"
      >
        <h1 className="text-3xl font-bold text-center text-white">Login</h1>

        <div>
          <label
            htmlFor="email"
            className="block mb-1 font-medium text-gray-200"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-4 py-2 bg-white/80 text-gray-900 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            {...register("email", { required: "Email is required" })}
          />
          {errors.email && (
            <span className="text-sm text-red-400">{errors.email.message}</span>
          )}
        </div>

        <div>
          <label
            htmlFor="password"
            className="block mb-1 font-medium text-gray-200"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            className="w-full px-4 py-2 bg-white/80 text-gray-900 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            {...register("password", { required: "Password is required" })}
          />
          {errors.password && (
            <span className="text-sm text-red-400">
              {errors.password.message}
            </span>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-xl font-semibold transition duration-300"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
