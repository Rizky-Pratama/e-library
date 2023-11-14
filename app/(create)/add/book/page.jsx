import { Form } from "./Form";

const Page = async () => {
  const dataInputKategori = await fetch("http://localhost:3000/api/kategori", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
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
