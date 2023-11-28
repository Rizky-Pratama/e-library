import HeadingDashboard from "../components/Heading/HeadingDashboard";
import Navbar from "../components/Navbar/Navbar";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const metadata = {
  title: "U-Library | Dashboard",
  description: "U-Library adalah aplikasi perpustakaan berbasis web.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={
          inter.className +
          " bg-slate-100 text-slate-950 dark:bg-slate-900 dark:text-slate-200 transition-colors"
        }
      >
        <Navbar />
        <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <main className="px-4 md:px-0 mx-auto container">
          <HeadingDashboard />
          {children}
        </main>
      </body>
    </html>
  );
}
