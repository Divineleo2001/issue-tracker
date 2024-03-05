import React from "react";
import Providers from "../providers/providers";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Providers>{children}</Providers>
    </div>
  );
};

export default Layout;
