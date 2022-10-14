import backgroundM from "../../images/home/background-home-mobile.jpg";
import bgTab from "../../images/home/background-home-tablet.jpg";
import NavBar from "../navbar/MainNavBar";
import { useMediaQuery } from "@mui/material";

const HomeMobile = () => {
  const mobileQuery = useMediaQuery("(min-width:768px)");
  const tabQuery = useMediaQuery("(min-width:1440px)");
  const styleM = {
    backgroundImage: `url(${backgroundM})`,
    backgroundSize: "cover",
    minHeight: "100vh",
  };
  const styleTab = {
    backgroundImage: `url(${bgTab})`,
    backgroundSize: "cover",
    minHeight: "100vh",
  };
  return (
    <div style={!mobileQuery ? styleM : !tabQuery ? styleTab : null}>
      <NavBar />
      <div
        style={{
          color: "#FFFFFF",
          textAlign: "center",
          paddingBottom: "6rem",
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
          flexDirection: "column",
          height: "90vh",
        }}
      >
        <p className="p-style">SO, YOU WANT TO TRAVEL TO</p>
        <h1
          style={
            !mobileQuery
              ? {
                  fontSize: "5rem",
                  margin: " 2rem 0 1rem",
                }
              : !tabQuery
              ? {
                  fontSize: "9rem",
                  margin: " 2rem 0 1rem",
                }
              : ""
          }
        >
          SPACE
        </h1>
        <p
          style={{
            color: "#D0D6F9",
            fontSize: "13px",
            lineHeight: "25px",
            fontWeight: 400,
            letterSpacing: "2.7px",
            margin: " 1rem .5rem 4rem",
          }}
        >
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
        <div className="explore-div">
          <p>EXPLORE</p>
        </div>
      </div>
    </div>
  );
};
export default HomeMobile;
