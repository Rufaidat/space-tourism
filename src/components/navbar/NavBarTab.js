import { Link } from "react-router-dom";
import logo from "../../images/shared/logo.svg";

const NavBarTab = () => {
  const style = {
    display: "flex",
    justifyContent: "space-between",
    height: "5rem",
  };
  return (
    <div style={style}>
      <img
        src={logo}
        alt="logo"
        style={{ width: "3rem", height: "3rem", margin: "1.8rem 2.5rem " }}
      />
      <div className="swipe">
        {" "}
        <Link className="link" to="/">
          <strong className="strong">00</strong> HOME
        </Link>
        <Link className="link" to="/destination">
          <strong className="strong">01</strong> DESTINATION
        </Link>
        <Link className="link" to="/crew">
          <strong className="strong">02</strong> CREW
        </Link>
        <Link className="link" to="/technology">
          <strong className="strong">03</strong> TECHNOLOGY
        </Link>
      </div>
    </div>
  );
};

export default NavBarTab;
