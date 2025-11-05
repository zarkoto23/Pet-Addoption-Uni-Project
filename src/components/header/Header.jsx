import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-indigo-500/80">
      <div className="flex items-center justify-around  text-white ">
        <div className="flex items-center">
          <Link to={"/"}>
            <img
              src="icon.png"
              className="w-30 h-30 object-contain -rotate-30 transition-transform ease-in-out duration-500 transform hover:rotate-0 hover:scale-120"
            />
          </Link>
        </div>

        <ul className="flex gap-[40px] text-xl font-semibold">
          <Link to={"/"} className="relative group">
            Home
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-yellow-300 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link to="/login" className="relative group">
            Login
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-yellow-300 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link to='/register' className="relative group">
            Register
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-yellow-300 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link className="relative group">
            About
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-yellow-300 transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </ul>
      </div>
    </header>
  );
}

//  <div className="flex flex-col leading-tight gap-y-4 gap-6 " >
//     <h1 className=" font-bold">Adopt a Paw</h1>
//     <h2 className="ml-8">- find your new friend</h2>
//     </div>
