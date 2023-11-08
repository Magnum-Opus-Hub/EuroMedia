// pages/equipment.tsx
import React from 'react';
import Image from 'next/image';
import ServicesLayout from '@/components/ServicesLayout';

const Equipment: React.FC = () => {
  // Define your equipment and corresponding images
  const equipments = [
    { name: 'Video', image: '/hanny-naibaho-aWXVxy8BSzc-unsplash.jpg' },
    { name: 'Lumini', image: '/hanny-naibaho-aWXVxy8BSzc-unsplash.jpg' },
    { name: 'Sunet', image: '/hanny-naibaho-aWXVxy8BSzc-unsplash.jpg' },
    { name: 'Scena', image: '/hanny-naibaho-aWXVxy8BSzc-unsplash.jpg' },
  ];

  return (
    <ServicesLayout>
      <div className="container mx-auto mt-20">
        <h1 className="text-4xl font-bold mb-8">Echipamente:</h1>
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {equipments.map((equipment, index) => (
              <div
                key={index}
                className="relative border border-eum-red rounded-lg overflow-hidden mx-2"
                style={{ height: '300px', width: '300px' }} // Adjust the width here
              >
                <Image
                  src={equipment.image}
                  alt={equipment.name}
                  layout="fill"
                  objectFit="cover"
                  className="opacity-50" // This will fade the image
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">{equipment.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ServicesLayout>
  );
};

export default Equipment;
