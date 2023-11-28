"use client";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Button = ({ id, children }) => {
  const router = useRouter();

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
        onClose: () => router.push("/dashboard/transaction/"),
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

  const cliked = async () => {
    const res = await fetch(
      `/api/pengembalian/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .catch((err) => {
        console.log(err.message);
        return {
          data: null,
        };
      });
    if (res.success) {
      notify("success", res.message);
    } else {
      notify("error", res.message);
    }
  };
  return (
    <button
      onClick={() => cliked()}
      className="px-5 py-2 text-base font-medium text-white inline-flex gap-2 items-center bg-green-600 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 rounded-lg text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
    >
      {children}
    </button>
  );
};

export default Button;
