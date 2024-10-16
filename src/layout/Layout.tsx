import "../styles/main.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header";

interface Props {
  children: React.ReactNode;
}

const Layout = (props: Props) => {
  console.log("Layout contains");

  return (
    <div>
      <Header />
      {props.children}
    </div>
  );
};

export default Layout;
