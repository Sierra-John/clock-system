"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BiHomeAlt, BiSpreadsheet, BiGroup, BiWrench } from "react-icons/bi";

export default function SideNavLinksEmp() {
  const curPath = usePathname();
  const activeLink =
    "text-val-red font-bold underline underline-offset-4 decoration-2";
  const unactiveLink =
    "ml-[50px] mt-[30px] hover:text-val-red hover:underline hover:font-bold hover:underline-offset-4 decoration-2";
  const link = {
    key: 0,
    link: "/summary",
    title: "Timesheet",
    logo: <BiSpreadsheet className="h-[38px] w-[38px]" />,
  };

  return (
    <ul>
      <li className={`${unactiveLink} ${activeLink}`}>
        <Link
          href={link.link}
          className="flex flex-row gap-[20px] items-center"
        >
          {link.logo}
          <h2 className="text-[18px]">{link.title}</h2>
        </Link>
      </li>
    </ul>
  );
}
