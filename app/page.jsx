"use client";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const cliked = () => {
    router.push("/login");
  };
  return (
    <main className="w-full h-screen flex justify-center items-center ">
      <button
        onClick={cliked}
        className="py-1 px-5 text-2xl font-semibold text-white rounded bg-sky-500"
      >
        Login
      </button>
    </main>
  );
}
