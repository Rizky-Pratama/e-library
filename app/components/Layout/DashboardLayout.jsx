import HeadingDashboard from "../Heading/HeadingDashboard";
import Navbar from "../Navbar/Navbar";

export const metadata = {
  title: "U-Library | Dashboard",
  description: "U-Library adalah aplikasi perpustakaan berbasis web.",
};

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className="px-4 md:px-0 mx-auto container">
        <HeadingDashboard />
        {children}
      </main>
    </>
  );
}
