import React from 'react';
import ContactLayout from '@/components/ContactLayout';

const Contact: React.FC = () => {
  return (
    <ContactLayout>
    <div className="container mx-auto mt-20">
      <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
      <p className="text-lg mb-4">
        Euromedia is a leading company in the media industry, specializing in various forms of media content and services.
      </p>
      <p className="text-lg mb-4">
        Our talented team of designers and developers work tirelessly to bring the best experience to our clients and their audiences.
      </p>
      <p className="text-lg">
        Whether its web development, content creation, or any other form of digital media, we have the skills and experience to exceed your expectations.
      </p>
    </div>
    </ContactLayout>
  );
};

export default Contact;
