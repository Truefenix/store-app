import LayoutAuth from '@/components/Layout/auth';
import React from 'react';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <LayoutAuth>{children}</LayoutAuth>;
};

export default Layout;
