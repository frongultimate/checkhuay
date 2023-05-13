import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex justify-center py-10">
      <div className="flex w-3/12 h-24 rounded-full bg-black-blue items-center text-white font-semibold justify-center text-xl">
        <Link href="#">View</Link>
      </div>
    </div>
  );
};

export default Navbar;
