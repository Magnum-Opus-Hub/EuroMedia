// components/WorkLayout.tsx
import React from 'react';
import WorkNav from './WorkNav';

type WorkLayoutProps = {
  children: React.ReactNode;
};

const WorkLayout: React.FC<WorkLayoutProps> = ({ children }) => {
  return (
    <div>
      <WorkNav />
      <div className="mt-16">{children}</div>
    </div>
  );
};

export default WorkLayout;
