"use client";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();
  router.push("/login");
  return <div></div>;
};
export default Page;