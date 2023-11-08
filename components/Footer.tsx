import React from 'react';
import Image from 'next/image';
import Logo2 from '../public/logo-1-300x35-1-2 3.png';

function Footer() {
  return (
      <footer className="relative mt-10 border-t-2 border-eum-blue bg-[#1E1E1E]">
      <div className="container px-6 py-4 mx-auto">
        <div className="flex flex-wrap items-center justify-between">
          <div className="w-full md:w-auto mb-6 md:mb-0">
            <a href="/" className="flex items-center">
              <Image src={Logo2} alt="Euromedia" width={300} height={35} />
            </a>
          </div>
          <div className="flex flex-col md:items-end">
            <p className="text-sm text-white mb-1">
              Sos. Pipera-Tunari nr. 2/III Bis, Corp NG2, Cladirea One North Gate, Et 4, Voluntari, Ilfov.
            </p>
            <p className="text-sm text-white mb-1">Tel: +40 21.224.40.10</p>
            <p className="text-sm text-white mb-1">Fax: +40 21.410.44.80</p>
            <p className="text-sm text-white mb-1">Email: office@eum.ro</p>
            <p className="text-sm text-white mb-1">
              Pentru informații sau alte probleme legate de protecția datelor cu caracter personal:
            </p>
            <p className="text-sm text-white mb-1">Email: dpo@eum.ro</p>
            <p className="text-sm text-white">Tel: +40 21.224.40.10</p>
          </div>
        </div>
      </div>
      <div className="text-center py-4">
        <p className="text-sm text-white mb-0">
          &copy; {new Date().getFullYear()} Euromedia. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
