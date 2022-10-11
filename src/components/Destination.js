import backgroundM from "../images/destination/background-destination-mobile.jpg";
import NavBar from "./NavBar";
import moon from "../images/destination/image-moon.webp";
import { Link } from "react-router-dom";

const Destination = () => {
  const myStyle = {
    backgroundImage: `url(${backgroundM})`,
    backgroundSize: "cover",
  };

  return (
    <div style={myStyle}>
      <NavBar />
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
        <p className="p-style" style={{ margin: 0 }}>
          {" "}
          <strong className="strong">01</strong>PICK YOUR DESTINATION
        </p>
        <img
          src={moon}
          style={{ width: "10rem", height: "10rem", margin: "2rem" }}
        />
        <div>
          <Link className="destinaion-links p-style" to="/destination/">
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
        <p className="p-style" style={{ marginTop: 0 }}>
          AVG. DISTANCE
        </p>
        <h3 style={{ textTransform: "uppercase" }}>384,400 km</h3>
        <p className="p-style" style={{ textTransform: "uppercase" }}>
          EST. TRAVEL TIME
        </p>
        <h3 style={{ textTransform: "uppercase" }}>3 days</h3>
      </div>
    </div>
  );
};

export default Destination;
