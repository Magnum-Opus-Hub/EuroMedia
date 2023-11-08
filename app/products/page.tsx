// pages/products.tsx
import React from 'react';
import Image from 'next/image';
import ServicesLayout from '@/components/ServicesLayout';

const Products: React.FC = () => {
  // Define your products and corresponding images
  const products = [
    { name: 'Led', image: '/hanny-naibaho-aWXVxy8BSzc-unsplash.jpg' },
    { name: 'Backlit', image: '/hanny-naibaho-aWXVxy8BSzc-unsplash.jpg' },
    { name: 'Bilboard', image: '/hanny-naibaho-aWXVxy8BSzc-unsplash.jpg' },
    { name: 'Rollable', image: '/hanny-naibaho-aWXVxy8BSzc-unsplash.jpg' },
    { name: 'Bus', image: '/hanny-naibaho-aWXVxy8BSzc-unsplash.jpg' },
    { name: 'Transit', image: '/hanny-naibaho-aWXVxy8BSzc-unsplash.jpg' },
    { name: 'Directional', image: '/hanny-naibaho-aWXVxy8BSzc-unsplash.jpg' },
    { name: 'Unipol', image: '/hanny-naibaho-aWXVxy8BSzc-unsplash.jpg' },
    { name: 'Trivision', image: '/hanny-naibaho-aWXVxy8BSzc-unsplash.jpg' },
    { name: 'Atypical', image: '/hanny-naibaho-aWXVxy8BSzc-unsplash.jpg' },
    { name: 'Special', image: '/hanny-naibaho-aWXVxy8BSzc-unsplash.jpg' }
  ];

  return (
    <ServicesLayout>
      <div className="container mx-auto mt-20">
        <h1 className="text-4xl font-bold mb-8">Produse:</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {products.map((product, index) => (
            <div
              key={index}
              className="relative border border-eum-red rounded-lg overflow-hidden"
              style={{ height: '200px', maxWidth: '200px' }} // Adjust the height and width here
            >
              <Image
                src={product.image}
                alt={product.name}
                layout="fill"
                objectFit="cover"
                className="opacity-50" // This will fade the image
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white font-bold text-xl">{product.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </ServicesLayout>
  );
};

export default Products;
