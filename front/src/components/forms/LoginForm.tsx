"use client";

const LoginForm = () => {
  return (
    <form
      className="w-1/4 flex flex-col text-center bg-slate-600 p-4 rounded-2xl m-4 items-center"
      action=""
    >
      <label className="text-white font-bold" htmlFor="email">Email</label>
      <input
        className="mb-4 mt-2 bg-white rounded-2xl"
        type="email"
        name="email"
        id="email"
      />
      <label className="text-white font-bold" htmlFor="password">Password</label>
      <input
        className="mb-4 mt-2 bg-white rounded-2xl"
        type="password"
        name="password"
        id="password"
      />
      <button
        className="bg-green-500 rounded-2xl w-1/3 m-2 hover:bg-green-700 font-bold"
        type="submit"
      >
        Login
      </button>
    </form>
  );
};

export default LoginForm;
