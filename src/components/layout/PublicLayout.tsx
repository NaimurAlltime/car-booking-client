import React from "react";
import Footer from "../sections/Layout/Footer";
import Header from "../sections/Layout/Header";
import MobileMenu from "../sections/Layout/MobileMenu";

const PublicLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Header />
      <div>{children}</div>
      <MobileMenu />
      <Footer />
    </div>
  );
};

export default PublicLayout;
