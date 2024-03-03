import Link from "next/link";
import { BiSearch } from "react-icons/bi";
import { FiPlus } from "react-icons/fi";
import TableCategory from "./TableCategory";
import { Suspense } from "react";
import Loading from "@/components/Loading";

// export const dynamic = "auto";
// export const revalidate = false;
// export const fetchCache = "force-cache";

const Page = () => {
  return (
    <div className="overflow-x-auto bg-none">
      <div className="mb-4 px-1 pt-1 flex items-center justify-between">
        <div>
          <label htmlFor="table-search" className="sr-only">
            Search
          </label>
          <div className="relative mt-1">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <BiSearch className="w-6 h-6 text-slate-500 dark:text-slate-400" />
            </div>
            <input
              type="text"
              id="table-search"
              className="block p-2 pl-10 text-sm text-slate-900 border border-slate-300 rounded-lg w-60 md:w-80 bg-slate-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-slate-700 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search for items"
            />
          </div>
        </div>
        <Link
          href="/add/category/"
          className="px-5 py-2 text-base font-medium text-white inline-flex gap-2 items-center bg-green-600 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 rounded-lg text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        >
          <FiPlus />
          Tambah
        </Link>
      </div>
      <Suspense fallback={<Loading />}>
        <TableCategory />
      </Suspense>
    </div>
  );
};

export default Page;
