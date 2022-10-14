import NavBarMobile from "./NavBarMobile";
import NavBarTab from "./NavBarTab";
import { useMediaQuery } from "@mui/material";
const NavBar = () => {
  const mobileQuery = useMediaQuery("(min-width:768px)");
  const tabQuery = useMediaQuery("(min-width:1200px)");

  if (!mobileQuery) {
    return <NavBarMobile />;
  } else if (!tabQuery) {
    return <NavBarTab />;
  }
};

export default NavBar;
