"use client";

import { addEmply } from "@/actions/actions";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { useEffect } from "react";
import { useFormState } from "react-dom";

const initialState = { message: "" };

export default function AddEmployeeBtn() {
  const [state, formAction] = useFormState(addEmply, initialState);
  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    if (state.message == "user created") {
      setOpen(!open);
    }
  }, [state]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="bg-green-600 hover:bg-green-500">
          Add Employee
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Employee</DialogTitle>
          <DialogDescription>
            Click save when you&apos;re done.
          </DialogDescription>
        </DialogHeader>
        <form action={formAction}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="firstName" className="text-right">
                First
              </Label>
              <Input
                required
                id="firstName"
                name="firstName"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="lastName" className="text-right">
                Last
              </Label>
              <Input
                required
                id="lastName"
                name="lastName"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="VID" className="text-right">
                VID
              </Label>
              <Input required id="VID" name="VID" className="col-span-3" />
            </div>
          </div>
          <p className="text-error text-sm font-bold self-end text-center">
            {state?.message}
          </p>
          <div className="flex justify-end">
            <Button type="submit" className="mt-4">
              Save changes
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
