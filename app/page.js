import Cards from "./components/Cards/Cards";

export default function Home() {
  return (
    <main>
      <div className="px-4 md:px-0 mx-auto container">
        <h1 className="my-5 text-2xl font-medium text-slate-600 dark:text-slate-300">
          Dashboard
        </h1>
        <Cards />
      </div>
    </main>
  );
}
