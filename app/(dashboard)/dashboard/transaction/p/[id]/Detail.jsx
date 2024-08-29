"use client";
import Badge from "@/components/Badge";

const Detail = ({datas}) => {
  const { buku, anggota, staf, tanggal_peminjaman, tanggal_pengembalian, id, isLate, late } = datas;
  const option = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return (
    <div className="flex flex-col overflow-x-auto gap-5">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-7 flex-wrap">
        <div className="flex flex-col items-center gap-1">
          <h3 className="text-base font-medium">ID Peminjaman</h3>
          <span className="text-sm">{id}</span>
        </div>
        <div className="flex flex-col items-center gap-1">
          <h3 className="text-base font-medium">Judul Buku</h3>
          <span className="text-sm">{buku.judul}</span>
        </div>
        <div className="flex flex-col items-center gap-1">
          <h3 className="text-base font-medium">Nama Siswa</h3>
          <span className="text-sm">
            {anggota.nama}({anggota.nomor_telepon})
          </span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <h3 className="text-base font-medium">Nama Staf</h3>
          <span className="text-sm">{staf.username}</span>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 flex-wrap">
        <div className="flex flex-col items-center gap-1">
          <h3 className="text-base font-medium">Tanggal Peminjaman</h3>
          <span className="text-sm">
            {new Date(tanggal_peminjaman).toLocaleDateString("id-ID", option)}
          </span>
        </div>
        <div className="flex flex-col items-center gap-1">
          <h3 className="text-base font-medium">Tanggal Pengembalian</h3>
          <span className="text-sm">
            {new Date(tanggal_pengembalian).toLocaleDateString("id-ID", option)}
          </span>
        </div>
        <div className="flex flex-col items-center gap-1">
          <h3 className="text-base font-medium">Status</h3>
          {isLate ? (
            <Badge color={"red"}>Terlambat</Badge>
          ) : (
            <Badge color={"green"}>Tidak terlambat</Badge>
          )}
        </div>
        <div className="flex flex-col items-center gap-1">
          <h3 className="text-base font-medium">Hari Keterlambatan</h3>
          <span className="text-sm">{late} (hari)</span>
        </div>
      </div>
    </div>
  );
};

export default Detail;
