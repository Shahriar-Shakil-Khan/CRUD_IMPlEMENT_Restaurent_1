import { Link, NavLink, useNavigate } from "react-router";
import Swal from "sweetalert2";
import useAuth from "../hooks/useAuth";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logOut()
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Logged out",
          timer: 1200,
          showConfirmButton: false,
        });
        navigate("/login");
      })
      .catch(() => {
        Swal.fire({
          icon: "error",
          title: "Logout failed",
          confirmButtonColor: "#e11d48",
        });
      });
  };

  // active page er link rose color e dekhabe
  const linkClass = ({ isActive }) =>
    isActive ? "font-semibold text-rose-600" : "";

  const links = (
    <>
      <li>
        <NavLink to="/" className={linkClass}>Home</NavLink>
      </li>
      <li>
        <NavLink to="/add-recipe" className={linkClass}>Add Recipe</NavLink>
      </li>
      <li>
        <NavLink to="/recipes" className={linkClass}>Recipes</NavLink>
      </li>
      <li>
        <NavLink to="/about" className={linkClass}>About Us</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-2xl">
          FlavorFolio
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>

      <div className="navbar-end gap-2">
        {user ? (
          <>
            {user.photoURL ? (
              <img
                src={user.photoURL}
                alt={user.displayName || "User"}
                title={user.displayName || user.email}
                className="h-10 w-10 rounded-full object-cover"
              />
            ) : (
              <div
                title={user.displayName || user.email}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-rose-100 font-bold text-rose-600"
              >
                {(user.displayName || user.email || "U").charAt(0).toUpperCase()}
              </div>
            )}
            <button
              onClick={handleLogout}
              className="btn btn-sm border-none bg-rose-600 text-white hover:bg-rose-700"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="btn btn-sm">
              Login
            </Link>
            <Link
              to="/register"
              className="btn btn-sm border-none bg-rose-600 text-white hover:bg-rose-700"
            >
              Register
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;