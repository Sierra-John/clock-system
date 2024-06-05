"use client";

import { loginEmployee, logoutEmployee } from "@/actions/actions";
import { useRouter } from "next/navigation";

interface AuthButtonInterface {
  type: string;
  VID: string;
}

export default function AuthButton({ type, VID }: AuthButtonInterface) {
  return type === "Cancel" ? (
    <CancelButton />
  ) : (
    <ActionButton type={type} VID={VID} />
  );
}

function CancelButton() {
  const router = useRouter();
  return (
    <button
      onClick={() => router.replace("/")}
      className="bg-[#58595B] shadow-xl text-white font-bold text-[18px] h-[48px] px-[80px] rounded-[44px]"
    >
      Cancel
    </button>
  );
}

function ActionButton({ type, VID }: AuthButtonInterface) {
  return (
    <button
      onClick={async () => {
        type === "Log In"
          ? await loginEmployee(VID)
          : await logoutEmployee(VID);
        console.log("Logged in");
      }}
      className="bg-val-red text-white shadow-xl font-bold text-[18px] h-[48px] px-[80px] rounded-[44px]"
    >
      {type}
    </button>
  );
}
