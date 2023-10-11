import Toggle from "../ToggleMode/Toggle";
import ListItem, { ListItemsDeks } from "./ListItem";
import Avatar from "../Avatar/Avatar";
const Navbar = () => {
  return (
    <nav className="bg-slate-50 text-slate-950 rounded-b dark:bg-slate-800 dark:text-slate-200 shadow-sm dark:shadow-slate-700">
      <div className="px-2 pt-2 mx-auto container flex-col md:py-2">
        <div className="flex justify-between items-center">
          <span className="text-lg md:text-xl lg:text-2xl font-semibold dark:text-white">E-library</span>
          <ListItemsDeks />
          <div className="flex items-center gap-2">
            <Toggle />
            <Avatar />
          </div>
        </div>
        <ListItem />
      </div>
    </nav>
  );
};

export default Navbar;