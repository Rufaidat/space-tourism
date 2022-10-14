import DestinationMobile from "./mobile/Destination";
import DestinationTab from "./tab/DestinationTab";
import { useMediaQuery } from "@mui/material";
const Destination = () => {
  const mobileQuery = useMediaQuery("(min-width:768px)");
  const tabQuery = useMediaQuery("(min-width:1440px)");

  if (!mobileQuery) {
    return <DestinationMobile />;
  } else if (!tabQuery) {
    return <DestinationTab />;
  }
};

export default Destination;
