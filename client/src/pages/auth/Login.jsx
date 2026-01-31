import LoginForm from "../../componets/auth/LoginForm";

const Login = () => {
  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded">
      <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
      <LoginForm />
    </div>
  );
};

export default Login;
