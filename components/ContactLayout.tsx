// components/ContactLayout.tsx
import React from 'react';
import ContactNav from './ContactNav';

type ContactLayoutProps = {
  children: React.ReactNode;
};

const ContactLayout: React.FC<ContactLayoutProps> = ({ children }) => {
  return (
    <div>
      <ContactNav />
      <div className="mt-16">{children}</div>
    </div>
  );
};

export default ContactLayout;
