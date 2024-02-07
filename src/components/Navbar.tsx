"use client";
import Link from "next/link";
import React from "react";
import { TbEmergencyBed } from "react-icons/tb";
import { GiHospitalCross } from "react-icons/gi";
import { usePathname } from "next/navigation";
import classnames from "classnames";

const Navbar = () => {
  const currentPath = usePathname();
  console.log(currentPath);
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
        <GiHospitalCross className="w-14 h-14 transition-colors bg-green-500 hover:bg-teal-500 p-2 text-white rounded-full " />
      </Link>

      <ul className="flex space-x-10 ">
        {links.map((link) => (
          <Link
            key={link.href}
            className={classnames({
              "text-teal-900": link.href === currentPath,
              "text-teal-500": link.href !== currentPath,
              "hover:text-teal-700 transition-colors text-xl font-bold":true 
            })}
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
