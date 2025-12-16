import React from 'react';
import Navbar from './Navbar';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-white dark:bg-[#1c1f26]">
      <div className="p-10 md:p-20 max-w-4xl">
        <Navbar />
        <main className="mt-12 text-black dark:text-white text-left">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
