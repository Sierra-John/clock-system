"use client";

import { deleteEmpl, editEmplData } from "@/actions/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { AlertDialog } from "@radix-ui/react-alert-dialog";
import { MoreHorizontal } from "lucide-react";
import React, { useEffect } from "react";
import { useFormState } from "react-dom";

export default function SheetActionMenu({
  firstName,
  lastName,
  VID,
  id,
}: {
  firstName: string;
  lastName: string;
  VID: string;
  id: number;
}) {
  const initialState = {
    firstName: firstName,
    lastName: lastName,
    VID: VID,
    id: id,
    message: "",
  };
  const [state, formAction] = useFormState(editEmplData, initialState);
  const [open, setOpen] = React.useState(false);

  const [deletedState, formDeleteAction] = useFormState(
    deleteEmpl,
    initialState
  );

  useEffect(() => {
    if (
      state.message == "User updated" ||
      deletedState.message == "User deleted"
    ) {
      setOpen(!open);
    }
  }, [state, deletedState]);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger>
        <Button variant="ghost" className="h-8 w-8 p-0">
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>{`Edit ${firstName}\'s information`}</SheetTitle>
          <SheetDescription>Click save when you&apos;re done.</SheetDescription>
        </SheetHeader>

        <form action={formAction}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="firstName" className="text-right">
                First
              </Label>
              <Input
                id="firstName"
                name="firstName"
                required
                defaultValue={firstName}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="lastName" className="text-right">
                Last
              </Label>
              <Input
                id="lastName"
                name="lastName"
                required
                defaultValue={lastName}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="VID" className="text-right">
                VID
              </Label>
              <Input
                id="VID"
                name="VID"
                required
                defaultValue={VID}
                className="col-span-3"
              />
            </div>
          </div>
          <p className="text-error text-sm font-bold self-end text-center">
            {state?.message}
          </p>
          <div className="py-4 flex justify-between">
            <AlertDialog>
              <Button
                formAction={formDeleteAction}
                type="submit"
                variant="destructive"
              >
                Delete Employee
              </Button>
            </AlertDialog>
            <Button type="submit">Save changes</Button>
          </div>
        </form>
      </SheetContent>
    </Sheet>
  );
}
