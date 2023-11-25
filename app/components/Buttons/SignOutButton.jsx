"use client";

import { useRouter } from "next/navigation";

const SignOutButton = () => {
  const router = useRouter();
  const handleClick = async () => {
    const res = await fetch("/api/auth/signout", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());
    console.log(res);

    if (res.success) {
      router.push("/login");
    }
  };
  return (
    <button
      onClick={handleClick}
      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
    >
      Sign out
    </button>
  );
};

export default SignOutButton;
