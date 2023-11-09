// components/navbar.tsx
'use client'
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const navbar: React.FC = () => {
  return (
    <nav className="flex items-center justify-between p-2 text-white ">
      <div className="flex items-center">
        <Link href="/">
          <Image src="/logo.png" width={63} height={63} alt="Euromedia Logo" className="cursor-pointer" />
        </Link>
      </div>
      <div className="flex space-x-7">
        <Link href="/about" className=" text-sm font-lemon-regular hover:underline cursor-pointer">
          Despre noi
        </Link>
        <Link href="/services" className=" text-sm font-lemon-regular hover:underline cursor-pointer">
          Servicii
        </Link>
        <Link href="/work" className=" text-sm font-lemon-regular hover:underline cursor-pointer">
          Proiecte
        </Link>
        <Link href="/euwork" className=" text-sm font-lemon-regular hover:underline cursor-pointer">
          Proiecte Europene
        </Link>
        <Link href="/contact" className=" text-sm font-lemon-regular hover:underline cursor-pointer">
          Contact
        </Link>
        <button className=" text-sm font-lemon-regular hover:underline">EN</button>
      </div>


    </nav>
  );
};

export default navbar;
