import { Link } from "react-router-dom";
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";

function RegistrationPage() {
  return (
    <div className="mt-16 flex flex-col items-center">
      <h1 className="text-2xl font-bold text-center search-title">
        Registration:
      </h1>
      <RegistrationForm />
      <p className="mt-4 text-gray-600">
        Already have an account?
        <Link
          to="/login"
          className="text-primary font-semibold hover:underline"
        >
          Log in here
        </Link>
      </p>
    </div>
  );
}

export default RegistrationPage;
