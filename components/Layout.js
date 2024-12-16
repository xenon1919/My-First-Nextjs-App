import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="content">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
// In the above code, we have created a Layout component that wraps the Navbar and Footer components around the children components. This way, we can reuse the Navbar and Footer components across multiple pages in our application.
