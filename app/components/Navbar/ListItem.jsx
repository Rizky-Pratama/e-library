"use client";
import Link from "next/link";
import {
  LuLayoutDashboard as Dashboard,
  LuBook as Books,
  LuUsers as Users,
  LuBookCopy,
} from "react-icons/lu";
import { VscLibrary } from "react-icons/vsc";
import { usePathname } from "next/navigation";

const listRoutes = [
  {
    title: "Dashboard",
    path: "/",
    icon: <Dashboard />,
  },
  {
    title: "Transaction",
    path: "/transaction",
    icon: <LuBookCopy />,
  },
  {
    title: "Books",
    path: "/books",
    icon: <VscLibrary />,
  },
  {
    title: "Users",
    path: "/users",
    icon: <Users />,
  },
];

const ListItem = () => {
  const pathname = usePathname();

  return (
    <ul className="py-4 flex gap-4 items-center text-base font-normal flex-nowrap overflow-x-auto md:hidden">
      {listRoutes.map((data, i) => (
        <li
          key={i}
          className={
            pathname == data.path
              ? "border-b-2 border-slate-900 dark:border-slate-200 -translate-y-1 transition-all"
              : "hover:-translate-y-1 transition-all"
          }
        >
          <Link
            href={data.path}
            className="flex gap-1 justify-center items-center"
          >
            {data.icon}
            <span>{data.title}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export const ListItemsDeks = () => {
  const pathname = usePathname();

  return (
    <ul className="py-4 flex gap-4 items-center text-base font-normal flex-nowrap overflow-x-auto max-md:hidden">
      {listRoutes.map((data, i) => (
        <li
          key={i}
          className={
            pathname == data.path
              ? "border-b-2 border-slate-900 dark:border-slate-200 -translate-y-1 transition-all cursor-pointer"
              : "hover:-translate-y-1 transition-all cursor-pointer"
          }
        >
          <Link
            href={data.path}
            className="flex gap-1 justify-center items-center"
          >
            {data.icon}
            <span>{data.title}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default ListItem;
