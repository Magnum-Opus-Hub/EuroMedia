import React from 'react';
import ContactLayout from '@/components/ContactLayout';

const contacts = [
  { city: 'Bucuresti', phone: '0718797317', email: 'bucuresti@eum.ro' },
  { city: 'Bacau', phone: '0718797317', email: 'bucuresti@eum.ro' },
  { city: 'Baia Mare', phone: '0718797317', email: 'bucuresti@eum.ro' },
  { city: 'Buzau', phone: '0718797317', email: 'bucuresti@eum.ro' },
  { city: 'Brasov', phone: '0718797317', email: 'bucuresti@eum.ro' },
  { city: 'Cluj', phone: '0718797317', email: 'bucuresti@eum.ro' },
  { city: 'Constanta', phone: '0718797317', email: 'bucuresti@eum.ro' },
  { city: 'Craiova', phone: '0718797317', email: 'bucuresti@eum.ro' },
  { city: 'Iasi', phone: '0718797317', email: 'bucuresti@eum.ro' },
  { city: 'Oradea', phone: '0718797317', email: 'bucuresti@eum.ro' },
  { city: 'Pitesti', phone: '0718797317', email: 'bucuresti@eum.ro' },
  { city: 'Sibiu', phone: '0718797317', email: 'bucuresti@eum.ro' },
  { city: 'Timisoara', phone: '0718797317', email: 'bucuresti@eum.ro' },
];

const Contact: React.FC = () => {
  return (
    <ContactLayout>
      <div className="container mx-auto mt-20">
        <h1 className="font-lemon-regular text-5xl text-left mb-8">Contact Us</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {contacts.map((contact, index) => (
            <div key={index} >
              <h2 className="font-lemon-medium text-lg">{contact.city}</h2>
              <p className="font-lemon-light text-md mt-4">Telefon: {contact.phone}</p>
              <p className="font-lemon-light text-md">E-mail: {contact.email}</p>
            </div>
          ))}
        </div>
      </div>
    </ContactLayout>
  );
};

export default Contact;
