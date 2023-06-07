import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100 shadow-2xl rounded-3xl p-5">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 mr-20 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <Link className="text-lg font-bold mr-5 md:" to="/">
                <a>Home</a>
              </Link>

              <Link className="text-lg font-bold mr-5 md:" to="/Bookmarked">
                <a>Bookmarked3</a>
              </Link>
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost normal-case text-3xl font-bold">
            Movie Magnet
          </Link>
        </div>

        <div className="navbar-end hidden lg:flex mr-20">
          <ul className="menu menu-horizontal px-1">
            <Link className="text-lg font-bold mr-5" to="/">
              Home
            </Link>
            <Link className="text-lg font-bold mr-5" to="/Bookmarked">
              Bookmarked
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
