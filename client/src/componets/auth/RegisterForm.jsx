import { Link } from "react-router-dom";

const RegisterForm = () => {
  return (
    <form className="space-y-4">
      <div>
        <label className="block text-sm font-medium">Name</label>
        <input
          type="text"
          required
          className="w-full border px-3 py-2 rounded mt-1"
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Email</label>
        <input
          type="email"
          required
          className="w-full border px-3 py-2 rounded mt-1"
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Password</label>
        <input
          type="password"
          required
          className="w-full border px-3 py-2 rounded mt-1"
        />
      </div>

      <button className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">
        Register
      </button>

      <p className="text-sm text-center">
        Already have an account?{" "}
        <Link to="/login" className="text-blue-600">
          Login
        </Link>
      </p>
    </form>
  );
};

export default RegisterForm;
