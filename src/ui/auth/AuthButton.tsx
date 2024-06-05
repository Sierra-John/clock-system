"use client";

import { useRouter } from "next/navigation";

interface AuthButtonInterface {
  type: string;
  action?: Function;
}

export default function AuthButton({ type, action }: AuthButtonInterface) {
  return type === "Cancel" ? <CancelButton /> : <ActionButton type={type} />;
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

function ActionButton({ type, action }: AuthButtonInterface) {
  return (
    <button className="bg-val-red text-white shadow-xl font-bold text-[18px] h-[48px] px-[80px] rounded-[44px]">
      {type}
    </button>
  );
}
