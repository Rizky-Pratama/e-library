import LoginForm from '../../components/Form/LoginForm';
const Page = () => {
  return (
    <main className="w-full h-screen flex flex-col gap-3 justify-center items-center ">
      {/* <h1 className="text-2xl font-bold text-blue-500">Perpustakaan-ku</h1>
      <div className="px-4 py-7 bg-slate-50 rounded text-center">
        <h1 className="text-sm">Masukan data anda dengan benar</h1>
      </div> */}
      <LoginForm/>
    </main>
  );
};

export default Page;
