import stackedLogo from "../../../public/stacked-logo.svg";
import Image from "next/image";
import Link from "next/link";
import AuthCard from "@/ui/auth/AuthCard";
import VIDForm from "@/ui/auth/VIDForm";

export default function Page() {
  return (
    <AuthCard>
      <Image src={stackedLogo} alt="Valencia Stacked Logo" />
      <VIDForm />
      <div className="flex justify-center flex-wrap items-center gap-[44px]">
        <hr className="border-black w-[155px]" />
        <Link
          href="/admin"
          className="text-[18px] text-val-red font-bold hover:text-val-red-hover"
        >
          Admin Login
        </Link>
        <hr className="border-black w-[155px]" />
      </div>
    </AuthCard>
  );
}
