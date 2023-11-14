import { getAllNamaAnggota } from "@/app/utils/dbUtils/anggota";
import { getUserFromCookie } from "@/app/utils/user";
import { Form } from "./Form";

const Page = async () => {
  const dataInputBuku = await fetch("http://localhost:3000/api/buku", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      return data.data;
    });
  const dataInputAnggota = await getAllNamaAnggota();
  const dataInputStaff = await getUserFromCookie();

  return (
    <>
      <Form dataInput={{ dataInputAnggota, dataInputBuku, dataInputStaff }} />
    </>
  );
};
export default Page;
