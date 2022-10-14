import DestinationMobileModel from "./mobile/DestinationModel";
import TabDM from "./tab/TabDM";
import { useMediaQuery } from "@mui/material";
const DestinationModel = () => {
  const mobileQuery = useMediaQuery("(min-width:768px)");
  const tabQuery = useMediaQuery("(min-width:1440px)");

  if (!mobileQuery) {
    return <DestinationMobileModel />;
  } else if (!tabQuery) {
    return <TabDM />;
  }
};
export default DestinationModel;
