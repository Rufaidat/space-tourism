import background from "../../../images/destination/background-destination-tablet.jpg";
import NavBar from "../../navbar/MainNavBar";
import moon from "../../../images/destination/image-moon.webp";
import { Link } from "react-router-dom";

const DestinationTab = () => {
  const myStyle = {
    backgroundImage: `url(${background})`,
    backgroundSize: "cover",
    minHeight: "100vh",
  };

  return (
    <div style={myStyle}>
      <NavBar />
      <p className="p-style">
        {" "}
        <strong className="strong">01</strong>PICK YOUR DESTINATION
      </p>
      <div
        style={{
          padding: "0 2rem",
          textAlign: "center",
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          paddingBottom: "3rem",
        }}
      >
        <img
          src={moon}
          style={{ width: "18rem", height: "18rem", margin: "2rem" }}
        />
        <div style={{ marginBottom: "2rem" }}>
          <Link
            className="destinaion-links p-style"
            to="/destination/"
            style={{ borderBottom: "2px solid white" }}
          >
            MOON
          </Link>
          <Link className="destinaion-links p-style" to="/destination/mars">
            MARS
          </Link>
          <Link className="destinaion-links p-style" to="/destination/europa">
            EUROPA
          </Link>
          <Link className="destinaion-links p-style" to="/destination/titan">
            TITAN
          </Link>
        </div>
        <h1 style={{ marginBottom: 0, textTransform: "uppercase" }}>MOON</h1>
        <p>
          See our planet as you’ve never seen it before. A perfect relaxing trip
          away to help regain perspective and come back refreshed. While you’re
          there, take in some history by visiting the Luna 2 and Apollo 11
          landing sites.
        </p>
        <span></span>
        <div className="dis-box">
          <div>
            {" "}
            <p className="p-style" style={{ marginTop: 0 }}>
              AVG. DISTANCE
            </p>
            <h3 style={{ textTransform: "uppercase" }}>384,400 km</h3>
          </div>
          <div>
            <p className="p-style" style={{ textTransform: "uppercase" }}>
              EST. TRAVEL TIME
            </p>
            <h3 style={{ textTransform: "uppercase" }}>3 days</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationTab;
