"use client";
import Image from "next/image";
import { useState } from "react";
import Backdrop from "../Backdrop";
const Avatar = ({children}) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Image
        alt="profile"
        onClick={() => setOpen(!open)}
        src={"/avatar.jpg"}
        width="38"
        height="38"
        className="rounded-full ring-4 ring-slate-900/10 dark:ring-slate-200/10 cursor-pointer"
      />
      {open && children}
      {open && <Backdrop onClick={()=>setOpen(false)}/>}
    </>
  );
};

export default Avatar;
