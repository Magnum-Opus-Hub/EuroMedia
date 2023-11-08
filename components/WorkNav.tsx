'use client'
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; // Correct import for Next.js 13.5+

const WorkNav: React.FC = () => {
  const pathname = usePathname(); // Get the current path

  // Helper function to determine active link
  const isActive = (path: string) => pathname === path;

  return (
    <nav className="fixed bottom-0  z-10 left-0 right-0 flex justify-center py-3"> {/* Increased py here for nav */}
      <div className="flex bg-eum-red py-1 px-1 rounded-2xl shadow-lg w-full max-w-md mx-auto"> {/* Decreased py here for the container div to allow red background to be almost as tall as the nav */}
        <Link
          href="/work"
          className={`flex-1 text-center rounded-2xl text-white text-lg font-bold cursor-pointer px-6 py-3 ${ // Increased px for more padding and increased py to make the red background taller
            isActive('/work') ? 'bg-eum-blue rounded-2xl' : ''
          }`}
        >
          Proiecte
        </Link>
        <Link
          href="/specialwork"
          className={`flex-1 text-center rounded-2xl text-white text-lg font-bold cursor-pointer px-6 py-3 ${ // Same changes for padding as above
            isActive('/specialwork') ? 'bg-eum-blue rounded-2xl' : ''
          }`}
        >
          Speciale
        </Link>
      </div>
    </nav>
  );
};

export default WorkNav;
