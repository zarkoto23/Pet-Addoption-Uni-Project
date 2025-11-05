import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-indigo-500/80 ">
      <div className="flex items-center justify-around text-white">
        <div className="flex items-center">
          <NavLink to={"/"}>
            <img
              src="icon.png"
              className="w-30 h-30 object-contain -rotate-30 transition-transform ease-in-out duration-500 transform hover:rotate-0 hover:scale-120"
            />
          </NavLink>
        </div>

        <ul className="flex gap-[40px] text-xl font-semibold mt-15">
          <NavLink 
            to={"/"} 
            className={({ isActive }) => 
              `relative group pb-1 ${isActive ? 'text-yellow-300' : ''}`
            }
          >
            Home
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-yellow-300 transition-all duration-300 group-hover:w-full"></span>
          </NavLink>
          
          <NavLink 
            to="/login" 
            className={({ isActive }) => 
              `relative group pb-1 ${isActive ? 'text-yellow-300' : ''}`
            }
          >
            Login
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-yellow-300 transition-all duration-300 group-hover:w-full"></span>
          </NavLink>
          
          <NavLink 
            to='/register' 
            className={({ isActive }) => 
              `relative group pb-1 ${isActive ? 'text-yellow-300' : ''}`
            }
          >
            Register
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-yellow-300 transition-all duration-300 group-hover:w-full"></span>
          </NavLink>
          
          <NavLink 
            to={'/toast'} 
            className={({ isActive }) => 
              `relative group pb-1 ${isActive ? 'text-yellow-300' : ''}`
            }
          >
            About
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-yellow-300 transition-all duration-300 group-hover:w-full"></span>
          </NavLink>
        </ul>
      </div>
    </header>
  );
}