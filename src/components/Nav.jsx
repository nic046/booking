import { useAuth } from "../context/auth";
import { Link } from "react-router";

function Nav() {
  const { isAuth, logout } = useAuth();
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-4">
      {isAuth ? (
        <>
          <Link to="/reservation" className="btn">
            Reservation
          </Link>
          <button
            className="btn bg-red-500 hover:bg-red-600 hover:scale-105"
            onClick={logout}
          >
            Logout
          </button>
        </>
      ) : (
        <>
          <Link to="/login" className="nav-link bg-white">
            Sign in
          </Link>
          <Link to="/login" className="nav-link bg-white">
            Login
          </Link>
        </>
      )}
    </div>
  );
}

export default Nav;
