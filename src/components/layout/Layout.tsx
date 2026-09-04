
import React from 'react';
import { FloatingNav } from '../navigation/FloatingNav';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <FloatingNav />

      <main
        style={{
          minHeight: '100vh',
          background: '#0f172a',
        }}
      >
        {children}
      </main>
    </>
  );
};
