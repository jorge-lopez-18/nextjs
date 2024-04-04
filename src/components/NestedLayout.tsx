// components/NestedLayout.tsx
import React, { ReactNode } from 'react';

type NestedLayoutProps = {
  children: ReactNode; 
};

const NestedLayout: React.FC<NestedLayoutProps> = ({ children }) => {
  return (
    <div>
      <header>This is the Nested Layout Header</header>
      <main>{children}</main>
      <footer>This is the Nested Layout Footer</footer>
    </div>
  );
};

export default NestedLayout;