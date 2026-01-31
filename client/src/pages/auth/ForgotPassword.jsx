const ForgotPassword = () => {
  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded">
      <h2 className="text-2xl font-bold mb-4 text-center">Forgot Password</h2>

      <form className="space-y-4">
        <input
          type="email"
          placeholder="Enter your email"
          required
          className="w-full border px-3 py-2 rounded"
        />
        <button className="w-full bg-blue-600 text-white py-2 rounded">
          Send Reset Link
        </button>
      </form>
    </div>
  );
};

export default ForgotPassword;
