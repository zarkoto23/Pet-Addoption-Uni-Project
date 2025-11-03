import React from "react";

export function NavigationMenu({ children }) {
  return (
    <nav className="relative flex items-center justify-start gap-2 font-extrabold">
      {children}
      <div className=" absolute top-full left-0 w-full bg-popover shadow-md rounded-md mt-2"></div>
    </nav>
  );
}
