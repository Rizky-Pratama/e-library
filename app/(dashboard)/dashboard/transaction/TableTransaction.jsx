import Badge from "@/app/components/Badge";
import ButtonDelete from "@/app/components/Buttons/Button";
import Link from "next/link";

const header = [
  "Id",
  "Buku",
  "Anggota",
  "Status",
  "Catatan",
  "Tanggal Peminjaman",
  "Tanggal Pengembalian",
  "Staff",
];

export default async function TableTransaction() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/peminjaman`, {
    next: {
      tags: ["peminjaman"],
    },
  })
    .then((res) => res.json())
    .catch((err) => {
      console.log(err.message);
      return {
        data: [],
      };
    });
  const body = res?.data;

  const option = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return (
    <table className="w-max overflow-x-auto text-sm text-left text-slate-500 dark:text-slate-400 shadow-lg">
      <thead className="text-xs text-slate-700 uppercase bg-slate-50 dark:bg-slate-700 dark:text-slate-400">
        <tr>
          {header.map((item, i) => (
            <th key={i} scope="col" className="px-6 py-4">
              {item}
            </th>
          ))}
          <th scope="col" className="px-6 py-4">
            Aksi
          </th>
        </tr>
      </thead>
      <tbody className="divide-y dark:divide-slate-700">
        {!body && (
          <tr className="bg-white dark:bg-slate-800">
            <td
              colSpan={header.length + 1}
              className="py-4 text-center whitespace-nowrap dark:text-white"
            >
              Tidak ada data
            </td>
          </tr>
        )}
        {body.length === 0 && (
          <tr className="bg-white dark:bg-slate-800">
            <td
              colSpan={header.length + 1}
              className="py-4 text-center whitespace-nowrap dark:text-white"
            >
              Tidak ada data
            </td>
          </tr>
        )}
        {body?.map(
          (
            {
              id,
              buku,
              anggota,
              status,
              catatan,
              tanggal_peminjaman,
              tanggal_pengembalian,
              staf,
            },
            i
          ) => (
            <tr
              key={i}
              className="bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-600"
            >
              <th className="p-4 w-4 font-medium text-slate-900 text-center whitespace-nowrap dark:text-white">
                {id}
              </th>
              <td className="px-6 py-4">{buku.judul}</td>
              <td className="px-6 py-4">{anggota.nama}</td>
              <td className="px-6 py-4">
                {status === "Dipinjam" && (
                  <Badge color="yellow">{status}</Badge>
                )}
                {status === "Dikembalikan" && (
                  <Badge color="green">{status}</Badge>
                )}
                {status === "Terlambat" && <Badge color="red">{status}</Badge>}
              </td>
              <td className="px-6 py-4">{catatan}</td>
              <td className="px-6 py-4">
                {new Date(tanggal_peminjaman).toLocaleDateString(
                  "id-ID",
                  option
                )}
              </td>
              <td className="px-6 py-4">
                {new Date(tanggal_pengembalian).toLocaleDateString(
                  "id-ID",
                  option
                )}
              </td>
              <td className="px-6 py-4">{staf.username}</td>
              <td className="px-6 py-4 space-x-2">
                {status === "Dipinjam" && (
                  <Link
                    href={"transaction/p/" + id}
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Kembalikan
                  </Link>
                )}
                <ButtonDelete id={id} api="peminjaman">
                  Hapus
                </ButtonDelete>
              </td>
            </tr>
          )
        )}
      </tbody>
    </table>
  );
}
