"use client";

import { Entry } from "@prisma/client";
import { useState } from "react";

type Entries = {
  id: number;
  VID: string;
  signIn: Date;
  signOut: Date;
  firstName: string;
  lastName: string;
};

export default function TableEntries() {
  const [data, setData] = useState<Entries>();

  return <div>TableEntries</div>;
}
