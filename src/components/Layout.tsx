import Footer from './Footer';
import Navbar from "./Navbars/AuthNavbar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />
        {children}
      <Footer />
    </>
  );
}

export default Layout;
