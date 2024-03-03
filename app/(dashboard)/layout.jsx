import DashboardLayout from "../components/Layouts/DashboardLayout";

export default function Layout({ children }) {
  return (
    <>
      <DashboardLayout>{children}</DashboardLayout>
    </>
  );
}
