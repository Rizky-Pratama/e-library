import { Inter } from "next/font/google";
import NavbarAdd from "../components/Navbar/NavbarAdd";
const inter = Inter({ subsets: ["latin"] });
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body
        className={
          inter.className +
          "bg-slate-100 text-slate-950 dark:bg-slate-900 dark:text-slate-200 transition-colors"
        }
      >
        <NavbarAdd />
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
        <main className="bg-white py-4 px-4 md:px-3 mx-auto max-w-3xl rounded">
          {children}
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
