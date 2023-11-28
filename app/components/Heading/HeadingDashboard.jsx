"use client";
import { usePathname } from "next/navigation";
import { listRoutes } from "../Navbar/ListItem";

const HeadingDashboard = () => {
  const pathName = usePathname();
  const result = listRoutes.find(({ path }) => path === pathName);
  return result ? (
    <h1 className="my-5 text-2xl font-medium text-slate-600 dark:text-slate-300">
      {result?.title}
    </h1>
  ) : null;
};

export default HeadingDashboard;