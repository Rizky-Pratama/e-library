"use client";

import { useRouter } from "next/navigation";
import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ButtonDelete = (props) => {
  const router = useRouter();
  const { id, children, api } = props;

  const notify = (type, message) => {
    if (type === "success") {
      toast.success(`🦄 ${message}!`, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        onClose: () => router.refresh(),
      });
    } else if (type === "error") {
      toast.error(`🦄 ${message}!`, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  const deleteData = async (idP) => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/${api}/${idP}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((res) => res.json());

    if (res.success) {
      notify("success", res.message);
    } else {
      notify("error", res.message);
    }
  };

  return (
    <button
      className="inline-block font-medium text-red-600 dark:text-red-500 hover:underline"
      onClick={() => deleteData(id)}
    >
      {children}
    </button>
  );
};

export default ButtonDelete;
