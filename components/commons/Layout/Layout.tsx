import { ReactElement } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

type LayoutProps = Required<{
  readonly children: ReactElement;
}>;

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
