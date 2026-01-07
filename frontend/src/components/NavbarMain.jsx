import React from "react";
import { Link, useNavigate } from "react-router-dom";

function NavbarMain() {
  const user = { name: "Steve Henderson " };
  const navigate = useNavigate();

  const logoutUser = () => {
    navigate("/");
  };
  return (
    <>
      <div className="shadow bg-amber-50">
        <nav className="flex items-centre justify-between max-w-7xl mx-auto px-4 py-3.5">
          <Link to="/">
            <img
              src="/logo.png"
              alt="logo"
              className="h-14 w-14 object-contain"
            />
          </Link>
          <div className="flex items-center gap-4 text-sm">
            <p className="max-sm:hidden">Hi, {user?.name}</p>
            <button
              onClick={logoutUser}
              className="bg-amber-100 hover:bg-slate-600 border border-gray-300 px-7 py-1.5 rounder-full active:scale-95 transition-all rounded-full"
            >
              Logout
            </button>
          </div>
        </nav>
      </div>
    </>
  );
}

export default NavbarMain;
