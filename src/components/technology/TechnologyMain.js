import TabTech from "./TabTech";
import TechnologyMobile from "./MobileTechnology";
import { useMediaQuery } from "@mui/material";
const Technology = () => {
  const mobileQuery = useMediaQuery("(min-width:768px)");
  const tabQuery = useMediaQuery("(min-width:1440px)");

  if (!mobileQuery) {
    return <TechnologyMobile />;
  } else if (!tabQuery) {
    return <TabTech />;
  }
};
export default Technology;
