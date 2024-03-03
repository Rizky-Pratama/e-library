import Toggle from "../ToggleMode/Toggle";
import ListItem, { ListItemsDeks } from "./ListItem";
import DropDown from "../Avatar/DropDown";
import Image from "next/image";
import { Suspense } from "react";
import Loading from "../Loading";
const Navbar = () => {
  return (
    <nav className="bg-slate-50 text-slate-950 rounded-b dark:bg-slate-800 dark:text-slate-200 shadow-sm dark:shadow-slate-700">
      <div className="px-2 pt-2 mx-auto container flex-col md:py-2">
        <div className="flex justify-between items-center">
          <div className="flex gap-2">
            <Image
              className="aspect-square w-auto h-auto"
              src={"/logo.png"}
              width={55}
              height={40}
              alt="Loogo"
              priority
            />
            <div className="flex flex-col justify-center">
              <span className="text-lg md:text-xl lg:text-2xl font-semibold dark:text-white">
                U-library
              </span>
              <span className="text-sm md:text-sm lg:text-base font-medium text-slate-700 dark:text-white">
                SMKN 8 Jakarta
              </span>
            </div>
          </div>
          <ListItemsDeks />
          <div className="flex items-center gap-2">
            <Toggle />
            <Suspense fallback={<Loading />}>
              <DropDown />
            </Suspense>
          </div>
        </div>
        <ListItem />
      </div>
    </nav>
  );
};

export default Navbar;
