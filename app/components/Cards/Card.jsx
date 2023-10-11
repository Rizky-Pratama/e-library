import { LuBookMarked } from "react-icons/lu";

const Card = ({ color , title , text ,icon}) => {
  let borderColor = "";
  let textColor = "";

  const whatColor = () => {
    switch (color) {
      case "green":
        borderColor = "border-green-600";
        textColor = "text-green-600";
        break;
      case "yellow":
        borderColor = "border-yellow-500";
        textColor = "text-yellow-500";
        break;
      case "blue":
        borderColor = "border-blue-500";
        textColor = "text-blue-500";
        break;

      default:
        break;
    }
  };

  whatColor(color);
  
  return (
    <div
      className={
        "flex flex-1 basis-full md:basis-[45%] lg:basis-1/4 justify-between p-4 bg-slate-50 dark:bg-slate-800 rounded-lg border-l-4 shadow-md dark:shadow-sm dark:shadow-white/20 transition-colors " +
        borderColor
      }
    >
      <div className="flex flex-col">
        <h3 className={"text-md font-medium " + textColor}>{title}</h3>
        <span className="text-2xl font-medium text-slate-600 dark:text-slate-300">
          {text}
        </span>
      </div>
      <div className="grid place-content-center text-4xl text-slate-300 dark:text-slate-600">
        {icon}
      </div>
    </div>
  );
};

export default Card;
