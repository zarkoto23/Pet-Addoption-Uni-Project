import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="
    mt-auto
      bg-gradient-to-r 
      from-indigo-500/50 
      via-purple-300/50 
      to-pink-300/50
      flex 
      flex-col 
      justify-center 
      items-center
      h-20
    ">
      <ul className="flex gap-32 text-grey-500 mb-2">
        <li>
          <NavLink
            to="/volunteer"
            className={({ isActive }) =>
              `relative group pb-1 ${isActive ? "text-yellow-300" : ""}`
            }
          >
            Become a Volunteer
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-yellow-300 transition-all duration-300 group-hover:w-full"></span>
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `relative group pb-1 ${isActive ? "text-yellow-300" : ""}`
            }
          >
            Contact
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-yellow-300 transition-all duration-300 group-hover:w-full"></span>
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `relative group pb-1 ${isActive ? "text-yellow-300" : ""}`
            }
          >
            About
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-yellow-300 transition-all duration-300 group-hover:w-full"></span>
          </NavLink>
        </li>
      </ul>

      <p className="text-xs text-grey-700">
        © 2025 Adopt a Paw. All rights reserved.
      </p>
    </footer>
  );
}
