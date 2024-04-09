import Link from "next/link";
import Image from "next/image";
import heroimage from "@/assets/images/banner.jpg";

export default function Hero() {
  return (
    <section className="flex w-max-full flex-col md:flex-row">
      <div className="flex flex-col md:flex-row space-y-4 gap-4 z-0 pl-4 md:pl-20 bg-gray-50/50 md:bg-transparent pb-4 my-auto">
        <div className="space-y-2">
          <div className="space-y-2 pb-4">
            <h1 className="text-3xl font-bold pt-4 tracking-tighter pb-4 sm:text-5xl">
              Discover the Perfect Baby Items for Every Stage
            </h1>
            <p className="mx-auto  md:text-xl text-gray-900">
              From newborn essentials to toddler must-haves, we&apos;ve got you
              covered.
            </p>
          </div>
          <Link
            className="inline-flex h-10 items-center justify-center rounded-md bg-blue-700 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
            href="#"
          >
            Shop Now
          </Link>
        </div>
      </div>
      <Image
        alt="Hero"
        className="mt-[-240px] md:mt-0 object-cover h-60 md:h-[600px]"
        height="1000"
        width="1200"
        src={heroimage}
      />
    </section>
  );
}
