import React from "react";
import { Outlet } from "react-router-dom";
import NavbarMain from "../components/NavbarMain";

function Layout() {
  return (
    <>
      {" "}
      <div>
        <NavbarMain />
        <Outlet />
      </div>
    </>
  );
}

export default Layout;
