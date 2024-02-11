import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-8 py-3 bg-slate-800">
      <Link className="font-bold text-white" href={"/"}>
        CTECH CRUD Next.Js
      </Link>
      <Link className="p-2 bg-white" href={"/addStudent"}>
        Add Data
      </Link>
    </nav>
  );
};

export default Navbar;
