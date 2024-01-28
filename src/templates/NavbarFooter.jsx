import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

export const NavbarFooter = ({phase}) => {
  return (
    <>
      <Navbar phase={phase} />
      <Outlet />
      <Footer />
    </>
  );
};
