import { LuBookMarked, LuBookmarkPlus } from "react-icons/lu";
import { TbUserStar } from "react-icons/tb";
import Card from "./Card";

const Cards = () => {
  return (
    <div className="flex flex-wrap gap-4">
      <Card
        color={"green"}
        title={"Total Buku"}
        text={80}
        icon={<LuBookMarked />}
      />
      <Card
        color={"yellow"}
        title={"Anggota"}
        text={879}
        icon={<TbUserStar />}
      />
      <Card
        color={"blue"}
        title={"Pinjaman Aktif"}
        text={343}
        icon={<LuBookmarkPlus />}
      />
    </div>
  );
};

export default Cards;
