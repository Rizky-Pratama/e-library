import Cards from "@/components/Cards/Cards";
import Loading from "@/components/Loading";
import { Suspense } from "react";

export default function Home() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Cards />
      </Suspense>
    </>
  );
}
