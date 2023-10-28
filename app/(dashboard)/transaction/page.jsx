import { BiSearch } from "react-icons/bi";

const tableContent = {
  header: [
    "Id",
    "Id Buku",
    "Id Anggota",
    "Status",
    "Catatan",
    "Tanggal Peminjaman",
    "Tanggal Pengembalian",
    "Id Staff",
  ],
  body: [
    [21, 312, 32, "Dipinjam", "-", "23-Februari-2023", "25-Februari-2023", 4343],
    [22, 243, 453, "Dipinjam", "-", "23-Februari-2023", "24-Februari-2023", 321],
    [24, 421, 833, "Dipinjam", "-", "25-Februari-2023", "27-Februari-2023", 983],
    [12, 463, 682, "Dipinjam", "-", "4-Maret-2023", "5-Maret-2023", 635],
    [14, 423, 543, "Dipinjam", "-", "5-Maret-2023", "8-Maret-2023", 767],
    [15, 252, 523, "Dipinjam", "-", "8-Maret-2023", "14-Maret-2023", 987],
  ],
};
const page = () => {
  return (
    <>
      <div className="overflow-x-auto bg-none">
        <div className="pb-4 ">
          <label for="table-search" className="sr-only">
            Search
          </label>
          <div className="relative mt-1">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <BiSearch className="w-6 h-6 text-slate-500 dark:text-slate-400" />
            </div>
            <input
              type="text"
              id="table-search"
              className="block p-2 pl-10 text-sm text-slate-900 border border-slate-300 rounded-lg w-60 md:w-80 bg-slate-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-slate-700 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search for items"
            />
          </div>
        </div>
        <table className="w-full text-sm text-left text-slate-500 dark:text-slate-400 shadow-lg">
          <thead className="text-xs text-slate-700 uppercase bg-slate-50 dark:bg-slate-700 dark:text-slate-400">
            <tr>
              <th scope="col" className="px-6 py-4">
                #
              </th>
              <th scope="col" className="px-6 py-4">
                Product name
              </th>
              <th scope="col" className="px-6 py-4">
                Color
              </th>
              <th scope="col" className="px-6 py-4">
                Category
              </th>
              <th scope="col" className="px-6 py-4">
                Price
              </th>
              <th scope="col" className="px-6 py-4">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="divide-y dark:divide-slate-700">
            <tr className="bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-600">
              <td className="w-4 p-4">1</td>
              <th
                scope="row"
                className="px-6 py-4 font-medium text-slate-900 whitespace-nowrap dark:text-white"
              >
                Apple MacBook Pro 17
              </th>
              <td className="px-6 py-4">Silver</td>
              <td className="px-6 py-4">Laptop</td>
              <td className="px-6 py-4">$2999</td>
              <td className="px-6 py-4">
                <a
                  href="#"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Edit
                </a>
              </td>
            </tr>
            <tr className="bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-600">
              <td className="w-4 p-4">2</td>
              <th
                scope="row"
                className="px-6 py-4 font-medium text-slate-900 whitespace-nowrap dark:text-white"
              >
                Microsoft Surface Pro
              </th>
              <td className="px-6 py-4">White</td>
              <td className="px-6 py-4">Laptop PC</td>
              <td className="px-6 py-4">$1999</td>
              <td className="px-6 py-4">
                <a
                  href="#"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Edit
                </a>
              </td>
            </tr>
            <tr className="bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-600">
              <td className="w-4 p-4">3</td>
              <th
                scope="row"
                className="px-6 py-4 font-medium text-slate-900 whitespace-nowrap dark:text-white"
              >
                Magic Mouse 2
              </th>
              <td className="px-6 py-4">Black</td>
              <td className="px-6 py-4">Accessories</td>
              <td className="px-6 py-4">$99</td>
              <td className="px-6 py-4">
                <a
                  href="#"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Edit
                </a>
              </td>
            </tr>
            <tr className="bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-600">
              <td className="w-4 p-4">4</td>
              <th
                scope="row"
                className="px-6 py-4 font-medium text-slate-900 whitespace-nowrap dark:text-white"
              >
                Apple Watch
              </th>
              <td className="px-6 py-4">Silver</td>
              <td className="px-6 py-4">Accessories</td>
              <td className="px-6 py-4">$179</td>
              <td className="px-6 py-4">
                <a
                  href="#"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Edit
                </a>
              </td>
            </tr>
            <tr className="bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-600">
              <td className="w-4 p-4">5</td>
              <th
                scope="row"
                className="px-6 py-4 font-medium text-slate-900 whitespace-nowrap dark:text-white"
              >
                iPad
              </th>
              <td className="px-6 py-4">Gold</td>
              <td className="px-6 py-4">Tablet</td>
              <td className="px-6 py-4">$699</td>
              <td className="px-6 py-4">
                <a
                  href="#"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Edit
                </a>
              </td>
            </tr>
            <tr className="bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-600">
              <td className="w-4 p-4">6</td>
              <th
                scope="row"
                className="px-6 py-4 font-medium text-slate-900 whitespace-nowrap dark:text-white"
              >
                Apple iMac 27
              </th>
              <td className="px-6 py-4">Silver</td>
              <td className="px-6 py-4">PC Desktop</td>
              <td className="px-6 py-4">$3999</td>
              <td className="px-6 py-4">
                <a
                  href="#"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Edit
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default page;
