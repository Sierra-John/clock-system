import stackedLogo from "../../../public/stacked-logo.svg";
import Image from "next/image";
import Link from "next/link";
import { BiLogOut } from "react-icons/bi";
import SideNavLinks from "./SideNavLinks";

export default function SideNavAdmin() {
  return (
    <div className="h-screen w-[318px] bg-val-yellow">
      <Image
        src={stackedLogo}
        height={80}
        width={218.14}
        alt="Valencia Stacked Logo"
        className="ml-[50px] mt-[70px] mb-[75px]"
      />
      <SideNavLinks />
      <div className="ml-[50px] absolute bottom-0 mb-[70px]">
        <Link
          href="/admin"
          className="flex flex-row gap-[20px] items-center font-medium hover:text-val-red hover:underline hover:font-bold hover:underline-offset-4 decoration-2"
        >
          <BiLogOut className="h-[38px] w-[38px]" />
          <h2 className="text-[18px]">Logout</h2>
        </Link>
      </div>
    </div>
  );
}
