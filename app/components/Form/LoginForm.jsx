"use client";

import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const LoginForm = () => {
  const router = useRouter();
  const [res, setRes] = useState({ pending: false, messages: null });
  const onSubmit = async (e) => {
    e.preventDefault();
    setRes({ pending: true, messages: null });
    const data = new FormData(e.target);
    const res = await fetch("/api/auth/login", {
      method: "POST",
      body: data,
    }).then((res) => res.json());
    const json = await res;
    setRes({ pending: false, messages: json.messages });

    if (json.data) {
      router.push("/dashboard");
    }
  };
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center sm:py-12">
      <div className="p-10 xs:p-0 mx-auto md:w-full md:max-w-md">
        <div className="flex flex-col items-center mb-6">
          <Image
            className="object-cover"
            src={"/logo.png"}
            width={55}
            height={40}
            alt="Loogo"
          />
          <h1 className="font-bold text-center text-2xl">U-library</h1>
          <span className="text-sm md:text-sm lg:text-base font-medium text-slate-700 dark:text-white">
            SMKN 8 Jakarta
          </span>
        </div>
        {res.messages && (
          <div
            className="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400"
            role="alert"
          >
            <span className="font-medium">{res.messages}</span>
          </div>
        )}
        <div className="bg-white shadow w-full rounded-lg">
          <form onSubmit={onSubmit} className="px-5 py-7">
            <label className="font-semibold text-sm text-gray-600 pb-1 block">
              Usename
            </label>
            <input
              name="username"
              type="text"
              required
              className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
            />
            <label className="font-semibold text-sm text-gray-600 pb-1 block">
              Password
            </label>
            <input
              name="password"
              type="password"
              required
              className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
            />
            <button
              disabled={res.pending}
              type="submit"
              className="transition duration-200 bg-blue-500 hover:bg-blue-600 focus:bg-blue-700 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block"
            >
              <span className="inline-block mr-2">Login</span>
              {res.pending ? (
                <AiOutlineLoading3Quarters className=" animate-spin inline-block" />
              ) : (
                <HiOutlineArrowNarrowRight className=" inline-block" />
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
