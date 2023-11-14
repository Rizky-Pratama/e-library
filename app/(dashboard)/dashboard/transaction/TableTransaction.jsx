import ButtonDelete from "@/app/components/Buttons/Button";

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
  const res = await fetch("http://localhost:3000/api/peminjaman", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    next:{
      tags: ["peminjaman"],
    }
  }).then((res) => res.json());
  const body = res.data;
  
  const option = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return (
    <table className="w-full text-sm text-left text-slate-500 dark:text-slate-400 shadow-lg">
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
        {body?.length === 0 && (
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
                {i + 1}
              </th>
              <td className="px-6 py-4">{buku.judul}</td>
              <td className="px-6 py-4">{anggota.nama}</td>
              <td className="px-6 py-4">{status}</td>
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
                {/* <Link
                  href={"edit/transaction/" + id}
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Edit
                </Link> */}
                <ButtonDelete id={id} api="peminjaman">Hapus</ButtonDelete>
              </td>
            </tr>
          )
        )}
      </tbody>
    </table>
  );
}
