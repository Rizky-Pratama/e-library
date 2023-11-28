import Link from "next/link";
import Detail from "./Detail";
import Button from "./Button";

const Page = async ({ params }) => {
  const { id } = params;
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/peminjaman/${id}`)
    .then((res) => res.json())
    .catch((err) => {
      console.log(err.message);
      return {
        data: null,
      };
    });
  const datas = res?.data;

  return (
    <div className="mx-auto max-w-4xl">
      <h1 className="my-5 text-2xl font-medium text-slate-600 dark:text-slate-300">
        Book Return
      </h1>
      <div className="bg-white rounded-md dark:bg-slate-800">
        <div className="py-4 px-3 divide-y-2 space-y-4">
          <h3 className="text-xl font-medium text-slate-700 dark:text-slate-200">
            Detail
          </h3>
          <div className="pt-4">
            <Detail datas={datas}/>
          </div>
          <div className="py-4 px-3 space-x-3">
            <Button id={id}>Simpan</Button>
            <Link
              href="/dashboard/transaction/"
              prefetch={false}
              className="px-5 py-2 text-base font-medium text-gray-900 inline-flex gap-2 items-center hover:bg-gray-800 hover:text-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-lg text-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
            >
              Kembali
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
