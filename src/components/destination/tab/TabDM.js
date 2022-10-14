import background from "../../../images/destination/background-destination-tablet.jpg";
import NavBar from "../../navbar/MainNavBar";
import { Link, useParams } from "react-router-dom";
import { data } from "../data";

const TabDM = () => {
  const planet = useParams().planet;
  const render = data.find((n) => n.planet === planet);
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
          src={render.img}
          style={{ width: "18rem", height: "18rem", margin: "2rem" }}
        />
        <div style={{ marginBottom: "2rem" }}>
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
        <h1 style={{ marginBottom: 0, textTransform: "uppercase" }}>
          {render.planet}
        </h1>
        <p>{render.text}</p>
        <span></span>
        <div className="dis-box">
          <div>
            {" "}
            <p className="p-style" style={{ marginTop: 0 }}>
              AVG. DISTANCE
            </p>
            <h3 style={{ textTransform: "uppercase" }}>{render.avg}</h3>
          </div>
          <div>
            <p className="p-style" style={{ textTransform: "uppercase" }}>
              EST. TRAVEL TIME
            </p>
            <h3 style={{ textTransform: "uppercase" }}>{render.time}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabDM;
