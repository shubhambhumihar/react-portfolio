import React from "react";
import Footer from "./Footer";
import Header from "./Header";

function Layout({ children }) {
  return (
    <div>
      <Header />

      {/* here our body come ie all page will come here via props */}
      <div className="content font-mont overflow-x-hidden ">{children}</div>

      <Footer />
    </div>
  );
}

export default Layout;
