"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BiHomeAlt, BiSpreadsheet, BiGroup, BiWrench } from "react-icons/bi";

export default function SideNavLinks() {
  const curPath = usePathname();
  const activeLink =
    "text-val-red font-bold underline underline-offset-4 decoration-2";
  const unactiveLink =
    "ml-[50px] mt-[30px] hover:text-val-red hover:underline hover:font-bold hover:underline-offset-4 decoration-2";
  const navLinks = [
    {
      key: 0,
      link: "/admin/timesheet",
      title: "Timesheet",
      logo: <BiSpreadsheet className="h-[38px] w-[38px]" />,
    },
    {
      key: 1,
      link: "/admin/employees",
      title: "Employees",
      logo: <BiGroup className="h-[38px] w-[38px]" />,
    },
    {
      key: 2,
      link: "/admin/settings",
      title: "Settings",
      logo: <BiWrench className="h-[38px] w-[38px] " />,
    },
  ];

  return (
    <ul>
      {navLinks.map((link) => (
        <li
          key={link.key}
          className={
            link.link == curPath
              ? `${unactiveLink} ${activeLink}`
              : `${unactiveLink} font-semi`
          }
        >
          <Link
            href={link.link}
            className="flex flex-row gap-[20px] items-center"
          >
            {link.logo}
            <h2 className="text-[18px]">{link.title}</h2>
          </Link>
        </li>
      ))}
    </ul>
  );
}
