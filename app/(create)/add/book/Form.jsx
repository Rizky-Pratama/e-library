"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Form = ({ dataInput }) => {
  const [isLoding, setIsLoding] = useState(false);
  const router = useRouter();
  const { dataInputKategori } = dataInput;

  const notify = (type, message) => {
    if (type === "success") {
      toast.success(`🦄 ${message}!`, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        onClose: () => router.push("/dashboard/books"),
      });
    } else if (type === "error") {
      toast.error(`🦄 ${message}!`, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };
  async function create(e) {
    e.preventDefault();
    setIsLoding(true);
    const dataForm = new FormData(e.target);
    const datas = {};
    for (var pair of dataForm.entries()) {
      datas[pair[0]] = pair[1];
    }

    const res = await fetch("/api/buku", {
      method: "POST",
      body: JSON.stringify(datas),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();
    setIsLoding(false);
    console.log(data);

    if (data.success) {
      notify("success", data.message);
    } else {
      notify("error", data.message);
    }
  }
  return (
    <form onSubmit={create} method="POST">
      <div className="grid gap-6 mb-6 md:grid-cols-2">
        <div>
          <label
            htmlFor="judul"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Judul*
          </label>
          <input
            type="text"
            id="judul"
            name="judul"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <div>
          <label
            htmlFor="kategoriId"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Kategori*
          </label>
          <select
            id="kategoriId"
            name="kategoriId"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          >
            {dataInputKategori.map(({ id, nama_kategori }) => (
              <option key={id} value={id}>{`${id}   ${nama_kategori}`}</option>
            ))}
          </select>
        </div>
        <div>
          <label
            htmlFor="penulis"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Penulis
          </label>
          <input
            type="text"
            id="penulis"
            name="penulis"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <div>
          <label
            htmlFor="penerbit"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Penerbit
          </label>
          <input
            type="text"
            id="penerbit"
            name="penerbit"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <div>
          <label
            htmlFor="stok"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Stok*
          </label>
          <input
            type="number"
            id="stok"
            name="stok"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <div>
          <label
            htmlFor="tahun_terbit"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Tahun Terbit
          </label>
          <input
            type="number"
            id="tahun_terbit"
            name="tahun_terbit"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
      </div>
      <button
        type="text"
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
