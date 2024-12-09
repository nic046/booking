import { Link } from "react-router";
import Logo from "./Logo";

function Brand() {
  return <Link to="/" className="flex items-center gap-2">
    <Logo />
    <span className="text-3xl font-semibold text-blue-700">
        Booking<span className="text-yellow-500">App</span>
    </span>
  </Link>;
}

export default Brand;
