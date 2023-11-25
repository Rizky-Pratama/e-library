const header = ["Id", "Nama", "Username", "Email", "No Telepon", "Peran"];

export default async function TableStaff() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/staff`, {
    next: {
      tags: ["staff"],
    },
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
        {body?.map(({ id, nama, username, email, nomor_telepon, peran }, i) => (
          <tr
            key={i}
            className="bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-600"
          >
            <th className="p-4 w-4 font-medium text-slate-900 text-center whitespace-nowrap dark:text-white">
              {i + 1}
            </th>
            <td className="px-6 py-4">{nama}</td>
            <td className="px-6 py-4">{username}</td>
            <td className="px-6 py-4">{email}</td>
            <td className="px-6 py-4">{nomor_telepon}</td>
            <td className="px-6 py-4">{peran}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
