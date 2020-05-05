import React from "react";

import Navbar from "./navbar";

const Layout: React.FC = ({ children }) => {
  return (
    <div style={{ position: "relative" }}>
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
