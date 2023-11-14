export default function Table({ header, body, noAction = false }) {
  return (
    <table className="w-full text-sm text-left text-slate-500 dark:text-slate-400 shadow-lg">
      <thead className="text-xs text-slate-700 uppercase bg-slate-50 dark:bg-slate-700 dark:text-slate-400">
        <tr>
          {header.map((item, i) => (
            <th key={i} scope="col" className="px-6 py-4">
              {item}
            </th>
          ))}
          {noAction ? null : (
            <th scope="col" className="px-6 py-4">
              Aksi
            </th>
          )}
        </tr>
      </thead>
      <tbody className="divide-y dark:divide-slate-700">
        {body.map((item, i) => (
          <tr
            key={i}
            className="bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-600"
          >
            <th className="p-4 w-4 font-medium text-slate-900 text-center whitespace-nowrap dark:text-white">
              {item[0]}
            </th>
            {item.map((item, i) =>
              i === 0 ? null : (
                <td key={i} className="px-6 py-4">
                  {item}
                </td>
              )
            )}
            {noAction ? null : (
              <td className="px-6 py-4 space-x-2">
                <a
                  href="#"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Edit
                </a>
                <a
                  href="#"
                  className="font-medium text-red-600 dark:text-red-500 hover:underline"
                >
                  Hapus
                </a>
              </td>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
