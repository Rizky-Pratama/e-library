import { getUserFromCookie } from "@/utils/user";
import Avatar from "./Avatar";
import SignOutButton from "../Buttons/SignOutButton";

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
          <SignOutButton />
        </div>
      </div>
    </Avatar>
  );
};

export default DropDown;
