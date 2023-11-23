"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Form = ({ dataInput }) => {
  const [isLoding, setIsLoding] = useState(false);
  const router = useRouter();
  const { dataInputAnggota, dataInputBuku, dataInputStaff } = dataInput;
  const notify = (message) => {
    toast.success(`🦄 ${message}!`, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      onClose: () => router.push("/dashboard/transaction"),
    });
  };
  async function create(e) {
    e.preventDefault();
    setIsLoding(true);
    const dataForm = new FormData(e.target);
    const datas = {};
    for (var pair of dataForm.entries()) {
      datas[pair[0]] = pair[1];
    }

    const res = await fetch("/api/peminjaman", {
      method: "POST",
      body: JSON.stringify(datas),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    console.log(data);
    setIsLoding(false);
    notify(data.message);
  }
  return (
    <form onSubmit={create} method="POST">
      <div className="grid gap-6 mb-6 md:grid-cols-2">
        <div>
          <label
            htmlFor="bookName"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Buku*
          </label>
          <select
            id="bookName"
            name="bukuId"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          >
            {dataInputBuku.map(({ id, judul, kategori }) => (
              <option
                key={id}
                value={id}
              >{`${id}   ${judul} ${kategori.nama_kategori}`}</option>
            ))}
          </select>
        </div>
        <div>
          <label
            htmlFor="namaAnggota"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Anggota*
          </label>
          <select
            id="namaAnggota"
            name="anggotaId"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          >
            {dataInputAnggota.map(({ id, nama }) => (
              <option key={id} value={id}>{`${id}   ${nama}`}</option>
            ))}
          </select>
        </div>
        <div>
          <label
            htmlFor="company"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Status*
          </label>
          <select
            id="countries"
            name="status"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option value="Dipinjam">Dipinjam</option>
            <option value="Dikembalikan">Dikembalikan</option>
            <option value="Terlambat">Terlambat</option>
          </select>
        </div>
        <div>
          <label
            htmlFor="staf"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Nama Staff*
          </label>
          <input name="stafId" value={dataInputStaff.id} hidden required />
          <input
            type="text"
            id="staf"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            defaultValue={dataInputStaff.username}
            disabled
            required
          />
        </div>
        <div>
          <label
            htmlFor="tanggal_peminjaman"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Tanggal Pinjam*
          </label>
          <input
            type="date"
            id="tanggal_peminjaman"
            name="tanggal_peminjaman"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <div>
          <label
            htmlFor="tanggal_pengembalian"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Tanggal Pengembalian*
          </label>
          <input
            type="date"
            id="tanggal_pengembalian"
            name="tanggal_pengembalian"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
      </div>
      <div className="mb-6">
        <label
          htmlFor="Catatan"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Catatan
        </label>
        <textarea
          id="Catatan"
          rows="4"
          name="catatan"
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Tulis catatan disini..."
        ></textarea>
      </div>
      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        {isLoding && (
          <AiOutlineLoading3Quarters className=" animate-spin inline-block" />
        )}
        Submit
      </button>
    </form>
  );
};
