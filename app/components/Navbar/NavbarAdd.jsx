"use client";
import { usePathname, useRouter } from "next/navigation";
import { MdArrowBackIosNew } from "react-icons/md";

const nameTitle = [
  {
    path: "/add/book",
    title: "Add Book",
  },
  {
    path: "/add/transaction",
    title: "Add Transaction",
  },
  {
    path: "/add/category",
    title: "Add Category",
  },
  {
    path: "/add/user",
    title: "Add User",
  },
  {
    path: "/add/staff",
    title: "Add Staff",
  },
];

const NavbarAdd = () => {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <header className="bg-white dark:bg-slate-800 mb-3  py-4 px-4 md:px-2 mx-auto max-w-3xl rounded">
      <nav>
        <div className="flex">
          <button
            onClick={() => router.back()}
            className="flex items-center gap-1 text-slate-600 dark:text-slate-200"
          >
            <MdArrowBackIosNew />
            <span>Back</span>
          </button>
          <h1 className="text-xl font-semibold text-center basis-full">
            {nameTitle.find((item) => item.path === pathname)?.title}
          </h1>
        </div>
      </nav>
    </header>
  );
};

export default NavbarAdd;
