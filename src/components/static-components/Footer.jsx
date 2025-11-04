import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="fixed bottom-0 bg-indigo-500/80 w-full">
      <div className="mx-auto max-w-7xl py-0 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* 🟩 Основни линкове */}
        <ul className="flex gap-30 text-white mt-7 ">
          <li>
            <Link to="#" className="transition hover:opacity-75 relative group">
              Contact
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-yellow-300 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>
          <li>
            <Link to="#" className="transition hover:opacity-75 relative group">
              About Us
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-yellow-300 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>
          <li>
            <Link to="#" className="transition hover:opacity-75 relative group">
              become a Volunteer
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-yellow-300 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>
        </ul>

        {/* 🟦 Иконки под тях */}
        <ul className="flex py-4">
          <li>
            <Link
              to="#"
              target="_blank"
              rel="noreferrer"
              className="transition hover:opacity-75"
            ></Link>
          </li>
        </ul>

        {/* ⚫ Copyright най-отдолу */}
        <p className="text-xs text-white ">
          © 2025 Adopt a Paw. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
