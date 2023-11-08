import React from 'react';
import ContactLayout from '@/components/ContactLayout';

const Findwork: React.FC = () => {
  return (
    <ContactLayout>
      <div className="container mx-auto mt-20">
        <h1 className="text-5xl font-lemon-regular mb-8 text-white">Work With Us</h1>
        <h3 className="text-lg font-lemon-light mb-8 text-white">
          Trimite-ne solicitarea ta adaugand cat mai multe detalii despre proiectul tau si vei fi contactat in cel mai scurt timp.
        </h3>
        <form className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Prenume, Nume, Email, Telefon fields */}
          <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4 ">
            <div className="flex flex-col">
              <label htmlFor="firstName" className="block font-lemon-medium text-xl text-white">
                Prenume
              </label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                required
                className="mt-1 block w-64 h-8 border border-eum-blue font-lemon-light bg-[#1E1E1E] shadow-sm focus:ring-eum-blue focus:border-eum-blue sm:text-sm rounded-md"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="lastName" className="block font-lemon-medium text-xl text-white">
                Nume
              </label>
              <input
                type="text"
                name="lastName"
                id="lastName"
                required
                className="mt-1 block w-64 border h-8 border-eum-blue font-lemon-light bg-[#1E1E1E] shadow-sm focus:ring-eum-blue focus:border-eum-blue sm:text-sm rounded-md"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email" className="block font-lemon-medium text-xl text-white">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                className="mt-1 block w-64 border h-8 border-eum-blue font-lemon-light bg-[#1E1E1E] shadow-sm focus:ring-eum-blue focus:border-eum-blue sm:text-sm rounded-md"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="phone" className="block font-lemon-medium text-xl text-white">
                Telefon
              </label>
              <input
                type="tel"
                name="phone"
                id="phone"
                required
                className="mt-1 block w-64 border h-8 border-eum-blue font-lemon-light bg-[#1E1E1E] shadow-sm focus:ring-eum-blue focus:border-eum-blue sm:text-sm rounded-md"
              />
            </div>
          </div>

          {/* Mesaj field */}
          <div className="flex flex-col">
            <label htmlFor="message" className="block font-lemon-medium text-xl text-white">
              Mesaj
            </label>
            <textarea
              name="message"
              id="message"
              required
              rows={10} // Adjust the row count as needed
              className="mt-1 block w-full h-40 border border-eum-blue font-lemon-light bg-[#1E1E1E] shadow-sm focus:ring-eum-blue focus:border-eum-blue sm:text-sm rounded-md"
            />
            <button
              type="submit"
              className="mt-4 w-full inline-flex justify-center  border border-transparent shadow-sm px-4 py-2 bg-eum-blue text-base font-medium text-white hover:bg-eum-dark-blue focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-eum-blue sm:text-sm rounded-md"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </ContactLayout>
  );
};

export default Findwork;
