import Link from "next/link";
import React from "react";
import { TbEmergencyBed } from "react-icons/tb";
import { GiHospitalCross } from "react-icons/gi";

const Navbar = () => {
  const links = [
    { label: "Dashboard", href: "/" },
    { label: "Patients", href: "/patients" },
    { label: "Doctors", href: "/doctors" },
  ];

  return (
    <nav
      className="flex space-x-6 border-b pb-10 mt-10
      px-10  h-14 items-center justify-between 
    "
    >
      <Link href="/">
        <GiHospitalCross className="w-14 h-14 bg-green-500 hover:bg-green-600 p-2 text-white rounded-full " />
      </Link>

      <ul className="flex space-x-10 ">
        {links.map((link) => (
          <Link
            key={link.href}
            className="font-bold text-xl text-green-500 hover:text-green-600 transition-colors"
            href={link.href}
          >
            <li>{link.label}</li>
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
