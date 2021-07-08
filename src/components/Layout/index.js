import Splash from "./Splash";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <>
      <Splash />
      <Header />
      <main>{children}</main>
    </>
  );
};

export default Layout;
