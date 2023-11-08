import React from 'react';
import Image from 'next/image';
import WorkLayout from '@/components/WorkLayout';
import Saga from '../../public/hanny-naibaho-aWXVxy8BSzc-unsplash.jpg';
import Gala from '../../public/hanny-naibaho-aWXVxy8BSzc-unsplash.jpg';
import Artist from '../../public/hanny-naibaho-aWXVxy8BSzc-unsplash.jpg';
import Mamma from '../../public/hanny-naibaho-aWXVxy8BSzc-unsplash.jpg';
import Fall from '../../public/hanny-naibaho-aWXVxy8BSzc-unsplash.jpg';
import Bon from '../../public/hanny-naibaho-aWXVxy8BSzc-unsplash.jpg';
import Summerwell from '../../public/hanny-naibaho-aWXVxy8BSzc-unsplash.jpg';
import Rock from '../../public/hanny-naibaho-aWXVxy8BSzc-unsplash.jpg';

const Work: React.FC = () => {
  const works = [
    { title: 'Epic Saga', image: Saga },
    { title: 'Glamorous Gala', image: Gala },
    { title: 'Artist Spotlight', image: Artist },
    { title: 'Mamma Mia', image: Mamma },
    { title: 'Autumn Falls', image: Fall },
    { title: 'Bon Voyage', image: Bon },
    { title: 'Summerwell Festival', image: Summerwell },
    { title: 'Rock Universe', image: Rock },
  ];

  return (
    <WorkLayout>
      <div className="container mx-auto mt-20">
        <h1 className="text-4xl font-bold mb-8">Proiecte:</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {works.map((work, index) => (
            <div key={index} className="relative border border-eum-blue rounded-xl overflow-hidden">
              <Image
                src={work.image}
                alt={work.title}
                layout="responsive"
                width={700} // Adjust the size as necessary
                height={400}
                className="object-cover object-center"
              />
              <h2 className="absolute bottom-0 w-full text-center text-2xl font-bold text-white bg-opacity-50  p-4">{work.title}</h2>
            </div>
          ))}
        </div>
      </div>
    </WorkLayout>
  );
};

export default Work;
