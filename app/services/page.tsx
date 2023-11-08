// pages/servicii.tsx
import React from 'react';
import Image from 'next/image';
import ServicesLayout from '@/components/ServicesLayout';

const Servicii: React.FC = () => {
  // Define your services and corresponding images
  const services = [
    { name: 'Festival', image: '/hanny-naibaho-aWXVxy8BSzc-unsplash.jpg' },
    { name: 'Concert', image: '/hanny-naibaho-aWXVxy8BSzc-unsplash.jpg' },
    { name: 'Eveniment', image: '/hanny-naibaho-aWXVxy8BSzc-unsplash.jpg' },
  ];

  const services2 = [
    { name: 'Nunti', image: '/hanny-naibaho-aWXVxy8BSzc-unsplash.jpg' },
    { name: 'Televiziune', image: '/hanny-naibaho-aWXVxy8BSzc-unsplash.jpg' },
  ];

  return (
    <ServicesLayout>
      <div className="container mx-auto mt-16">
        <h1 className="text-3xl font-lemon-regular mb-8">Servicii:</h1>
        <div className="grid grid-cols-1 mb-8 sm:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative border border-eum-red rounded-xl overflow-hidden"
              style={{ height: '300px' }} // Set the desired height of the boxes
            >
              <Image
                src={service.image}
                alt={service.name}
                layout="fill"
                objectFit="cover"
                className="opacity-50" // This will fade the image
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white font-bold text-xl">{service.name}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {services2.map((service, index) => (
            <div
              key={index}
              className="relative border border-eum-red rounded-xl overflow-hidden"
              style={{ height: '300px' }} // Set the desired height of the boxes
            >
              <Image
                src={service.image}
                alt={service.name}
                layout="fill"
                objectFit="cover"
                className="opacity-50" // This will fade the image
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white font-bold text-xl">{service.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </ServicesLayout>
  );
};

export default Servicii;
