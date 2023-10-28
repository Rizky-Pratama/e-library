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

export const listRoutes = [
  {
    title: "Dashboard",
    path: "/dashboard",
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

const isMobile = (device = "mobile") => {
  if (device === "mobile") {
    return "md:hidden";
  } else if (device === "desktop") {
    return "max-md:hidden";
  }
};

const ListItems = ({ device }) => {
  const pathname = usePathname();

  return (
    <ul
      className={
        "py-4 flex gap-4 items-center text-base font-normal flex-nowrap overflow-x-auto " +
        isMobile(device)
      }
    >
      {listRoutes.map((data, i) => (
        <li
          key={i}
          className={
            pathname == data.path
              ? "border-b-2 border-slate-950 dark:border-slate-200 -translate-y-1 transition-all cursor-pointer"
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

const ListItem = () => {
  return <ListItems/>;
};

export const ListItemsDeks = () => {
  return <ListItems device={"desktop"} />;
};

export default ListItem;
