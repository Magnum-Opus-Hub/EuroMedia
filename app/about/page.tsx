// pages/about.tsx
import React from 'react';
import Image from 'next/image';
import Istorie from '../../public/hanny-naibaho-aWXVxy8BSzc-unsplash.jpg';
import Acoperire from '../../public/hanny-naibaho-aWXVxy8BSzc-unsplash.jpg';
import Pers1 from '../../public/hanny-naibaho-aWXVxy8BSzc-unsplash.jpg';
import Pers2 from '../../public/hanny-naibaho-aWXVxy8BSzc-unsplash.jpg';
import Pers3 from '../../public/hanny-naibaho-aWXVxy8BSzc-unsplash.jpg';
import Pers4 from '../../public/hanny-naibaho-aWXVxy8BSzc-unsplash.jpg';
import Pers5 from '../../public/hanny-naibaho-aWXVxy8BSzc-unsplash.jpg';
import Pers6 from '../../public/hanny-naibaho-aWXVxy8BSzc-unsplash.jpg';
import Pers7 from '../../public/hanny-naibaho-aWXVxy8BSzc-unsplash.jpg';
import Pers8 from '../../public/hanny-naibaho-aWXVxy8BSzc-unsplash.jpg';

const teamMembers = [
  { name: 'Nume Persoana 1', desc: 'Descriere scurta', img: Pers1 },
  { name: 'Nume Persoana 2', desc: 'Descriere scurta', img: Pers2 },
  { name: 'Nume Persoana 3', desc: 'Descriere scurta', img: Pers3 },
  { name: 'Nume Persoana 4', desc: 'Descriere scurta', img: Pers4 },
  { name: 'Nume Persoana 1', desc: 'Descriere scurta', img: Pers5 },
  { name: 'Nume Persoana 2', desc: 'Descriere scurta', img: Pers6 },
  { name: 'Nume Persoana 3', desc: 'Descriere scurta', img: Pers7 },
  { name: 'Nume Persoana 4', desc: 'Descriere scurta', img: Pers8 },
];

const About: React.FC = () => {
  return (
<div className="container mx-auto mt-20 space-y-10">
      <div className="mb-10">
        <div className="flex flex-wrap items-center border border-eum-blue rounded-3xl p-5">
          <div className="w-full md:w-1/2 p-5">
            <h2 className="text-2xl font-bold mb-3">Istorie</h2>
            <p>
            Înființată in 1999, cu peste 20 de ani de experiență, EUROMEDIA s-a impus ca lider pe piața de publicitate outdoor din Romania prin gama larga de formate, numărul mare de suporturi și acoperirea naţională a reţelei de panotaj. În ultimii ani, activitatea noastră s-a extins printr-o abordare creativă dar și prin implementarea soluțiilor tehnologice de ultimă generație: proiecte speciale de expunere publicitară in mediul urban, mobilier urban, afișaj digital, creație de evenimente și producţia acestora cu echipamente de scenotehnică la cel mai înalt standard. Varietatea şi extinderea continuă a portofoliului nostru împreună cu expertiza în consultanţă, strategie, planificare şi implementare ne permit să oferim clienţilor noştri soluţii de comunicare premium.
            </p>

          </div>
          <div className="w-full md:w-1/2 p-5">
            <Image
              src={Istorie}
              alt="Istorie"
              layout="responsive"
              width={700} // Adjust the size as necessary
              height={400}
              className="rounded-3xl"
            />
          </div>
        </div>
      </div>

      <div className="mb-10">
        <div className="flex flex-wrap items-center border border-eum-blue rounded-3xl p-5">
          <div className="w-full md:w-1/2 p-5">
            <Image
              src={Acoperire}
              alt="Acoperire"
              layout="responsive"
              width={700} // Adjust the size as necessary
              height={400}
              className="rounded-3xl"
            />
          </div>
          <div className="w-full md:w-1/2 p-5">
            <h2 className="text-2xl font-bold mb-3">Acoperire</h2>
            <p>
              Peste 40 de evenimente în 2019. Acoperire națională: toate județele, toate drumurile naționale, toate orașele mari și mijlocii.
            </p>
            {/* Add the full description here */}
          </div>
        </div>
      </div>
      <div className="border border-eum-red rounded-2xl p-5">
        <h2 className="text-3xl font-bold mb-8">our people</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {teamMembers.map((person, index) => (
            <div key={index} className="text-center space-y-3">
              <Image
                src={person.img}
                alt={person.name}
                width={250}
                height={350}
                className="rounded-2xl mx-auto"
              />
              <h3 className="text-xl font-bold">{person.name}</h3>
              <p className="text-sm">{person.desc}</p>
            </div>
          ))}
        </div>
        </div>
    </div>
  );
};

export default About;
