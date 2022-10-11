import { useState } from "react";
import logo from "../images/shared/logo.svg";
import harmburger from "../images/shared/icon-hamburger.svg";
import close from "../images/shared/icon-close.svg";
import { SwipeableDrawer } from "@mui/material";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [show, setShow] = useState(true);
  const handleClick = () => {
    setShow(show ? false : true);
    console.log(show);
  };
  const Icon = () => {
    const style = {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      padding: "2rem 1rem",
    };

    return (
      <div style={style}>
        <img
          src={logo}
          alt="logo"
          style={{ width: "2.5rem", height: "2.5rem" }}
        />
        {show ? (
          <img
            src={harmburger}
            alt="harmburger icon"
            style={{ width: "1.5rem", height: "1.5rem" }}
            onClick={handleClick}
          />
        ) : (
          <div open={true} anchor="right" className="swipe">
            <img
              src={close}
              onClick={handleClick}
              className="icon"
              style={{
                width: "1.5rem",
                height: "1.5rem",
                position: "absolute",
                right: "1rem",
                top: "2.122rem",
              }}
            />

            <Link className="link" style={{ marginTop: "7rem" }}>
              <strong className="strong" to="/">
                00
              </strong>{" "}
              HOME
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
        )}
      </div>
    );
  };
  return (
    <div>
      <Icon />
    </div>
  );
};

export default NavBar;
