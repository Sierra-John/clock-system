"use client";

import { loginAdmin } from "@/actions/actions";
import { useFormState } from "react-dom";

const initialState = { message: "" };

export default function AdminForm() {
  const [state, formAction] = useFormState(loginAdmin, initialState);

  return (
    <form
      action={formAction}
      className="flex flex-col justify-center items-center"
    >
      <input
        type="text"
        name="username"
        placeholder="Username..."
        className="rounded-[30px] border-2 border-brd-inactive w-[532px] h-[48px] my-[15px] pl-[1.5rem]"
      />
      <input
        type="password"
        name="password"
        placeholder="Password..."
        className="rounded-[30px] border-2 border-brd-inactive w-[532px] h-[48px] my-[15px] pl-[1.5rem]"
      />
      <button className="text-[18px] text-white bg-val-red font-bold w-[532px] h-[48px] my-[15px] rounded-[44px]">
        Continue
      </button>
      <p className="text-[18px] text-error font-bold mt-[15px]">
        {state?.message}
      </p>
    </form>
  );
}
