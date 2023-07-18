import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function NotFound() {
  return (
    <div className="flex justify-center items-center">
      <main class="grid min-h-full place-items-center bg-white px-6 py-16 lg:px-8">
        <div class="text-center">
          <p class="text-base font-semibold text-[#18181A]">404</p>
          <h1 class="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Page not found
          </h1>
          <p class="mt-6 text-base leading-7 text-gray-600">
            Sorry, we couldn’t find the page you’re looking for.
          </p>
          <div class="mt-6 flex items-center justify-center gap-x-6">
            <Link
              href="/"
              class="rounded-md bg-[#18181A] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#2f2f31] duration-300"
            >
              Go back home
            </Link>
          </div>
        </div>
        <div className="max-w-xs">
        <Image
          width={1180}
          height={1180}
          alt='image'
          className='h-full mt-6'
          src="../giphy.webp"
        />
        </div>
      </main>
    </div>
  );
}
