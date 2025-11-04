export default function Footer() {
  return (
    <footer className="min-h-[50px] py-0 bg-indigo-500/80 bottom-0">

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* 🟩 Основни линкове */}
        <ul className="flex gap-20 text-white ">
          <li><a href="#" className="transition hover:opacity-75">Contact</a></li>
          <li><a href="#" className="transition hover:opacity-75">FAQs</a></li>
          <li><a href="#" className="transition hover:opacity-75">Live Chat</a></li>
        </ul>

        {/* 🟦 Иконки под тях */}
        <ul className="flex gap-6 mt-6">
          <li>
            <a href="#" target="_blank" rel="noreferrer" className="transition hover:opacity-75">
              <span className="sr-only">Facebook</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 
                  9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 
                  1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 
                  1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 
                  22 16.991 22 12z"
                />
              </svg>
            </a>
          </li>

        </ul>

        {/* ⚫ Copyright най-отдолу */}
        <p className="text-xs text-gray-500 mt-8">
          © 2025 Adopt a Paw. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
