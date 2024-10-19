import "../styles/main.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
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
