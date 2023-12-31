import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "U-library|Auth",
  description: "Halaman autentikasi untuk U-library",
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
        {children}
      </body>
    </html>
  );
}
