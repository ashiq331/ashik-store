import { useState } from "react";
import {
  FaHome,
  FaSearch,
  FaShoppingBag,
  FaSignInAlt,
  FaSignOutAlt,
  FaUser,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const user = { _id: "33", role: "admin" };

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const logoutHandler = () => {
    setIsOpen(false);
  };

  return (
    <nav className="header">
      <div className="container">
        <div>
          <Link className="logo" onClick={() => setIsOpen(false)} to={"/"}>
            Ashik Store
          </Link>
        </div>

        <div className="header__left">
          <Link onClick={() => setIsOpen(false)} to={"/"}>
            <FaHome />
          </Link>
          <Link onClick={() => setIsOpen(false)} to={"/search"}>
            <FaSearch />
          </Link>
          <Link onClick={() => setIsOpen(false)} to={"/cart"}>
            <FaShoppingBag />
          </Link>

          {user?._id ? (
            <>
              <button onClick={() => setIsOpen((prev) => !prev)}>
                <FaUser />
              </button>

              <dialog open={isOpen}>
                <div>
                  {user.role === "admin" && (
                    <Link
                      onClick={() => setIsOpen(false)}
                      to="/admin/dashboard"
                    >
                      Admin
                    </Link>
                  )}

                  <Link onClick={() => setIsOpen(false)} to="/orders">
                    <button onClick={logoutHandler}>
                      <FaSignOutAlt />
                    </button>
                  </Link>
                </div>
              </dialog>
            </>
          ) : (
            <Link to={"/login"}>
              <FaSignInAlt />
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
