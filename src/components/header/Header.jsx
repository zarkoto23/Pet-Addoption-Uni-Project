import { NavLink } from "react-router-dom";

import { useLogout } from "../../api/authApi";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
export default function Header() {
  const { logout } = useLogout();
  const { accessToken, email } = useContext(UserContext);

  return (
    <header className="fixed backdrop-blur-xs top-0 left-0 w-full z-50 bg-gradient-to-r from-indigo-500/50 via-purple-400/50 to-indigo-400/50 ">
      <div className="flex items-center justify-around text-grey-500">
        <div className="flex items-center">
          <NavLink to={"/"}>
            <img
              src="icon.png"
              className="w-30 h-30 object-contain -rotate-30 transition-transform ease-in-out duration-500 transform hover:rotate-0 hover:scale-120"
            />
          </NavLink>
          {accessToken && (
            <p className="flex gap-[60px] text-xl  mt-15">
              Logged in as:
              <NavLink to={"/profile"}>
                <span className="text-yellow font-semibold underline">
                  {email}
                </span>
              </NavLink>
            </p>
          )}
        </div>

        <ul className="flex gap-[60px] text-xl font-semibold mt-15">
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              `relative group pb-1 ${isActive ? "text-yellow-300" : ""}`
            }
          >
            Home
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-yellow-300 transition-all duration-300 group-hover:w-full"></span>
          </NavLink>

          <NavLink
            to={"/catalog"}
            className={({ isActive }) =>
              `relative group pb-1 ${isActive ? "text-yellow-300" : ""}`
            }
          >
            Our Pets/catalog
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-yellow-300 transition-all duration-300 group-hover:w-full"></span>
          </NavLink>

          {accessToken ? (
            <>
              <NavLink
                to="/create"
                className={({ isActive }) =>
                  `relative group pb-1 ${isActive ? "text-yellow-300" : ""}`
                }
              >
                Create new
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-yellow-300 transition-all duration-300 group-hover:w-full"></span>
              </NavLink>

              <NavLink
                to="/profile"
                className={({ isActive }) =>
                  `relative group pb-1 ${isActive ? "text-yellow-300" : ""}`
                }
              >
                Profile
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-yellow-300 transition-all duration-300 group-hover:w-full"></span>
              </NavLink>

              <button
                onClick={logout}
                className="relative group pb-1 text-grey-500 cursor-pointer"
              >
                Logout
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-yellow-300 transition-all duration-300 group-hover:w-full"></span>
              </button>
            </>
          ) : (
            <>
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  `relative group pb-1 ${isActive ? "text-yellow-300" : ""}`
                }
              >
                Login
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-yellow-300 transition-all duration-300 group-hover:w-full"></span>
              </NavLink>

              <NavLink
                to="/register"
                className={({ isActive }) =>
                  `relative group pb-1 ${isActive ? "text-yellow-300" : ""}`
                }
              >
                Register
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-yellow-300 transition-all duration-300 group-hover:w-full"></span>
              </NavLink>
            </>
          )}
        </ul>
      </div>
    </header>
  );
}
