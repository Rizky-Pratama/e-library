import Image from "next/image";
const Avatar = () => {
  return (
    <Image
      alt="profile"
      src={"/avatar.jpg"}
      width="38"
      height="38"
      className="rounded-full shadow border-2 border-slate-900/10 hover:-translate-y-1 transition-all cursor-pointer"
    />
  );
};

export default Avatar;
