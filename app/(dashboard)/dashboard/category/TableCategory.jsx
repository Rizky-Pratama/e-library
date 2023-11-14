import ButtonDelete from "@/app/components/Buttons/Button";
import Link from "next/link";

const header = ["Id", "Nama"];

export default async function TableCategory() {
  const res = await fetch("http://localhost:3000/api/kategori", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    next:{
      tags: ["kategori"]
    }
  }).then((res) => res.json());

  const body = res.data;
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
        {body.map(({ id, nama_kategori }, i) => (
          <tr
            key={i}
            className="bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-600"
          >
            <th className="p-4 w-4 font-medium text-slate-900 text-center whitespace-nowrap dark:text-white">
              {i + 1}
            </th>
            <td className="px-6 py-4">{nama_kategori}</td>
            <td className="px-6 py-4 space-x-2">
              {/* <Link
                href={"edit/category/" + id}
                className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
              >
                Edit
              </Link> */}
              <ButtonDelete id={id} api="kategori">
                Hapus
              </ButtonDelete>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
