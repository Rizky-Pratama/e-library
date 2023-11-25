import { getAllNamaAnggota } from "@/app/utils/dbUtils/anggota";
import { getUserFromCookie } from "@/app/utils/user";
import { Form } from "./Form";

export const dynamic = "auto";
export const revalidate = false;
export const fetchCache = "force-cache";

const Page = async () => {
  const dataInputBuku = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/buku`,
    {
      next: {
        tags: ["buku"],
      },
    }
  )
    .then((res) => res.json())
    .then((data) => {
      return data.data;
    })
    .catch((err) => {
      console.log(err);
      return null;
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
