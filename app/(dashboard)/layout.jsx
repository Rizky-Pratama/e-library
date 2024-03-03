import DashboardLayout from "../components/layout/DashboardLayout";
export const metadata = {
  title: "U-Library | Dashboard",
  description: "U-Library adalah aplikasi perpustakaan berbasis web.",
};

export default function Layout({ children }) {
  return (
    <DashboardLayout >
      {children}
    </DashboardLayout>
  );
}
