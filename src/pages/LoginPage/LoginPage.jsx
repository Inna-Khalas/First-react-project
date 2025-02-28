import { Link } from "react-router-dom";
import LoginForm from "../../components/LoginForm/LoginForm";

function LoginPage() {
  return (
    <div className="mt-16 flex flex-col items-center">
      <h1 className="text-2xl font-bold text-center search-title">LoginPage</h1>
      <LoginForm />
      <p className="mt-4 text-gray-600">
        Don`t have an account?
        <Link
          to="/register"
          className="text-primary font-semibold hover:underline"
        >
          Sign up here
        </Link>
      </p>
    </div>
  );
}

export default LoginPage;
