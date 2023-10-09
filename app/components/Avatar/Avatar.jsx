import Image from "next/image";
const Avatar = () => {
  return (
    <Image
      alt="profile"
      src={"/avatar.jpg"}
      width="38"
      height="38"
      className="rounded-full ring-4 ring-slate-900/10 dark:ring-slate-200/10 cursor-pointer"
    />
  );
};

export default Avatar;
