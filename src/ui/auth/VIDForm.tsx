"use client";

import { handleVIDLogin } from "@/actions/actions";
import { useFormState } from "react-dom";

const initialState = { message: "" };

export default function VIDForm() {
  const [state, formAction] = useFormState(handleVIDLogin, initialState);

  return (
    <form
      action={formAction}
      className="flex flex-col justify-center items-center"
    >
      <input
        required
        type="text"
        name="VID"
        placeholder="Enter Your VID..."
        className="rounded-[30px] border-2 border-brd-inactive w-[532px] h-[48px] my-[15px] pl-[1.5rem]"
      />
      <button
        type="submit"
        className="text-[18px] shadow-xl text-white bg-val-red font-bold w-[532px] h-[48px] my-[15px] rounded-[44px]"
      >
        Continue
      </button>
      <p className="text-[18px] text-error font-bold mt-[15px]">
        {state?.message}
      </p>
    </form>
  );
}
