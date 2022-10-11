import douglas from "../images/crew/image-douglas-hurley.png";
import mark from "../images/crew/image-mark-hurley.png";
import victor from "../images/crew/image-victor-hurley.png";
import anousheh from "../images/crew/image-anousheh-hurley.png";
import { useParams } from "react-router-dom";
import backgroundM from "../images/destination/background-destination-mobile.jpg";
const data = [
  {
    title: "commander",
    name: "Douglas Hurley",
    text: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
    img: `${douglas}`,
  },
  {
    title: "flight engineer",
    name: "Anousheh Ansari",
    text: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
    img: `${anousheh}`,
  },
  {
    title: "pilot",
    name: "Victor Glover",
    text: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. ",
    img: `${victor}`,
  },
  {
    title: "mission specialist",
    name: "Mark Shuttleworth",
    text: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
    img: `${mark}`,
  },
];

const CrewModel = () => {
  const title = useParams().title;
  const render = data.find((n) => n.title === title);
  const myStyle = {
    backgroundImage: `url(${backgroundM})`,
    backgroundSize: "cover",
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
          <p className="p-style" style={{ margin: 0 }}>
            {" "}
            <strong className="strong">01</strong>MEET YOUR CREW
          </p>
          <img
            src={render.img}
            style={{ height: "16rem", marginTop: "2rem" }}
          />
          <span style={{ margin: 0 }}></span>
          <div className="circle-box">
            <div className="box" style={{ opacity: 1 }}></div>
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
          </div>
          <h4>{render.title}</h4>
          <h3 style={{ margin: ".5rem 0 1rem" }}>{render.name}</h3>
          <p>{render.text}</p>
        </div>
      </div>
    </div>
  );
};
