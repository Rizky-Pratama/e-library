import Image from "next/image";
import Link from "next/link";

const Page = () => {
  return (
    <div className="bg-gray-100 overflow-hidden">
      <div className="bg-gray-100 sm:pb-16 md:pb-20">
        <main className="mt-10 lg:mt-28 lg:flex lg:justify-center mx-auto px-4 sm:mt-12">
          <div className="max-w-lg mx-auto sm:text-center lg:text-left">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block xl:inline">Welcome to the</span>{" "}
              <span className="block text-indigo-600 xl:inline">U-Library</span>
            </h1>
            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
              risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing
              nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas
              ligula massa, varius a, semper congue, euismod non, mi.
            </p>
            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
              <div className="rounded-md shadow">
                <Link href="/login"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                >
                  Get started
                </Link>
              </div>
              <div className="mt-3 sm:mt-0 sm:ml-3">
                <Link
                  href="#"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
                >
                  Learn more
                </Link>
              </div>
            </div>
          </div>
          <Image
            src={"/ilustration.png"}
            height={500}
            width={500}
            alt="Ilustration"
            className="mx-auto"
          />
        </main>
      </div>
    </div>
  );
};

export default Page;
