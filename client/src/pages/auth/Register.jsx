import RegisterForm from "../../componets/auth/RegisterForm";

const Register = () => {
  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded">
      <h2 className="text-2xl font-bold mb-4 text-center">Create Account</h2>
      <RegisterForm />
    </div>
  );
};

export default Register;
