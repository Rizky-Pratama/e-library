import Cards from "@/app/components/Cards/Cards";
import Loading from "@/app/components/Loading";
import { Suspense } from "react";

export default function Home() {
  return (
    <>
    <Suspense fallback={<Loading/>}>
      <Cards />
    </Suspense>
    </>
  );
}
