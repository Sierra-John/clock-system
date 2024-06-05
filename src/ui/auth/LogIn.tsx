import Link from "next/link";
import AuthButton from "./AuthButton";

export default function LogIn({
  firstName,
  VID,
}: {
  firstName: string;
  VID: string;
}) {
  return (
    <div className="flex flex-col">
      <h1 className="text-[48px]">Welcome!</h1>
      <div>
        <p className="text-[24px]">{firstName},</p>
        <p className="text-[24px]">
          you are <span className="text-val-red font-bold">signed out</span>
        </p>
      </div>
      <div className="flex gap-8 justify-between">
        <AuthButton type="Cancel" />
        <AuthButton type="Log In" />
      </div>
      <div className="flex justify-between items-center gap-[44px]">
        <hr className="border-black w-1/4" />
        <Link href="/" className="text-[18px] text-val-red font-bold ">
          View Summary
        </Link>
        <hr className="border-black w-1/4" />
      </div>
    </div>
  );
}
