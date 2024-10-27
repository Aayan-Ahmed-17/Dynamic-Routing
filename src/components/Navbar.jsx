import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-center gap-20 bg-slate-600 text-white p-5 text-2xl w-full">
      <h2>
        <Link to={"Login"}>Login</Link>
      </h2>
      <h2>
        <Link to={"Register"}>Register</Link>
      </h2>
      <h2>
        <Link to={"Product"}>Product</Link>
      </h2>
      <h2>
        <Link to={"Productdetail"}>Single Product</Link>
      </h2>
    </div>
  );
};

export default Navbar;
