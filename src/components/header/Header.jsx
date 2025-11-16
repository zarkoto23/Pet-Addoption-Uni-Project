import { NavLink } from "react-router-dom";
import { useLogout } from "../../api/authApi";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

export default function Header() {
  const { logout } = useLogout();
  const { accessToken, email } = useContext(UserContext);

  return (
    <header className="
      fixed 
      top-0 left-0 
      w-full 
      h-[90px]              /* ФИКСИРАНА ВИСОЧИНА */
      z-50 
      backdrop-blur-xs 
      bg-gradient-to-r from-indigo-500/50 via-purple-400/50 to-indigo-400/50
      flex items-center     /* Центрира съдържанието вертикално */
      px-8
    ">
      <div className="w-full flex items-center justify-between">

        {/* Лого + Логнат email */}
        <div className="flex items-center gap-6">
          <NavLink to={"/"}>
            <img
              src="icon.png"
              className="w-20 h-20 object-contain -rotate-30 transition-transform duration-500 hover:rotate-0 hover:scale-110"
            />
          </NavLink>

          {accessToken && (
            <p className="text-xl flex items-center gap-2">
              Logged in as:
              <NavLink to={"/profile"}>
                <span className="text-yellow font-semibold underline">
                  {email}
                </span>
              </NavLink>
            </p>
          )}
        </div>

        {/* Навигация */}
        <ul className="flex items-center gap-12 text-xl font-semibold">
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
                className="relative group pb-1 cursor-pointer"
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
