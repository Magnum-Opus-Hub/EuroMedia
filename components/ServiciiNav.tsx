'use client'
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; // Correct import for Next.js 13.5+

const ServiciiNav: React.FC = () => {
  const pathname = usePathname(); // Get the current path

  // Helper function to determine active link
  const isActive = (path: string) => pathname === path;

  return (
    <nav className="fixed bottom-0 left-0 right-0 flex justify-center py-3"> {/* Increased py here for nav */}
      <div className="flex bg-eum-blue py-1 px-1 rounded-2xl shadow-lg w-full max-w-md mx-auto"> {/* Decreased py here for the container div to allow red background to be almost as tall as the nav */}
        <Link
          href="/products"
          className={`flex-1 text-center rounded-2xl text-white text-lg font-bold cursor-pointer px-6 py-3 ${ // Increased px for more padding and increased py to make the red background taller
            isActive('/products') ? 'bg-eum-red rounded-2xl' : ''
          }`}
        >
          Produse
        </Link>
        <Link
          href="/services"
          className={`flex-1 text-center rounded-2xl text-white text-lg font-bold cursor-pointer px-6 py-3 ${ // Same changes for padding as above
            isActive('/services') ? 'bg-eum-red rounded-2xl' : ''
          }`}
        >
          Servicii
        </Link>
        <Link
          href="/equipment"
          className={`flex-1 text-center rounded-2xl text-white text-lg font-bold cursor-pointer px-6 py-3 ${ // And again, same padding changes
            isActive('/equipment') ? 'bg-eum-red rounded-2xl' : ''
          }`}
        >
          Echipamente
        </Link>
      </div>
    </nav>
  );
};

export default ServiciiNav;
