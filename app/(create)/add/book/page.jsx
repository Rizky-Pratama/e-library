import { Form } from "./Form";

export const dynamic = "auto";
export const revalidate = false;
export const fetchCache = "force-cache";

const Page = async () => {
  const dataInputKategori = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/kategori`,
    {
      next: {
        tags: ["kategori"],
      },
    }
  )
    .then((res) => res.json())
    .then((data) => {
      return data.data;
    });

  return (
    <>
      <Form dataInput={{ dataInputKategori }} />
    </>
  );
};
export default Page;
