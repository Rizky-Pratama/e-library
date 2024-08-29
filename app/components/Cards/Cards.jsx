import { LuBookMarked, LuBookmarkPlus } from "react-icons/lu";
import { TbUserStar } from "react-icons/tb";
import Card from "./Card";
import { getCountBuku } from "@/utils/dbUtils/buku";
import { getCountAnggota } from "@/utils/dbUtils/anggota";
import { getCountPeminjaman } from "@/utils/dbUtils/peminjaman";

const Cards = async () => {
  const countBuku = await getCountBuku();
  const countAnggota = await getCountAnggota();
  const countPeminjaman = await getCountPeminjaman();
  return (
    <div className="flex flex-wrap gap-4">
      <Card
        color={"green"}
        title={"Total Buku"}
        text={countBuku}
        icon={<LuBookMarked />}
      />
      <Card
        color={"yellow"}
        title={"Anggota"}
        text={countAnggota}
        icon={<TbUserStar />}
      />
      <Card
        color={"blue"}
        title={"Pinjaman Aktif"}
        text={countPeminjaman}
        icon={<LuBookmarkPlus />}
      />
    </div>
  );
};

export default Cards;
