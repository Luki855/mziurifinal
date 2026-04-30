import Header from "./components/Header";
import Footer from "./components/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main style={{ padding: "20px" }}>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;