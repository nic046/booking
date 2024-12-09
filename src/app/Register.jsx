import { Link } from "react-router";
import RegisterForm from "../components/auth/RegisterForm";

function Register() {
  return (
    <div className="border border-gray-500 px-8 py-4 rounded-lg bg-gray-200 ">
      <h1 className="text-lg font-semibold mb-6">Create an account</h1>
      <RegisterForm />
      <p className="mt-6">
        Do you already have an account?{" "}
        <Link to="/login" className="text-blue-500 font-semibold">
          Sing in!
        </Link>{" "}
      </p>
    </div>
  );
}

export { Register };
