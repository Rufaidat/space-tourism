import CrewMobile from "./CrewMobile";
import CrewTab from "./crewTab";
import { useMediaQuery } from "@mui/material";
const Crew = () => {
  const mobileQuery = useMediaQuery("(min-width:768px)");
  const tabQuery = useMediaQuery("(min-width:1440px)");

  if (!mobileQuery) {
    return <CrewMobile />;
  } else if (!tabQuery) {
    return <CrewTab />;
  }
};
export default Crew;
