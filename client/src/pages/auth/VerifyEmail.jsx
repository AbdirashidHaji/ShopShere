import { useParams } from "react-router-dom";

const VerifyEmail = () => {
  const { token } = useParams();

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded text-center">
      <h2 className="text-2xl font-bold mb-4">Verify Email</h2>
      <p className="text-gray-700">
        Verifying your email using token:
      </p>
      <p className="text-sm text-gray-500 mt-2 break-all">{token}</p>
    </div>
  );
};

export default VerifyEmail;
