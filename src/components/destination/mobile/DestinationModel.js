import { data } from "../data";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import backgroundM from "../../../images/destination/background-destination-mobile.jpg";
import NavBar from "../../navbar/NavBarMobile";

const DestinationMobileModel = () => {
  const planet = useParams().planet;
  const render = data.find((n) => n.planet === planet);
  const myStyle = {
    backgroundImage: `url(${backgroundM})`,
    backgroundSize: "cover",
    minHeight: "100vh",
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
          src={render.img}
          style={{ width: "10rem", height: "10rem", margin: "2rem" }}
        />
        <div>
          <Link className={"destinaion-links p-style"} to="/destination/">
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
        <p
          style={{
            width: "80%",
          }}
        >
          {render.text}
        </p>
        <span
          style={{
            width: "100%",
            height: "1px",
            background: "#383B4B",
            margin: "2rem 0",
          }}
        ></span>
        <p className="p-style" style={{ marginTop: 0 }}>
          AVG. DISTANCE
        </p>
        <h3 style={{ textTransform: "uppercase" }}>{render.avg}</h3>
        <p className="p-style" style={{ textTransform: "uppercase" }}>
          EST. TRAVEL TIME
        </p>
        <h3 style={{ textTransform: "uppercase" }}>{render.time}</h3>
      </div>
    </div>
  );
};
export default DestinationMobileModel;
