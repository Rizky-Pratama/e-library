import NavbarAdd from "../Navbar/NavbarAdd";

export const metadata = {
  title: "U-Library | Dashboard",
  description: "U-Library adalah aplikasi perpustakaan berbasis web.",
};

export default function Layout({ children }) {
  return (
    <>
      <NavbarAdd />
      <main className="bg-white dark:bg-slate-800 py-4 px-4 md:px-3 mx-auto max-w-3xl rounded">
        {children}
      </main>
    </>
  );
}
