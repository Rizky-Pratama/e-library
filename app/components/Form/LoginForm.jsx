"use client";
import { useState } from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
const Index = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handlerOnSubmit = async () => {
    const response = await fetch("/api/auth/login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response) {
      console.log("Oke");
    } else {
      console.log("WAduhh");
    }
  };
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center sm:py-12">
      <div className="p-10 xs:p-0 mx-auto md:w-full md:max-w-md">
        <h1 className="font-bold text-center text-2xl mb-5">Perpustakaan</h1>
        <div className="bg-white shadow w-full rounded-lg">
          <form onSubmit={handlerOnSubmit} className="px-5 py-7">
            <label className="font-semibold text-sm text-gray-600 pb-1 block">
              E-mail
            </label>
            <input
              onChange={(event) => setUsername(event.target.value)}
              value={username}
              type="text"
              className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
            />
            <label className="font-semibold text-sm text-gray-600 pb-1 block">
              Password
            </label>
            <input
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              type="text"
              className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
            />
            <button
              type="submit"
              className="transition duration-200 bg-blue-500 hover:bg-blue-600 focus:bg-blue-700 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block"
            >
              <span className="inline-block mr-2">Login</span>
              <HiOutlineArrowNarrowRight className=" inline-block" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Index;
