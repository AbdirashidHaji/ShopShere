import { Link } from "react-router-dom";

const LoginForm = () => {
  return (
    <form className="space-y-4">
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

      <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
        Login
      </button>
       
      <p className="text-sm text-center">
        Create account?{" "}
        <Link to="/register" className="text-blue-600">
          Register
        </Link>
      </p>
      <div className="text-sm text-center">
        <Link to="/forgot-password" className="text-blue-600">
          Forgot password?
        </Link>
      </div>
    </form>
  );
};

export default LoginForm;