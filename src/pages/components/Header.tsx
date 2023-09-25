import Link from "next/link";
import React from "react";

export const Header: React.FC = () => {
  return (
    <nav className="navbar bg-slate-600  text-xl font-bold sticky top-0 z-10">
      <div className="navbar-start">
        <Link href="/" className="hover:text-white cursor-pointer">
          LOGO
        </Link>
      </div>
      <div className="navbar-end">
        <Link href="/blog" className="hover:text-white cursor-pointer px-3">
          Blog
        </Link>

        <Link href="/concept" className="hover:text-white cursor-pointer px-3">
          Concept
        </Link>

        <Link
          href="/connexion"
          className="hover:text-white cursor-pointer px-3"
        >
          Connexion
        </Link>
      </div>
    </nav>
  );
};
