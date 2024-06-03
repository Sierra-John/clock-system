import AuthCard from "@/ui/auth/AuthCard";
import stackedLogo from "../../../public/stacked-logo.svg";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <AuthCard>
      <Image src={stackedLogo} alt="Valencia Stacked Logo" />
      <form action="" className="flex flex-col justify-center items-center">
        <input
          type="text"
          placeholder="Username..."
          className="rounded-[30px] border-2 border-brd-inactive w-[532px] h-[48px] my-[15px] pl-[1.5rem]"
        />
        <input
          type="password"
          placeholder="Password..."
          className="rounded-[30px] border-2 border-brd-inactive w-[532px] h-[48px] my-[15px] pl-[1.5rem]"
        />
        <button className="text-[18px] text-white bg-val-red font-bold w-[532px] h-[48px] my-[15px] rounded-[44px]">
          Continue
        </button>
      </form>
      <div className="flex justify-center flex-wrap items-center gap-[44px]">
        <hr className="border-black w-[155px]" />
        <Link href="/" className="text-[18px] text-val-red font-bold">
          Employee Login
        </Link>
        <hr className="border-black w-[155px]" />
      </div>
    </AuthCard>
  );
}
