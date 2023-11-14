import { getUserFromCookie } from "@/app/utils/user";
import Link from "next/link";
import Avatar from "./Avatar";

const DropDown = async () => {
  const res = await getUserFromCookie();
  const { name, email } = res;
  return (
    <Avatar>
      <div
        id="dropdownInformation"
        className="absolute top-16 right-0 z-10 bg-slate-50 divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
      >
        <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
          <div>{name}</div>
          <div className="font-medium truncate">{email}</div>
        </div>
        <div className="py-2">
          <Link
            href="/signout"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
          >
            Sign out
          </Link>
        </div>
      </div>
    </Avatar>
  );
};

export default DropDown;
