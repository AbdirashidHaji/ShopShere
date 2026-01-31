import { useParams } from "react-router-dom";

const ResetPassword = () => {
  const { token } = useParams();

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded">
      <h2 className="text-2xl font-bold mb-4 text-center">Reset Password</h2>

      <form className="space-y-4">
        <input
          type="password"
          placeholder="New password"
          required
          className="w-full border px-3 py-2 rounded"
        />
        <button className="w-full bg-green-600 text-white py-2 rounded">
          Reset Password
        </button>
      </form>

      <p className="text-xs text-gray-500 mt-4 break-all">
        Token: {token}
      </p>
    </div>
  );
};

export default ResetPassword;
