import moon from "../images/destination/image-moon.webp";
import europa from "../images/destination/image-europa.webp";
import mars from "../images/destination/image-mars.webp";
import titan from "../images/destination/image-titan.webp";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import backgroundM from "../images/destination/background-destination-mobile.jpg";
import NavBar from "./NavBar";
const data = [
  {
    img: `${moon}`,
    planet: "moon",
    text: "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
    avg: " 384,400 km",
    time: "3 days",
  },
  {
    img: `${mars}`,
    planet: "mars",
    text: " Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
    avg: " 225 mil. km",
    time: "9 months",
  },
  {
    img: `${europa}`,
    planet: "europa",
    text: "  The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
    avg: " 628 mil. km",
    time: "3 years",
  },
  {
    img: `${titan}`,
    planet: "titan",
    text: " The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
    avg: "1.6 bil. km",
    time: "7 years",
  },
];
const DestinationModel = () => {
  let render = data[0];
  const planet = useParams().planet;
  render = data.find((n) => n.planet === planet);
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
          src={render.img}
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
export default DestinationModel;
