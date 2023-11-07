// components/ServicesLayout.tsx
import React from 'react';
import ServiciiNav from './ServiciiNav';

type ServicesLayoutProps = {
  children: React.ReactNode;
};

const ServicesLayout: React.FC<ServicesLayoutProps> = ({ children }) => {
  return (
    <div>
      <ServiciiNav />
      <div className="mt-16">{children}</div>
    </div>
  );
};

export default ServicesLayout;
