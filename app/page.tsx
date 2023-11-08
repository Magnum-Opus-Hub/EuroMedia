import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Outdoor from '../public/hanny-naibaho-aWXVxy8BSzc-unsplash.jpg';
import Article1 from '../public/hanny-naibaho-aWXVxy8BSzc-unsplash.jpg';
import Article2 from '../public/hanny-naibaho-aWXVxy8BSzc-unsplash.jpg';
import Article3 from '../public/hanny-naibaho-aWXVxy8BSzc-unsplash.jpg';
import Article4 from '../public/hanny-naibaho-aWXVxy8BSzc-unsplash.jpg';

const articles = [
  { src: Article1, title: 'Article Title 1' },
  { src: Article2, title: 'Article Title 2' },
  { src: Article3, title: 'Article Title 3' },
  { src: Article4, title: 'Article Title 4' },
  // Add more articles here as needed
];

export default function Home() {
  return (
    <div className="p-4 max-w-7xl mx-auto mt-10">
      <div className="relative border-eum-blue border-2 rounded-xl overflow-hidden">
        {/* Hero Image */}
        <Image
          src={Outdoor}
          alt="Outdoor"
          layout="responsive"
          width={1480} // Adjusted width
          height={865} // Adjusted height for a 16:9 aspect ratio
          objectFit="cover"
          className="w-full"
        />

        {/* Text Container */}
        <div className="absolute bottom-0 left-0 p-6">
          <h2 className="text-5xl font-bold text-white mb-2">THINK OUTDOOR</h2>
          <p className="text-xl text-white mb-4">Enjoy, innovate, join us!</p>
        </div>

        {/* Dots and Button */}
        <div className="absolute bottom-0 right-0 p-6">
          {/* Dots */}
          <div className="flex mb-4">
            <span className="h-7 w-7 bg-white rounded-full mr-2"></span>
            <span className="h-7 w-7 bg-white rounded-full mr-2"></span>
            <span className="h-7 w-7 bg-white rounded-full"></span>
          </div>

          {/* Contact Us Button */}
          <Link href="/contact" className="bg-eum-red text-white px-2 py-2 rounded-lg font-bold">
Contact us
          </Link>
        </div>
      </div>
      <div className="mt-12">
        <h2 className="text-4xl font-bold mb-8">Articles</h2>
        <div className="grid grid-cols-2 gap-4">
          {articles.map((article, index) => (
            <div key={index} className="relative border-eum-blue border-2 rounded-xl overflow-hidden">
              <Image
                src={article.src}
                alt={`Article ${index + 1}`}
                layout="responsive"
                width={600}
                height={400}
                objectFit="cover"
                className="w-full"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-[#1E1E1E]">
                <h3 className="text-xl font-bold text-white mb-3">{article.title}</h3>
                <div className="absolute bottom-3 right-3">
                  <span className="block h-3 w-3 border-2 border-eum-blue rounded-full"></span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
