import douglas from "../images/crew/image-douglas-hurley.png";
import mark from "../images/crew/image-mark-shuttleworth.png";
import victor from "../images/crew/image-victor-glover.png";
import anousheh from "../images/crew/image-anousheh-ansari.png";
import { useState } from "react";
import backgroundM from "../images/destination/background-destination-mobile.jpg";
import NavBar from "./NavBar";
const data = [
  {
    title: "commander",
    name: "Douglas Hurley",
    text: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
    img: `${douglas}`,
  },
  {
    title: "mission specialist",
    name: "Mark Shuttleworth",
    text: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
    img: `${mark}`,
  },
  {
    title: "pilot",
    name: "Victor Glover",
    text: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. ",
    img: `${victor}`,
  },
  {
    title: "flight engineer",
    name: "Anousheh Ansari",
    text: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
    img: `${anousheh}`,
  },
];

const Crew = () => {
  const [currentPage, setCurrentPage] = useState(0);
  let render = data[currentPage];

  const myStyle = {
    backgroundImage: `url(${backgroundM})`,
    backgroundSize: "cover",
    minHeight: "100vh",
  };

  const handleGoTo = (dataIndex) => {
    setCurrentPage(dataIndex);
  };

  return (
    <div>
      {" "}
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
          <p className="p-style" style={{ margin: "1rem 0 0.5rem" }}>
            {" "}
            <strong className="strong">01</strong>MEET YOUR CREW
          </p>
          <img
            src={render.img}
            style={{ height: "16rem", marginTop: "2rem" }}
          />
          <span style={{ margin: "0 1rem 1rem" }}></span>
          <div className="circle-box">
            {data.map((data, dataIndex) => (
              <div
                key={dataIndex}
                className={dataIndex === currentPage ? "active-box" : "box"}
                onClick={() => handleGoTo(dataIndex)}
              >
                ●
              </div>
            ))}
          </div>
          <h4 style={{ textTransform: "uppercase" }}>{render.title}</h4>
          <h3 style={{ margin: ".5rem 0 1rem", textTransform: "uppercase" }}>
            {render.name}
          </h3>
          <p style={{ width: "83%" }}>{render.text}</p>
        </div>
      </div>
    </div>
  );
};

export default Crew;
